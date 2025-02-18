import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=600&fit=crop',
      title: 'Fresh Groceries',
      subtitle: 'Quality products at the best prices',
    },
    {
      image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=1400&h=600&fit=crop',
      title: 'Organic Spices',
      subtitle: 'Authentic flavors for your kitchen',
    },
    {
      image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1400&h=600&fit=crop',
      title: 'Premium Meats',
      subtitle: 'Fresh cuts delivered daily',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.subtitle}</p>
              <button className="mt-8 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;