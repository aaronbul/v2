import profilePic from "../assets/about/IMG_1418.png";
import { linkedSkills } from '../data/skills';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import Contact from "../components/sections/ContactSection";
import AboutSection from "../components/sections/AboutSection";

const Main = () => (
  <div>
    {/* Nouvelle Section 1: Hero avec présentation et photo */}
    <div id="home" className="min-h-screen flex items-center -mt-[120px] lg:-mt-[65px] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="space-y-8 pt-4 lg:pt-64 pl-0 lg:pl-16 text-center lg:text-left">
            <div className="space-y-1">
              <p className="text-xl text-gray-600">Bonjour, je suis Aaron,</p>
              <h1 className="text-4xl md:text-6xl font-bold">INGENIEUR DEVELOPPEMENT</h1>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-center pr-16 pt-16">
            <img 
              src={profilePic} 
              alt="Aaron Bulgheroni" 
              className="w-[400px] h-[600px] object-cover object-top grayscale"
            />
          </div>
        </div>
        
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 group cursor-pointer"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const headerOffset = 65; // Augmentation de l'offset pour éviter de voir la section précédente
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="text-gray-600 text-sm font-medium group-hover:font-bold">En savoir plus sur moi</span>
            <button 
              className="flex justify-center animate-bounce transition-opacity"
              aria-label="Défiler vers la section À propos"
            >
              <div className="w-5 h-5 border-b-4 border-gray-600 transform rotate-45 translate-x-[10px]"></div>
              <div className="w-5 h-5 border-b-4 border-gray-600 transform -rotate-45 -translate-x-[10px]"></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Résumé */}
    <div id="about" className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="h-full w-full">
          <AboutSection />
        </div>
      </div>
    </div>

    {/* Section 3: Parcours */}
    <div id="experience" className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="h-full w-full">
          <ExperienceSection />
        </div>
      </div>
    </div>

    {/* Section 4: Compétences */}
    <div id="skills" className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="h-full w-full">
          <SkillsSection skills={linkedSkills} />
        </div>
      </div>
    </div>

    {/* Section 5: Projets */}
    <div id="projects" className="bg-gray-50 min-h-[calc(100vh-100px)] flex items-center">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="h-full w-full">
          <ProjectsSection />
        </div>
      </div>
    </div>

    {/* Section 6: Contact */}
    <div id="contact" className="bg-white min-h-[calc(100vh-100px)] flex items-center">
      <div className="container mx-auto px-4 md:px-24 py-16">
        <div className="h-full w-full">
          <Contact />
        </div>
      </div>
    </div>
  </div>
);

export default Main;

  