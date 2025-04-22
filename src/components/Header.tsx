import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-800 mr-2" />
            <span className="text-xl font-bold text-blue-900">motiveology.ai</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-800 font-medium capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-2 py-2 rounded-lg shadow-lg">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;