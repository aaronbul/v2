import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Header";
import About from "./pages/Main";
import NotFound from './pages/Page404';
import Footer from "./components/common/Footer";
import BackToTop from "./components/common/BackToTop";

// Composant wrapper pour gérer l'affichage conditionnel
const AppContent = () => {
  const location = useLocation();
  const is404Page = location.pathname !== '/' && 
                    location.pathname !== '/projects' && 
                    location.pathname !== '/contact';

  return (
    <div className="min-h-screen flex flex-col">
      {!is404Page && <Navbar />}
      <main className={`flex-1 ${!is404Page ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      {!is404Page && <Footer />}
      {!is404Page && <BackToTop />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
