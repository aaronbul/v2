import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-4 text-gray-900 bg-white border-t">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-center md:text-left m-0">
              © {new Date().getFullYear()} Aaron Bulgheroni. Tous droits réservés.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/aaronbul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aaronbulgheroni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="/#contact"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
