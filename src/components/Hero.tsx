import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
              AI Solutions that <span className="text-blue-600">Transform</span> Business
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Harness the power of artificial intelligence to optimize operations, gain insights, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
              <button 
                className="border border-blue-800 text-blue-800 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Technology Visual" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;