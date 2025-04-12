import { Skill } from '../data/skills';
import { useEffect } from 'react';
import Portal from './Portal';
import { projects } from '../data/projects';

type SkillModalProps = {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
  sourceProjectId?: string | null;
  sourceProjectTitle?: string | null;
  onReturnToProject?: () => void;
};

const SkillModal: React.FC<SkillModalProps> = ({ 
  skill, 
  isOpen, 
  onClose, 
  sourceProjectId, 
  sourceProjectTitle,
  onReturnToProject 
}) => {
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

  if (!skill || !isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Récupérer les projets associés à cette compétence
  const relatedProjects = skill.relatedProjects && skill.relatedProjects.length > 0
    ? skill.relatedProjects.map(id => projects.find(p => p.id === id)).filter(Boolean)
    : [];

  // Fonction pour naviguer vers un projet
  const navigateToProject = (projectId: string) => {
    // Si c'est le projet source, utiliser la fonction existante
    if (projectId === sourceProjectId && onReturnToProject) {
      onReturnToProject();
      return;
    }
    
    // Sinon, fermer ce modal et ouvrir le modal du projet
    onClose();
    const event = new CustomEvent('openProjectModal', { 
      detail: {
        projectId: projectId,
        sourceSkillName: skill.name
      }
    });
    document.dispatchEvent(event);
  };

  return (
    <Portal>
      <div 
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={onClose}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div 
          className="bg-white rounded-2xl md:rounded-3xl w-full max-w-4xl h-[500px] md:h-[600px] overflow-y-auto p-4 md:p-6 m-0 md:m-4 scrollbar-hide"
          onClick={handleContentClick}
        >
          <div className="flex flex-col items-center mb-6">
            {sourceProjectId && onReturnToProject && (
              <button 
                onClick={onReturnToProject}
                className="self-start text-sm text-primary mb-4 flex items-center gap-1 relative group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span className="relative">
                  Revenir au projet {sourceProjectTitle || ''}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-primary scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </button>
            )}
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="h-24 w-24 object-contain mb-4" 
            />
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-1">{skill.name}</h1>
            <p className="text-gray-600 text-sm">
              {skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Présentation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold text-primary mb-3">À propos de {skill.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.officialDescription || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.`}
                </p>
                {skill.officialWebsite && (
                  <a 
                    href={skill.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-3 inline-block"
                  >
                    En savoir plus →
                  </a>
                )}
              </div>
              <div>
                <h3 className="text-md font-semibold text-primary mb-3">Mon expérience</h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.`}
                </p>
              </div>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Projets disponibles utilisant {skill.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProjects.map((project) => project && (
                  <div 
                    key={project.id} 
                    className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => navigateToProject(project.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="overflow-hidden rounded-md w-16 h-12">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skill.examples && skill.examples.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Autres projets utilisant {skill.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skill.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">{example.title}</h3>
                    <p className="text-sm text-gray-600">{example.description}</p>
                    {example.link && (
                      <a 
                        href={example.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        Voir le projet →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default SkillModal; 