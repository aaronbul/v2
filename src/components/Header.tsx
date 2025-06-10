import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gérer la bordure lors du scroll
      setIsScrolled(window.scrollY > 0);

      // Déterminer la section active
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      
      // Vérifier si on est en bas de page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl text-black">Bulgheroni</span>
          </div>

          {/* Menu hamburger pour mobile avec animation */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 relative w-10 h-10 focus:outline-none"
            aria-label="Menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out"
              style={{
                transform: isMenuOpen 
                  ? 'translate(-50%, -50%) rotate(45deg)' 
                  : 'translate(-50%, -50%) translateY(-6px)'
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out"
              style={{
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out"
              style={{
                transform: isMenuOpen 
                  ? 'translate(-50%, -50%) rotate(-45deg)' 
                  : 'translate(-50%, -50%) translateY(6px)'
              }}
            />
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'about', label: 'À propos' },
              { id: 'experience', label: 'Expériences' },
              { id: 'skills', label: 'Compétences' },
              { id: 'projects', label: 'Projets' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li key={id} className="relative">
                <Link 
                  to={`/#${id}`} 
                  className="relative text-black"
                  onMouseEnter={() => setHoveredSection(id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      // Offset différent pour la section contact en fonction de la taille de l'écran
                      const isMobile = window.innerWidth < 768; // Breakpoint md de Tailwind
                      const headerOffset = id === 'contact' 
                        ? (isMobile ? 5 : 40) // 5px pour mobile (réduit pour voir plus du footer), 40px pour desktop
                        : 65;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-black ${
                      hoveredSection === id || activeSection === id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu mobile avec animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-4">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'about', label: 'À propos' },
              { id: 'experience', label: 'Expériences' },
              { id: 'skills', label: 'Compétences' },
              { id: 'projects', label: 'Projets' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li key={id}>
                <Link 
                  to={`/#${id}`} 
                  className="relative block text-black py-2 transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      // Offset différent pour la section contact en fonction de la taille de l'écran
                      const isMobile = window.innerWidth < 768; // Breakpoint md de Tailwind
                      const headerOffset = id === 'contact' 
                        ? (isMobile ? 5 : 40) // 5px pour mobile (réduit pour voir plus du footer), 40px pour desktop
                        : 65;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-[1px] transform-gpu origin-left transition-transform duration-700 ease-out bg-black ${
                      activeSection === id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
