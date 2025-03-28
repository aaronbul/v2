import { Skill } from '../data/skills';
import { useEffect } from 'react';

type SkillModalProps = {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
};

const SkillModal: React.FC<SkillModalProps> = ({ skill, isOpen, onClose }) => {
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

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-6 m-0 md:m-4 scrollbar-hide"
        onClick={handleContentClick}
      >
        <div className="flex flex-col items-center mb-6">
          <img 
            src={skill.logo} 
            alt={skill.name} 
            className="h-24 w-24 object-contain mb-4" 
          />
          <h1 className="text-2xl md:text-3xl font-bold text-center">{skill.name}</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Expérience</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(skill.experience / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm font-medium">
              {skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Présentation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-medium mb-2">À propos de {skill.name}</h3>
              <p className="text-gray-700">
                {skill.officialDescription || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.`}
              </p>
              {skill.officialWebsite && (
                <a 
                  href={skill.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  En savoir plus →
                </a>
              )}
            </div>
            <div>
              <h3 className="text-md font-medium mb-2">Mon expérience</h3>
              <p className="text-gray-700">
                {skill.description || `Je maîtrise ${skill.name} et l'utilise régulièrement dans mes projets.`}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">Exemples de réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skill.examples?.map((example, index) => (
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
      </div>
    </div>
  );
};

export default SkillModal; 