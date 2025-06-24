import resume from "../assets/aaron_bulgheroni_resume.pdf";

const AboutSection = () => {
  return (
    <section>
      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">À propos de moi</h2>
        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <p className="text-gray-700 leading-relaxed mb-16 text-center">
            Je m'appelle Aaron et je suis expert en ingénierie logicielle. Dès mon plus jeune âge,
            je suis une personne motivée faisant preuve d'une grande détermination dans tout ce que j'entreprends
            que ce soit dans le cadre professionnel ou personnel. J'aspire à une carrière me permettant d'exprimer
            pleinement ma créativité à travers la conception de logiciels élégants et d'expériences utilisateur engageantes.
          </p>

          {/* Mes valeurs */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-2xl font-medium text-gray-900">Mes valeurs</h2>
            </div>
            <hr className="border-t border-gray-200 mb-8" />

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Expertise Humaine</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je place l'utilisateur au centre de chaque solution que je conçois. Je considère ses besoins réels et son contexte d'usage dans toutes mes décisions techniques.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Conscience Professionnelle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je maintiens une veille active sur les évolutions technologiques. Je remets constamment en question mes pratiques pour garantir des solutions pertinentes et éthiques.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Responsabilité Durable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je développe des solutions durables et respectueuses de l'environnement. Je prends en compte l'impact social de chaque décision technique.
                </p>
              </div>
            </div>
          </section>

          {/* Mon projet professionnel */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-2xl font-medium text-gray-900">Mon projet professionnel</h2>
            </div>
            <hr className="border-t border-gray-200 mb-8" />

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Vision à Court Terme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je consolide mon expertise en architecture logicielle et en gestion de projets complexes. Je développe mes compétences en intelligence artificielle et en cybersécurité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Ambition à Long Terme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je souhaite devenir un leader technique reconnu. Je veux guider des équipes vers l'innovation tout en maintenant les plus hauts standards de qualité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Impact Souhaité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je contribue à des projets qui ont un impact positif sur la société. Je me concentre particulièrement sur les domaines de la santé, de l'éducation et du développement durable.
                </p>
              </div>
            </div>
          </section>

          {/* Mes principales qualités */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-2xl font-medium text-gray-900">Mes principales qualités</h2>
            </div>
            <hr className="border-t border-gray-200 mb-8" />

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Écoute Active</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je comprends les besoins non exprimés des utilisateurs. Je traduis les attentes métier en solutions techniques adaptées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Adaptabilité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je m'adapte rapidement aux changements technologiques et organisationnels. J'apprends continuellement de nouvelles compétences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Leadership Collaboratif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je fédère les équipes autour d'objectifs communs. Je valorise les contributions individuelles de chaque membre.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Rigueur Méthodologique</h3>
                <p className="text-gray-600 leading-relaxed">
                  J'adopte une approche structurée et documentée pour tous mes projets. Je garantis la qualité et la maintenabilité des solutions développées.
                </p>
              </div>
            </div>
          </section>

          {/* Mes centres d'intérêt */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-2xl font-medium text-gray-900">Mes centres d'intérêt</h2>
            </div>
            <hr className="border-t border-gray-200 mb-8" />

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Innovation Technologique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je participe activement à la veille technologique. Je contribue à des projets open source et j'assiste à des conférences spécialisées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Photographie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je pratique la photographie de paysage avec passion. Cette activité développe mon sens de l'observation et ma créativité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Randonnée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je pratique la randonnée régulièrement. Cette activité cultive ma persévérance et ma capacité de planification.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Lecture Technique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Je lis constamment la littérature technique spécialisée. J'approfondis mes connaissances à travers les publications scientifiques.
                </p>
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <button
              className="border-2 border-neutral-800 hover:bg-neutral-800 text-neutral-800 hover:text-white font-medium py-2 px-6 rounded-3xl transition-colors duration-300"
              onClick={() => window.open(resume, '_blank')}
            >
              Télécharger mon CV
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection; 