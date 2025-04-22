import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
      >
        Learn More <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
      </a>
    </div>
  );
};

export default ServiceCard;