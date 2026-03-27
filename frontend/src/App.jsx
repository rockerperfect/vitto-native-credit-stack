import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Lifecycle from './pages/Lifecycle';
import Collections from './pages/Collections';
import AgenticAI from './pages/AgenticAI';
import APIInfra from './pages/APIInfra';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-primary text-textPrimary font-sans">
    <header className="border-b border-border bg-surface/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white/90 focus:outline-none">
          VITTO<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-textSecondary">
          <Link to="/platform" className="hover:text-textPrimary transition-colors">Platform</Link>
          <Link to="/lifecycle" className="hover:text-textPrimary transition-colors">Lifecycle</Link>
          <Link to="/collections" className="hover:text-textPrimary transition-colors">Collections</Link>
          <Link to="/agentic-ai" className="hover:text-textPrimary transition-colors">Agentic AI</Link>
          <Link to="/api-infra" className="hover:text-textPrimary transition-colors">API</Link>
          <Link to="/about" className="hover:text-textPrimary transition-colors">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/contact" className="text-sm font-medium text-textPrimary hover:text-accent transition-colors self-center">Contact</Link>
          <Link to="/signup" className="btn-primary py-1.5 px-4 text-sm">Sign Up</Link>
        </div>
      </div>
    </header>
    
    <main className="flex-1 flex flex-col">
      {children}
    </main>

    <footer className="border-t border-border bg-surface mt-auto py-8">
      <div className="container mx-auto px-6 text-center text-textSecondary text-sm">
        &copy; {new Date().getFullYear()} Vitto - AI-Native Digital Credit Infrastructure.
      </div>
    </footer>
  </div>
);

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
          <Route path="/api-infra" element={<APIInfra />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
