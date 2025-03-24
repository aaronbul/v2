import { experiences } from '../data/experience';

const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-16">Mon Parcours</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Ligne verticale de la timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        {experiences.slice().reverse().map((experience, index) => (
          <div key={index} className="mb-16 relative">
            {/* Point sur la timeline avec animation au hover */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
            </div>

            <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-2">{experience.titre}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{experience.entreprise}</p>
                  <p className="text-sm text-gray-500 mb-4">{experience.periode}</p>
                  <ul className="text-gray-700 space-y-2">
                    {experience.description.map((desc, i) => (
                      <li key={i}>
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