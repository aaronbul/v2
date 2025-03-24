import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project, projects } from "../data/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="opacity-0 animate-fadeIn">
      <h1 className="text-center mb-4 text-3xl font-bold">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
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
      />
    </div>
  );
};

export default ProjectsSection;
