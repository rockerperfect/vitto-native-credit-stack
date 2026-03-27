import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Lifecycle from './pages/Lifecycle';
import Collections from './pages/Collections';
import AgenticAI from './pages/AgenticAI';
import API from './pages/API';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import InsightsArticle from './pages/InsightsArticle';
import Footer from './components/layout/Footer';
import VittoLogo from './components/layout/VittoLogo';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-textPrimary font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className="container mx-auto px-6">
          <div className={`glass-card backdrop-blur-2xl transition-all duration-500 border-white/5 flex items-center justify-between px-8 py-4 ${
            isScrolled ? 'bg-white/5' : 'bg-transparent border-transparent shadow-none'
          }`}>
            <VittoLogo iconSize={32} textSize="text-xl" />

            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/platform" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">Platform</Link>
              <Link to="/lifecycle" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">Lifecycle</Link>
              <Link to="/collections" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">Collections</Link>
              <Link to="/agentic-ai" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">Agentic AI</Link>
              <Link to="/api" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">API</Link>
              <Link to="/about" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">About</Link>
              <Link to="/contact" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">Contact</Link>
            </nav>

            <div className="flex gap-4">
              <Link to="/signup" className="btn-primary !px-6 !py-2 !text-[10px] !rounded-full uppercase tracking-widest font-bold">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/api" element={<API />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/insights/ai-native-vs-retrofit" element={<InsightsArticle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
