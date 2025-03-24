import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl text-black"></span>
          </div>
          <ul className="flex items-center space-x-8">
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
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
      </nav>
    </header>
  );
};

export default Header;
