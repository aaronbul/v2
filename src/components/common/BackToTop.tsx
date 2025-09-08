import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Vérifier si on est proche du bas de la page
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsBottom(isNearBottom);

      // Afficher le bouton si on a scrollé plus de 300px ou si on est en bas de page
      if (window.pageYOffset > 300 || isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 p-2 rounded-full bg-white border-2 border-neutral-800 hover:bg-neutral-800 text-neutral-800 hover:text-white transition-all duration-300 shadow-md ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isBottom ? 'bottom-24 md:bottom-20' : 'bottom-8'}`}
      aria-label="Retour en haut de la page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTop; 