import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-7 w-7 text-blue-400 mr-2" />
              <span className="text-xl font-bold text-white">motiveology.ai</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Transforming businesses through innovative AI solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 0" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Machine Learning', 'Data Analytics', 'Business Intelligence', 'AI Security', 'Consulting'].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Canada</li>
              <li>
                <a href="mailto:motiveology.ai@gmail.com" className="hover:text-blue-400 transition-colors">
                  motiveology.ai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} motiveology.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;