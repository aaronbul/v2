import { useState, useEffect } from 'react';
import { Skill } from '../data/skills';
import SkillModal from './SkillModal';

interface SkillsSectionProps {
  skills: Skill[];
  experienceTitle?: string;
}

const SkillsSection = ({ skills, experienceTitle }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceProjectId, setSourceProjectId] = useState<string | null>(null);
  const [sourceProjectTitle, setSourceProjectTitle] = useState<string | null>(null);
  const [sourceExperienceId, setSourceExperienceId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'technical' | 'soft'>('all');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);

  // Filtrer les compétences en fonction du filtre actif
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeFilter));
    }
  }, [skills, activeFilter]);

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
      
      {/* Boutons de filtre */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 md:space-x-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setActiveFilter('technical')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeFilter === 'technical'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            Techniques
          </button>
          <button
            onClick={() => setActiveFilter('soft')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeFilter === 'soft'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            Soft Skills
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-16">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
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
          </div>
        ))}
      </div>

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