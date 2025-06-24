import { useState, useEffect } from 'react';
import { experiences } from '../data/experience';
import ExperienceModal from './ExperienceModal';

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceSkillName, setSourceSkillName] = useState<string | null>(null);
  const [sourceProjectId, setSourceProjectId] = useState<string | null>(null);
  const [sourceProjectTitle, setSourceProjectTitle] = useState<string | null>(null);

  const handleOpenModal = (experience: typeof experiences[0]) => {
    setSelectedExperience(experience);
    setSourceSkillName(null);
    setSourceProjectId(null);
    setSourceProjectTitle(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    setSourceSkillName(null);
    setSourceProjectId(null);
    setSourceProjectTitle(null);
  };

  // Fonction pour revenir au skill source
  const handleReturnToSkill = () => {
    if (sourceSkillName) {
      // Fermer le modal de l'expérience
      setIsModalOpen(false);
      setSelectedExperience(null);
      setSourceSkillName(null);
      setSourceProjectId(null);
      setSourceProjectTitle(null);
      
      // Créer un événement pour ouvrir le modal du skill
      const event = new CustomEvent('openSkillByName', { 
        detail: sourceSkillName
      });
      document.dispatchEvent(event);
    }
  };

  // Fonction pour revenir au projet source
  const handleReturnToProject = () => {
    if (sourceProjectId) {
      // Fermer le modal de l'expérience
      setIsModalOpen(false);
      setSelectedExperience(null);
      setSourceSkillName(null);
      setSourceProjectId(null);
      setSourceProjectTitle(null);
      
      // Créer un événement pour ouvrir le modal du projet
      const event = new CustomEvent('openProjectModal', { 
        detail: sourceProjectId
      });
      document.dispatchEvent(event);
    }
  };

  useEffect(() => {
    // Écouter l'événement pour ouvrir le modal d'une expérience depuis SkillModal
    const handleOpenExperienceModal = (event: CustomEvent) => {
      const data = event.detail;
      const experienceId = data.experienceId;
      const skillName = data.sourceSkillName;
      const projectId = data.sourceProjectId;
      const projectTitle = data.sourceProjectTitle;
      
      const experience = experiences.find(e => e.id === experienceId);
      if (experience) {
        setSelectedExperience(experience);
        setSourceSkillName(skillName);
        setSourceProjectId(projectId);
        setSourceProjectTitle(projectTitle);
        setIsModalOpen(true);
      }
    };

    // Typecasting nécessaire pour TypeScript
    document.addEventListener('openExperienceModal', handleOpenExperienceModal as EventListener);

    return () => {
      document.removeEventListener('openExperienceModal', handleOpenExperienceModal as EventListener);
    };
  }, []);

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">Mon Parcours</h2>
      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        {/* Ligne verticale de la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block"></div>

        {experiences.slice().reverse().map((experience, index) => (
          <div key={index} className="mb-8 md:mb-16 relative">
            {/* Point sur la timeline avec animation au hover */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
            </div>

            <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full justify-center`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:ml-0 cursor-pointer"
                  onClick={() => handleOpenModal(experience)}
                >
                  <div className="flex items-start space-x-4">
                    {experience.logo && (
                      <div className="flex-shrink-0">
                        <img 
                          src={experience.logo} 
                          alt={`Logo ${experience.company}`}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{experience.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 font-semibold mb-2">{experience.company}</p>
                      <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{experience.period}</p>
                      <ul className="text-sm md:text-base text-gray-700 space-y-1 md:space-y-2">
                        {experience.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sourceSkillName={sourceSkillName}
        onReturnToSkill={handleReturnToSkill}
        sourceProjectId={sourceProjectId}
        sourceProjectTitle={sourceProjectTitle}
        onReturnToProject={handleReturnToProject}
      />
    </section>
  );
};

export default ExperienceSection; 