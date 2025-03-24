import profilePic from "../assets/about/IMG_1418.png";
import { skills } from '../data/skills';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/ContactSection";

const About = () => (
  <div>
    {/* Nouvelle Section 1: Hero avec présentation et photo */}
    <div id="home" className="container mx-auto px-4 md:px-24 py-16 min-h-screen flex items-center -mt-[65px] overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="space-y-8 pt-8 md:pt-64 pl-0 md:pl-56 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xl text-gray-600">Bonjour, je suis Aaron,</p>
            <h1 className="text-4xl md:text-7xl font-bold">INGENIEUR DEVELOPPEMENT</h1>
          </div>
        </div>

        <div className="hidden md:flex justify-end pr-16 pt-16">
          <img 
            src={profilePic} 
            alt="Aaron Bulgheroni" 
            className="w-4/5 h-[600px] object-cover object-top grayscale"
          />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 group cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-gray-600 text-sm font-medium">En savoir plus sur moi</span>
          <button 
            className="flex justify-center group-hover:animate-bounce transition-opacity"
            aria-label="Défiler vers la section À propos"
          >
            <div className="w-5 h-5 border-b-4 border-gray-600 transform rotate-45 translate-x-[10px]"></div>
            <div className="w-5 h-5 border-b-4 border-gray-600 transform -rotate-45 -translate-x-[10px]"></div>
          </button>
        </div>
      </div>
    </div>

    {/* Section 2: Résumé */}
    <div id="about" className="container mx-auto px-4 md:px-24 py-16 min-h-screen bg-white flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">À propos de moi</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
        Je m'appelle Aaron et je suis expert en ingénierie logicielle. Dès mon plus jeune âge, 
        je suis une personne motivé faisant preuve d'une grande détermination dans tout ce que j'entreprends 
        que ce soit dans l'aspect professionnel que personnel. J'aspire à une carrière qui me permettra 
        d'exprimer ma créativité en créant de beaux logiciels et des expériences attrayantes.
        </p>
        <button className="border-2 border-neutral-800 hover:bg-neutral-800 text-neutral-800 hover:text-white font-medium py-2 px-6 rounded-3xl transition-colors duration-300">
          Télécharger mon CV
        </button>
      </div>
    </div>

    {/* Section 3: Parcours */}
    <div id="experience" className="bg-gray-50 container mx-auto px-4 md:px-24 py-16 min-h-screen">
      <div className="h-full w-full">
        <ExperienceSection />
      </div>
    </div>

    {/* Section 4: Compétences */}
    <div id="skills" className="bg-white container mx-auto px-4 md:px-24 py-16 min-h-screen">
      <div className="h-full w-full">
        <SkillsSection skills={skills} />
      </div>
    </div>

    {/* Section 5: Projets */}
    <div id="projects" className="bg-gray-50 container mx-auto px-4 md:px-24 py-16 min-h-[calc(100vh-100px)] flex items-center">
      <div className="h-full w-full">
        <ProjectsSection />
      </div>
    </div>

    {/* Section 6: Contact */}
    <div id="contact" className="bg-white container mx-auto px-4 md:px-24 py-16 min-h-[calc(100vh-100px)] flex items-center">
      <div className="h-full w-full">
        <Contact />
      </div>
    </div>
  </div>
);

export default About;

  