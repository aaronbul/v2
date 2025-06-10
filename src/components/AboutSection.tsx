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
                  L'excellence technique ne peut exister sans une approche profondément humaine. Chaque solution que je
                  conçois place l'utilisateur au centre, en considérant ses besoins réels et son contexte d'usage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Conscience Professionnelle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dans un monde technologique en constante évolution, je maintiens une veille active et une remise en
                  question permanente de mes pratiques pour garantir des solutions toujours pertinentes et éthiques.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Responsabilité Durable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chaque décision technique a un impact. Je m'engage à développer des solutions durables, respectueuses de
                  l'environnement et socialement responsables.
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
                  Consolider mon expertise en architecture logicielle et en gestion de projets complexes, tout en
                  développant mes compétences en intelligence artificielle et en cybersécurité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Ambition à Long Terme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Devenir un leader technique reconnu, capable de guider des équipes vers l'innovation tout en maintenant
                  les plus hauts standards de qualité et d'éthique professionnelle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Impact Souhaité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Contribuer à des projets qui ont un impact positif sur la société, en particulier dans les domaines de
                  la santé, de l'éducation et du développement durable.
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
                  Capacité à comprendre les besoins non exprimés et à traduire les attentes métier en solutions techniques
                  adaptées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Adaptabilité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexibilité face aux changements technologiques et organisationnels, avec une capacité d'apprentissage
                  rapide et continue.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Leadership Collaboratif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aptitude à fédérer les équipes autour d'objectifs communs tout en valorisant les contributions
                  individuelles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Rigueur Méthodologique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Approche structurée et documentée des projets, garantissant qualité et maintenabilité des solutions
                  développées.
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
                  Veille active sur les technologies émergentes, participation à des conférences et contribution à des
                  projets open source.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Photographie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Passion pour la photographie de paysage qui développe mon sens de l'observation et ma créativité,
                  qualités transférables en ingénierie.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Randonnée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pratique régulière qui cultive ma persévérance, ma planification et ma gestion du stress - des atouts
                  précieux en gestion de projet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Lecture Technique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Approfondissement constant de mes connaissances à travers la littérature spécialisée et les publications
                  scientifiques.
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