import { experiences } from '../data/experience';

const ExperienceSection = () => {
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

            {/* Point mobile */}
            <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-md md:hidden"></div>

            <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ml-6 md:ml-0">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{experience.titre}</h3>
                  <p className="text-sm md:text-base text-gray-600 font-semibold mb-2">{experience.entreprise}</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{experience.periode}</p>
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
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 