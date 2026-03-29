import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Lifecycle from './pages/Lifecycle';
import Collections from './pages/Collections';
import API from './pages/API';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import InsightsArticle from './pages/InsightsArticle';
import Footer from './components/layout/Footer';
import VittoLogo from './components/layout/VittoLogo';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => { setMobileOpen(false); }, []);

  const navLinks = [
    { to: '/platform', label: 'Platform' },
    { to: '/lifecycle', label: 'Lifecycle' },
    { to: '/collections', label: 'Collections' },
    { to: '/api', label: 'API' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary text-textPrimary font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`glass-card backdrop-blur-2xl transition-all duration-500 border-white/5 flex items-center justify-between px-5 sm:px-8 py-4 ${
            isScrolled ? 'bg-white/5' : 'bg-transparent border-transparent shadow-none'
          }`}>
            <VittoLogo iconSize={28} textSize="text-lg sm:text-xl" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors">
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/signup" className="hidden sm:flex btn-primary !px-5 !py-2 !text-[10px] !rounded-full uppercase tracking-widest font-bold">
                Get Started
              </Link>
              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-white/10 hover:border-accent/40 transition-all gap-1.5"
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-4 sm:px-6 pb-4">
            <div className="bg-primary/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 mt-2 shadow-2xl">
              <nav className="flex flex-col gap-1">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 hover:text-accent hover:bg-accent/5 transition-all px-4 py-3 rounded-lg"
                  >
                    {label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link
                    to="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full justify-center !text-[11px] uppercase tracking-widest font-bold"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
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
