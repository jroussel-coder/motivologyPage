import React from 'react';
import { Brain, Database, BarChart, Shield } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const services = [
  {
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models designed to solve your business challenges. From predictive analytics to pattern recognition.',
  },
  {
    icon: <Database className="h-10 w-10 text-blue-600" />,
    title: 'Data Processing & Analytics',
    description: 'Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-blue-600" />,
    title: 'Business Intelligence',
    description: 'Visualize and analyze data across your organization with custom dashboards and reporting tools.',
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'AI Security Solutions',
    description: 'Protect your digital assets with AI-powered threat detection and response systems.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of AI-powered solutions designed to address your unique business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;