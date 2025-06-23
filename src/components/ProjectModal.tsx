import { Project } from '../data/projects';
import { useEffect, useState } from 'react';
import Portal from './Portal';
import { Skill, skills } from '../data/skills';
import { experiences } from '../data/experience';

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  sourceSkillName?: string | null;
  sourceExperienceId?: string | null;
  sourceExperienceTitle?: string | null;
  onReturnToSkill?: () => void;
  onReturnToExperience?: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose,
  sourceSkillName,
  sourceExperienceId,
  sourceExperienceTitle,
  onReturnToSkill,
  onReturnToExperience
}) => {
  const [skillsMap, setSkillsMap] = useState<Map<string, Skill>>(new Map());

  useEffect(() => {
    // Créer un Map des skills pour un accès rapide
    const map = new Map<string, Skill>();
    skills.forEach(skill => {
      map.set(skill.name.toUpperCase(), skill);
    });
    setSkillsMap(map);
  }, []);

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

  const getSkillByName = (techName: string): Skill | undefined => {
    return skillsMap.get(techName.toUpperCase());
  };

  // Récupérer les expériences associées à ce projet
  const relatedExperiences = project.relatedExperiences && project.relatedExperiences.length > 0
    ? project.relatedExperiences.map(id => experiences.find(e => e.id === id)).filter(Boolean)
    : [];

  // Fonction pour naviguer vers une expérience
  const navigateToExperience = (experienceId: string) => {
    // Fermer ce modal et ouvrir le modal de l'expérience
    onClose();
    const event = new CustomEvent('openExperienceModal', { 
      detail: {
        experienceId: experienceId,
        sourceProjectId: project.id,
        sourceProjectTitle: project.title
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
          <div className="flex flex-col">
            {sourceSkillName && onReturnToSkill && (
              <button 
                onClick={onReturnToSkill}
                className="self-start text-sm text-primary mb-4 flex items-center gap-1 relative group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span className="relative">
                  Revenir à la compétence {sourceSkillName}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-primary scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </button>
            )}
            {sourceExperienceId && sourceExperienceTitle && onReturnToExperience && (
              <button 
                onClick={onReturnToExperience}
                className="self-start text-sm text-primary mb-4 flex items-center gap-1 relative group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span className="relative">
                  Revenir à l'expérience {sourceExperienceTitle}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-primary scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </button>
            )}
            <h1 className="text-center mb-4 text-xl md:text-2xl font-bold">{project.title}</h1>
            <img 
              className="w-full rounded-xl md:rounded-2xl mb-6 md:mb-8" 
              src={project.imageUrl} 
              alt={project.title}
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Présentation</h2>
              <p className="text-sm md:text-base text-gray-700">{project.presentation}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Contexte et objectifs</h2>
              <p className="text-sm md:text-base text-gray-700">{project.context}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Développement</h2>
              <p className="text-sm md:text-base text-gray-700">{project.steps}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Acteurs et interactions</h2>
              <p className="text-sm md:text-base text-gray-700">{project.actors}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Résultats</h2>
              <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">{project.results}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Perspectives</h2>
              <p className="text-sm md:text-base text-gray-700">{project.future}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Regard critique</h2>
              <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">{project.criticalView}</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Technologies utilisées</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => {
                  const skill = getSkillByName(tech);
                  return (
                    <div 
                      key={index}
                      className={`px-2 md:px-3 py-1 bg-gray-200 rounded-full text-xs md:text-sm flex items-center gap-2 ${skill ? 'cursor-pointer hover:bg-gray-300 transition-colors' : ''}`}
                      onClick={() => {
                        if (skill) {
                          // Fermer ce modal
                          onClose();
                          
                          // Créer un événement personnalisé pour ouvrir le modal du skill
                          // En incluant l'ID du projet source pour pouvoir y revenir
                          const event = new CustomEvent('openSkillModal', { 
                            detail: { 
                              skillName: skill.name,
                              sourceProjectId: project.id,
                              sourceProjectTitle: project.title
                            } 
                          });
                          document.dispatchEvent(event);
                        }
                      }}
                    >
                      {skill && (
                        <img src={skill.logo} alt={tech} className="h-4 w-4 object-contain" />
                      )}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {relatedExperiences.length > 0 && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Expériences liées</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedExperiences.map((experience) => experience && (
                    <div 
                      key={experience.id} 
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
    </Portal>
  );
};

export default ProjectModal;