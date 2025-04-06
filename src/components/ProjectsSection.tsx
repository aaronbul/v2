import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project, projects } from "../data/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceSkillName, setSourceSkillName] = useState<string | null>(null);

  const handleOpenModal = (project: Project, skillName: string | null = null) => {
    setSelectedProject(project);
    setSourceSkillName(skillName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSourceSkillName(null);
  };

  // Fonction pour revenir au skill source
  const handleReturnToSkill = () => {
    if (sourceSkillName) {
      // Fermer le modal du projet
      setIsModalOpen(false);
      setSelectedProject(null);
      
      // Créer un événement pour ouvrir le modal du skill
      const event = new CustomEvent('returnToSkill', { 
        detail: sourceSkillName
      });
      document.dispatchEvent(event);
    }
  };

  useEffect(() => {
    // Écouter l'événement pour ouvrir le modal d'un projet depuis SkillModal
    const handleOpenProjectModal = (event: CustomEvent) => {
      const data = event.detail;
      // Gestion de la rétrocompatibilité avec les anciens events qui envoyaient juste l'ID
      const projectId = typeof data === 'string' ? data : data.projectId;
      const skillName = typeof data === 'string' ? null : data.sourceSkillName;
      
      const project = projects.find(p => p.id === projectId);
      if (project) {
        handleOpenModal(project, skillName);
      }
    };

    // Écouter l'événement pour revenir à un skill
    const handleReturnToSkill = (event: CustomEvent) => {
      const skillName = event.detail;
      
      // Fermer le modal du projet avant d'ouvrir le skill
      setIsModalOpen(false);
      setSelectedProject(null);
      
      // Créer un événement pour ouvrir le modal du skill
      setTimeout(() => {
        const openSkillEvent = new CustomEvent('openSkillByName', { 
          detail: skillName
        });
        document.dispatchEvent(openSkillEvent);
      }, 100); // Petit délai pour garantir que le modal du projet est bien fermé
    };

    // Typecasting nécessaire pour TypeScript
    document.addEventListener('openProjectModal', handleOpenProjectModal as EventListener);
    document.addEventListener('returnToSkill', handleReturnToSkill as EventListener);

    return () => {
      document.removeEventListener('openProjectModal', handleOpenProjectModal as EventListener);
      document.removeEventListener('returnToSkill', handleReturnToSkill as EventListener);
    };
  }, []);

  return (
    <div className="opacity-0 animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
          >
            <ProjectCard
              project={project}
              onOpenModal={handleOpenModal}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sourceSkillName={sourceSkillName}
        onReturnToSkill={handleReturnToSkill}
      />
    </div>
  );
};

export default ProjectsSection;
