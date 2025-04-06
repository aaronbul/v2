import { useState, useEffect } from 'react';
import { Skill } from '../data/skills';
import SkillModal from './SkillModal';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceProjectId, setSourceProjectId] = useState<string | null>(null);
  const [sourceProjectTitle, setSourceProjectTitle] = useState<string | null>(null);

  const handleOpenModal = (skill: Skill, projectId: string | null = null, projectTitle: string | null = null) => {
    setSelectedSkill(skill);
    setSourceProjectId(projectId);
    setSourceProjectTitle(projectTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
    // Ne pas effacer l'ID du projet source pour permettre d'y revenir même après avoir fermé le modal
  };

  useEffect(() => {
    // Écouter l'événement pour ouvrir le modal d'un skill depuis ProjectModal
    const handleOpenSkillModal = (event: CustomEvent) => {
      const data = event.detail;
      const skillName = data.skillName;
      const projectId = data.sourceProjectId;
      const projectTitle = data.sourceProjectTitle;
      
      const skill = skills.find(s => s.name === skillName);
      if (skill) {
        handleOpenModal(skill, projectId, projectTitle);
      }
    };

    // Écouter l'événement pour ouvrir un skill par son nom (depuis ProjectsSection)
    const handleOpenSkillByName = (event: CustomEvent) => {
      const skillName = event.detail;
      const skill = skills.find(s => s.name === skillName);
      if (skill) {
        // Utiliser la fonction handleOpenModal sans paramètres de projet
        // pour éviter de perdre le contexte de navigation
        setSelectedSkill(skill);
        setIsModalOpen(true);
      }
    };

    // Créer un événement pour que les projets puissent accéder au skill source
    const handleProjectNeedsSkillSource = (event: CustomEvent) => {
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

    return () => {
      document.removeEventListener('openSkillModal', handleOpenSkillModal as EventListener);
      document.removeEventListener('projectNeedsSkillSource', handleProjectNeedsSkillSource as EventListener);
      document.removeEventListener('openSkillByName', handleOpenSkillByName as EventListener);
    };
  }, [skills, selectedSkill, sourceProjectId]);

  // Fonction pour revenir au projet source
  const handleReturnToProject = () => {
    if (sourceProjectId) {
      // Fermer le modal des skills
      setIsModalOpen(false);
      
      // Créer un événement pour ouvrir le modal du projet
      const event = new CustomEvent('openProjectModal', { 
        detail: {
          projectId: sourceProjectId,
          sourceSkillName: selectedSkill?.name
        }
      });
      document.dispatchEvent(event);
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Mes compétences</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
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
        ))}
      </div>

      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sourceProjectId={sourceProjectId}
        sourceProjectTitle={sourceProjectTitle}
        onReturnToProject={handleReturnToProject}
      />
    </div>
  );
};

export default SkillsSection; 