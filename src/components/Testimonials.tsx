import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "NexusAI's machine learning solutions have transformed our customer service operations. We've seen a 40% reduction in response times and vastly improved customer satisfaction.",
    author: "Sarah Johnson",
    position: "CTO, Global Tech",
    logo: "https://placehold.co/200x80/e2e8f0/1e3a8a?text=GlobalTech&font=montserrat",
  },
  {
    quote: "Implementing NexusAI's data analytics platform has given us insights we never thought possible. Our decision-making process is now faster and more accurate.",
    author: "Michael Chen",
    position: "Director of Innovation, FutureCorp",
    logo: "https://placehold.co/200x80/e2e8f0/1e3a8a?text=FutureCorp&font=montserrat",
  },
  {
    quote: "The AI security solution from NexusAI detected threats that our traditional systems missed. Their team's expertise has been invaluable in strengthening our security posture.",
    author: "Elena Rodriguez",
    position: "CISO, SecureNet",
    logo: "https://placehold.co/200x80/e2e8f0/1e3a8a?text=SecureNet&font=montserrat",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across industries harness the power of AI to achieve remarkable results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.logo} 
                        alt="Company logo" 
                        className="h-12 mr-auto"
                      />
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-blue-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-blue-800 hover:text-blue-600 transition-colors hidden md:block"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-blue-800 hover:text-blue-600 transition-colors hidden md:block"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={`https://placehold.co/150x60/e2e8f0/1e3a8a?text=Client${index + 1}&font=montserrat`} 
                alt={`Client ${index + 1}`} 
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;