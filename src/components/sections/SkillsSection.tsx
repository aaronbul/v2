import { useState, useEffect } from 'react';
import { Skill } from '../../data/skills';
import SkillModal from '../modals/SkillModal';
import PieChart from '../common/PieChart';
import Tooltip from '../common/Tooltip';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceProjectId, setSourceProjectId] = useState<string | null>(null);
  const [sourceProjectTitle, setSourceProjectTitle] = useState<string | null>(null);
  const [sourceExperienceId, setSourceExperienceId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'technical' | 'soft' | 'comparative'>('all');
  const [sortType, setSortType] = useState<'alphabetical' | 'experience'>('alphabetical');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);

  // Filtrer et trier les compétences en fonction du filtre actif et du type de tri
  useEffect(() => {
    let filtered = [...skills]; // Créer une copie du tableau
    
    if (activeFilter !== 'all' && activeFilter !== 'comparative') {
      filtered = filtered.filter(skill => skill.category === activeFilter);
    }
    
    // Pour le filtre comparative, on ne trie pas car on affiche en camembert
    if (activeFilter === 'comparative') {
      setFilteredSkills(filtered);
      return;
    }
    
    // Trier selon le type sélectionné
    let sortedSkills;
    if (sortType === 'alphabetical') {
      sortedSkills = [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    } else {
      // Tri par expérience décroissante (plus d'expérience en premier)
      sortedSkills = [...filtered].sort((a, b) => b.experience - a.experience);
    }
    
    setFilteredSkills(sortedSkills);
  }, [skills, activeFilter, sortType]);

  const handleOpenModal = (skill: Skill, projectId: string | null = null, projectTitle: string | null = null, experienceId: string | null = null) => {
    setSelectedSkill(skill);
    setSourceProjectId(projectId);
    setSourceProjectTitle(projectTitle);
    setSourceExperienceId(experienceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
    setSourceProjectId(null);
    setSourceProjectTitle(null);
    setSourceExperienceId(null);
  };

  useEffect(() => {
    // Écouter l'événement pour ouvrir le modal d'un skill depuis ProjectModal
    const handleOpenSkillModal = (event: CustomEvent) => {
      const data = event.detail;
      const skillName = data.skillName;
      const projectId = data.sourceProjectId;
      const projectTitle = data.sourceProjectTitle;
      const experienceId = data.sourceExperienceId;
      
      const skill = skills.find(s => s.name === skillName);
      if (skill) {
        // Si on vient d'un projet, on met à jour les états source
        if (projectId) {
          setSelectedSkill(skill);
          setSourceProjectId(projectId);
          setSourceProjectTitle(projectTitle);
          setSourceExperienceId(null);
          setIsModalOpen(true);
        } else {
          handleOpenModal(skill, projectId, projectTitle, experienceId);
        }
      }
    };

    // Écouter l'événement pour ouvrir un skill par son nom (depuis ProjectsSection)
    const handleOpenSkillByName = (event: CustomEvent) => {
      const data = event.detail;
      const skillName = typeof data === 'string' ? data : data.skillName;
      const projectId = typeof data === 'string' ? null : data.sourceProjectId;
      const projectTitle = typeof data === 'string' ? null : data.sourceProjectTitle;
      
      const skill = skills.find(s => s.name === skillName);
      if (skill) {
        // Si on vient d'un projet, on met à jour les états source
        if (projectId) {
          setSelectedSkill(skill);
          setSourceProjectId(projectId);
          setSourceProjectTitle(projectTitle);
          setSourceExperienceId(null);
          setIsModalOpen(true);
        } else {
          handleOpenModal(skill, projectId, projectTitle, null);
        }
      }
    };

    // Écouter l'événement pour ouvrir un skill par son nom (depuis ExperienceSection)
    const handleOpenSkillByNameFromExperience = (event: CustomEvent) => {
      const data = event.detail;
      const skillName = typeof data === 'string' ? data : data.skillName;
      
      const skill = skills.find(s => s.name === skillName);
      if (skill) {
        setSelectedSkill(skill);
        setSourceProjectId(null);
        setSourceProjectTitle(null);
        setSourceExperienceId(null);
        setIsModalOpen(true);
      }
    };

    // Créer un événement pour que les projets puissent accéder au skill source
    const handleProjectNeedsSkillSource = (_: CustomEvent) => {
      if (selectedSkill) {
        const response = new CustomEvent('projectReceiveSkillSource', {
          detail: {
            skillName: selectedSkill.name,
            fromProjectId: sourceProjectId
          }
        });
        document.dispatchEvent(response);
      }
    };

    // Typecasting nécessaire pour TypeScript
    document.addEventListener('openSkillModal', handleOpenSkillModal as EventListener);
    document.addEventListener('projectNeedsSkillSource', handleProjectNeedsSkillSource as EventListener);
    document.addEventListener('openSkillByName', handleOpenSkillByName as EventListener);
    document.addEventListener('openSkillByNameFromExperience', handleOpenSkillByNameFromExperience as EventListener);

    return () => {
      document.removeEventListener('openSkillModal', handleOpenSkillModal as EventListener);
      document.removeEventListener('projectNeedsSkillSource', handleProjectNeedsSkillSource as EventListener);
      document.removeEventListener('openSkillByName', handleOpenSkillByName as EventListener);
      document.removeEventListener('openSkillByNameFromExperience', handleOpenSkillByNameFromExperience as EventListener);
    };
  }, [skills, selectedSkill, sourceProjectId]);

  // Fonction pour revenir à l'expérience
  const handleReturnToExperience = () => {
    // Fermer le modal de compétence
    setIsModalOpen(false);
    setSelectedSkill(null);
    setSourceProjectId(null);
    setSourceProjectTitle(null);
    setSourceExperienceId(null);
    
    // Créer un événement pour ouvrir la modal d'expérience
    const event = new CustomEvent('openExperienceModal', { 
      detail: {
        experienceId: sourceExperienceId
      }
    });
    document.dispatchEvent(event);
  };

  return (
    <div className="opacity-0 animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Mes Compétences</h1>
      
      {/* Contrôles de filtre et tri */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 max-w-5xl mx-auto px-4">
        {/* Menu de filtre - à gauche */}
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl">
          <span className="text-sm font-medium text-gray-700">Filtrer par :</span>
          <select
            id="filter-select"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value as 'all' | 'technical' | 'soft' | 'comparative')}
            className="px-4 py-2 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all duration-200 cursor-pointer appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all">Toutes</option>
            <option value="technical">Techniques</option>
            <option value="soft">Soft Skills</option>
            <option value="comparative">Comparative</option>
          </select>
        </div>

        {/* Menu de tri - à droite */}
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl">
          <span className="text-sm font-medium text-gray-700">Trier par :</span>
          <select
            id="sort-select"
            value={sortType}
            onChange={(e) => setSortType(e.target.value as 'alphabetical' | 'experience')}
            disabled={activeFilter === 'comparative'}
            className={`px-4 py-2 border-0 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 cursor-pointer appearance-none ${
              activeFilter === 'comparative' 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-50 text-gray-700 focus:bg-white'
            }`}
            style={{
              backgroundImage: activeFilter === 'comparative' 
                ? 'none' 
                : `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="alphabetical">Ordre alphabétique</option>
            <option value="experience">Années d'expérience</option>
          </select>
        </div>
      </div>

      {activeFilter === 'comparative' ? (
        <div className="mb-8 md:mb-16">
          <PieChart 
            skills={filteredSkills} 
            onSkillClick={handleOpenModal}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-16">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="opacity-0 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <Tooltip content={<>Cliquez pour plus de détails sur <strong>{skill.name}</strong></>}>
                <div
                  className="flex flex-col items-center p-3 md:p-4 border-2 border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => handleOpenModal(skill)}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-12 w-12 md:h-20 md:w-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="mt-2 text-xs md:text-sm font-medium text-center">{skill.name}</p>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1 text-center">
                    {skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience
                  </p>
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      )}

      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sourceProjectId={sourceProjectId}
        sourceProjectTitle={sourceProjectTitle}
        sourceExperienceId={sourceExperienceId}
        onReturnToProject={sourceProjectId ? () => {
          setIsModalOpen(false);
          setSelectedSkill(null);
          setSourceProjectId(null);
          setSourceProjectTitle(null);
          setSourceExperienceId(null);
          const event = new CustomEvent('openProjectModal', { 
            detail: sourceProjectId
          });
          document.dispatchEvent(event);
        } : undefined}
        onReturnToExperience={handleReturnToExperience}
      />
    </div>
  );
};

export default SkillsSection; 