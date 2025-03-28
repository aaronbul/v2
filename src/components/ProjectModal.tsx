import { Project } from '../data/projects';
import { useEffect } from 'react';

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-6 m-0 md:m-4 scrollbar-hide"
        onClick={handleContentClick}
      >
        <h1 className="text-center mb-4 text-xl md:text-2xl font-bold">{project.title}</h1>
        <img 
          className="w-full rounded-xl md:rounded-2xl mb-6 md:mb-8" 
          src={project.imageUrl} 
          alt={project.title}
        />
        
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Description détaillée</h2>
            <p className="text-sm md:text-base text-gray-700">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 md:px-3 py-1 bg-gray-200 rounded-full text-xs md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.codeLink && (
              <button 
                onClick={() => window.open(project.codeLink, '_blank')}
                className={`w-full sm:w-auto inline-block font-medium py-2 px-4 rounded-3xl transition-all duration-300 ${
                  project.link 
                    ? "bg-neutral-800 text-white hover:bg-neutral-950 hover:scale-105" 
                    : "bg-neutral-800 text-white hover:bg-neutral-950 hover:scale-105"
                }`}
              >
                Voir le code
              </button>
            )}
            {project.link && (
              <button 
                onClick={() => window.open(project.link, '_blank')}
                className={`w-full sm:w-auto inline-block font-medium py-2 px-4 rounded-3xl transition-all duration-300 ${
                  project.codeLink
                    ? "border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white"
                    : "bg-neutral-800 text-white hover:bg-neutral-950 hover:scale-105"
                }`}
              >
                Voir le projet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 