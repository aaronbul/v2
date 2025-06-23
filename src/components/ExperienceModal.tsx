import { Experience } from '../data/experience';
import { useEffect, useState } from 'react';
import Portal from './Portal';
import { projects } from '../data/projects';
import { Skill, skills } from '../data/skills';

type ExperienceModalProps = {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
  sourceSkillName?: string | null;
  sourceProjectId?: string | null;
  sourceProjectTitle?: string | null;
  onReturnToSkill?: () => void;
  onReturnToProject?: () => void;
};

const ExperienceModal: React.FC<ExperienceModalProps> = ({ 
  experience, 
  isOpen, 
  onClose,
  sourceSkillName,
  sourceProjectId,
  sourceProjectTitle,
  onReturnToSkill,
  onReturnToProject
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

  if (!experience || !isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Récupérer les projets associés à cette entreprise
  const relatedProjects = projects.filter(project => 
    project.company === experience.company
  );

  const getSkillByName = (skillName: string): Skill | undefined => {
    return skillsMap.get(skillName.toUpperCase());
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
            {sourceProjectId && sourceProjectTitle && onReturnToProject && (
              <button 
                onClick={onReturnToProject}
                className="self-start text-sm text-primary mb-4 flex items-center gap-1 relative group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span className="relative">
                  Revenir au projet {sourceProjectTitle}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-primary scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </button>
            )}
            <div className="flex flex-col items-center mb-6">
              <div 
                className={`${experience.website ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
                onClick={() => {
                  if (experience.website) {
                    window.open(experience.website, '_blank', 'noopener,noreferrer');
                  }
                }}
                title={experience.website ? `Visiter le site de ${experience.company}` : undefined}
              >
                <img 
                  src={experience.logo} 
                  alt={experience.company} 
                  className="h-24 w-24 object-contain mb-4" 
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-center mb-1">{experience.title}</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 text-center mb-2">{experience.company}</h2>
              <p className="text-gray-500">{experience.period}</p>
              {experience.status && (
                <span className="mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {experience.status}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {experience.aboutCompany && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">À propos de l'entreprise</h2>
                <p className="text-gray-600 leading-relaxed">{experience.aboutCompany}</p>
              </div>
            )}

            {experience.responsibility && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Responsabilités</h2>
                <p className="text-gray-600 leading-relaxed">{experience.responsibility}</p>
              </div>
            )}

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Description</h2>
              <div className="space-y-2">
                {experience.description.map((desc, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">{desc}</p>
                ))}
              </div>
            </div>

            {experience.skills && experience.skills.length > 0 && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Compétences</h2>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skillName, index) => {
                    const skill = getSkillByName(skillName);
                    return (
                      <div 
                        key={index}
                        className={`px-2 md:px-3 py-1 bg-gray-200 rounded-full text-xs md:text-sm flex items-center gap-2 ${skill ? 'cursor-pointer hover:bg-gray-300 transition-colors' : ''}`}
                        onClick={() => {
                          if (skill) {
                            // Fermer ce modal
                            onClose();
                            
                            // Créer un événement personnalisé pour ouvrir le modal du skill
                            const event = new CustomEvent('openSkillModal', { 
                              detail: { 
                                skillName: skill.name,
                                sourceExperienceId: experience.id
                              } 
                            });
                            document.dispatchEvent(event);
                          }
                        }}
                      >
                        {skill && (
                          <img src={skill.logo} alt={skillName} className="h-4 w-4 object-contain" />
                        )}
                        <span>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {relatedProjects.length > 0 && (
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">Projets réalisés</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedProjects.map((project) => (
                    <div 
                      key={project.id} 
                      className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        // Fermer ce modal
                        onClose();
                        
                        // Créer un événement personnalisé pour ouvrir le modal du projet
                        const event = new CustomEvent('openProjectModalFromExperience', { 
                          detail: { 
                            projectId: project.id,
                            sourceExperienceId: experience.id,
                            sourceExperienceTitle: experience.title
                          }
                        });
                        document.dispatchEvent(event);
                      }}
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
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ExperienceModal; 