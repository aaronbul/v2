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
                  Placer l'utilisateur au centre de chaque solution permet de créer des interfaces intuitives et des expériences engageantes. Cette approche se traduit par une adoption plus rapide et une satisfaction utilisateur accrue.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Conscience Professionnelle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintenir une veille active sur les évolutions technologiques permet d'anticiper les besoins futurs et d'adapter les solutions en conséquence. Cela se traduit par des architectures robustes et des choix technologiques pertinents.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Responsabilité Durable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Développer des solutions durables et respectueuses de l'environnement permet de réduire l'empreinte carbone des applications. Cela se traduit par des systèmes optimisés et un impact social positif.
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
                  Consolider l'expertise en architecture logicielle et en gestion de projets complexes permet de mener des initiatives plus ambitieuses. Développer les compétences en IA et cybersécurité se traduit par des solutions plus innovantes et sécurisées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Ambition à Long Terme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Devenir un leader technique reconnu permet de fédérer des équipes autour de projets innovants. Guider les équipes vers l'innovation se traduit par une culture d'excellence et de créativité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Impact Souhaité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Contribuer à des projets à impact positif sur la société permet de créer de la valeur durable. Se concentrer sur la santé, l'éducation et le développement durable se traduit par des solutions qui améliorent la qualité de vie.
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
                  Comprendre les besoins non exprimés des utilisateurs permet de créer des solutions vraiment adaptées. Traduire les attentes métier en solutions techniques se traduit par une satisfaction client accrue.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Adaptabilité</h3>
                <p className="text-gray-600 leading-relaxed">
                  S'adapter rapidement aux changements technologiques et organisationnels permet de maintenir la compétitivité. Apprendre continuellement de nouvelles compétences se traduit par une innovation constante.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Leadership Collaboratif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fédérer les équipes autour d'objectifs communs permet d'atteindre des résultats exceptionnels. Valoriser les contributions individuelles se traduit par une motivation et une créativité accrues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Rigueur Méthodologique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Adopter une approche structurée et documentée pour tous les projets permet de garantir la qualité. Cette rigueur se traduit par des solutions maintenables et évolutives.
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
                  Participer activement à la veille technologique permet de rester à la pointe de l'innovation. Contribuer à des projets open source et assister à des conférences se traduit par un partage de connaissances enrichissant.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Photographie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pratiquer la photographie de paysage développe le sens de l'observation et la créativité. Cette activité se traduit par une attention particulière aux détails dans le design d'interface.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Randonnée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pratiquer la randonnée régulièrement cultive la persévérance et la capacité de planification. Cette expérience se traduit par une approche méthodique dans la gestion de projets complexes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Lecture Technique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lire constamment la littérature technique spécialisée permet d'approfondir les connaissances. Cette pratique se traduit par des solutions techniques plus robustes et innovantes.
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