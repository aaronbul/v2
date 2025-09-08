import { Skill } from '../../data/skills';
import { useEffect } from 'react';
import Portal from '../common/Portal';
import { projects } from '../../data/projects';
import { experiences } from '../../data/experience';

type SkillModalProps = {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
  sourceProjectId?: string | null;
  sourceProjectTitle?: string | null;
  sourceExperienceId?: string | null;
  onReturnToProject?: () => void;
  onReturnToExperience?: () => void;
};

const SkillModal: React.FC<SkillModalProps> = ({ 
  skill, 
  isOpen, 
  onClose, 
  sourceProjectId, 
  sourceProjectTitle,
  sourceExperienceId,
  onReturnToProject,
  onReturnToExperience // Utilisé dans le JSX pour le bouton de retour
}) => {
  // Fonction pour générer les étoiles en fonction du niveau d'expérience
  const generateStars = (experience: number) => {
    const maxStars = 5;
    const stars = [];
    
    // Nouvelle logique : 2 étoiles minimum, 5 étoiles maximum
    // 1-2 ans = 2 étoiles, 3-4 ans = 3 étoiles, 5-6 ans = 4 étoiles, 7+ ans = 5 étoiles
    let filledStars;
    if (experience <= 2) {
      filledStars = 2;
    } else if (experience <= 4) {
      filledStars = 3;
    } else if (experience <= 6) {
      filledStars = 4;
    } else {
      filledStars = 5;
    }

    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < filledStars ? "currentColor" : "none"}
          stroke={i < filledStars ? "none" : "currentColor"}
          className="w-4 h-4 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      );
    }
    return stars;
  };

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

  // Récupérer les expériences associées à cette compétence
  const relatedExperiences = skill.relatedExperiences && skill.relatedExperiences.length > 0
    ? skill.relatedExperiences.map(id => experiences.find(e => e.id === id)).filter(Boolean)
    : [];

  // Récupérer l'expérience source pour afficher son titre
  const sourceExperience = sourceExperienceId ? experiences.find(e => e.id === sourceExperienceId) : null;

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

  // Fonction pour naviguer vers une expérience
  const navigateToExperience = (experienceId: string) => {
    // Fermer ce modal et ouvrir le modal de l'expérience
    onClose();
    const event = new CustomEvent('openExperienceModal', { 
      detail: {
        experienceId: experienceId,
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
            {sourceExperienceId && onReturnToExperience && (
              <button 
                onClick={onReturnToExperience}
                className="self-start text-sm text-primary mb-4 flex items-center gap-1 relative group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span className="relative">
                  Revenir à l'expérience {sourceExperience?.title || ''}
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
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
              <span>{skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience</span>
              <div className="flex items-center text-yellow-500">
                {generateStars(skill.experience)}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Présentation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold text-primary mb-3">À propos de {skill.name}</h3>
                <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: skill.officialDescription || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.` }} />
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
                <div className="text-gray-600 leading-relaxed">
                  {skill.description?.split('\n\n').map((para: string, index: number) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                  )) || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.`}
                </div>
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

          {relatedExperiences.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">Expériences utilisant {skill.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedExperiences.map((experience) => experience && (
                  <div 
                    key={experience.title} 
                    className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => navigateToExperience(experience.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="overflow-hidden rounded-md w-16 h-12">
                        <img 
                          src={experience.logo || '/placeholder.png'} 
                          alt={experience.company} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{experience.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{experience.company}</p>
                        <p className="text-xs text-gray-500">{experience.period}</p>
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