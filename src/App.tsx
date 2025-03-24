import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header";
import About from "./pages/About";
import NotFound from './pages/Page404';
import Footer from "./components/Footer";

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
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
