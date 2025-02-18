import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { ShoppingBag } from 'lucide-react';

// Product data
const products = {
  rice: [
    { id: 1, name: 'Basmati Rice', price: 24.99, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=300&fit=crop' },
    { id: 2, name: 'Brown Rice', price: 19.99, image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?w=500&h=300&fit=crop' },
    { id: 3, name: 'Jasmine Rice', price: 22.99, image: 'https://images.unsplash.com/photo-1568347355280-d33fdf77d42a?w=500&h=300&fit=crop' },
    { id: 16, name: 'Wild Rice', price: 28.99, image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&h=300&fit=crop' },
    { id: 17, name: 'Sushi Rice', price: 26.99, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&h=300&fit=crop' },
    { id: 18, name: 'Arborio Rice', price: 23.99, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=300&fit=crop' },
  ],
  oils: [
    { id: 4, name: 'Olive Oil', price: 15.99, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=300&fit=crop' },
    { id: 5, name: 'Sunflower Oil', price: 12.99, image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=500&h=300&fit=crop' },
    { id: 6, name: 'Coconut Oil', price: 18.99, image: 'https://images.unsplash.com/photo-1598511726623-d2e9996e1b6c?w=500&h=300&fit=crop' },
    { id: 19, name: 'Avocado Oil', price: 21.99, image: 'https://images.unsplash.com/photo-1611071643078-83fd3dcd6c28?w=500&h=300&fit=crop' },
    { id: 20, name: 'Sesame Oil', price: 16.99, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&h=300&fit=crop' },
    { id: 21, name: 'Walnut Oil', price: 23.99, image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500&h=300&fit=crop' },
  ],
  pulses: [
    { id: 7, name: 'Red Lentils', price: 8.99, image: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?w=500&h=300&fit=crop' },
    { id: 8, name: 'Chickpeas', price: 7.99, image: 'https://images.unsplash.com/photo-1593855682384-2d8567c4b925?w=500&h=300&fit=crop' },
    { id: 9, name: 'Black Beans', price: 6.99, image: 'https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?w=500&h=300&fit=crop' },
    { id: 22, name: 'Green Peas', price: 5.99, image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&h=300&fit=crop' },
    { id: 23, name: 'Kidney Beans', price: 7.49, image: 'https://images.unsplash.com/photo-1551543828-c9c4f4e7f147?w=500&h=300&fit=crop' },
    { id: 24, name: 'Yellow Split Peas', price: 6.49, image: 'https://images.unsplash.com/photo-1604331765144-4e1f6b33e193?w=500&h=300&fit=crop' },
  ],
  spices: [
    { id: 10, name: 'Turmeric', price: 5.99, image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&h=300&fit=crop' },
    { id: 11, name: 'Black Pepper', price: 4.99, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=300&fit=crop' },
    { id: 12, name: 'Cinnamon', price: 6.99, image: 'https://images.unsplash.com/photo-1587131782738-de30ea91a542?w=500&h=300&fit=crop' },
    { id: 25, name: 'Cardamom', price: 8.99, image: 'https://images.unsplash.com/photo-1599909631715-41b3255a1c96?w=500&h=300&fit=crop' },
    { id: 26, name: 'Cumin', price: 4.49, image: 'https://images.unsplash.com/photo-1590574516942-5ee1b123e68c?w=500&h=300&fit=crop' },
    { id: 27, name: 'Saffron', price: 29.99, image: 'https://images.unsplash.com/photo-1594284645752-76be92c6bea4?w=500&h=300&fit=crop' },
  ],
  meats: [
    { id: 13, name: 'Chicken Breast', price: 12.99, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&h=300&fit=crop' },
    { id: 14, name: 'Ground Beef', price: 15.99, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&h=300&fit=crop' },
    { id: 15, name: 'Lamb Chops', price: 24.99, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&h=300&fit=crop' },
    { id: 28, name: 'Pork Tenderloin', price: 18.99, image: 'https://images.unsplash.com/photo-1602881917445-0d1b670cc4f4?w=500&h=300&fit=crop' },
    { id: 29, name: 'Turkey Breast', price: 16.99, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&h=300&fit=crop' },
    { id: 30, name: 'Duck Breast', price: 27.99, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&h=300&fit=crop' },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductSection title="Premium Rice Selection" products={products.rice} />
        <ProductSection title="Cooking Oils" products={products.oils} />
        <ProductSection title="Fresh Pulses" products={products.pulses} />
        <ProductSection title="Aromatic Spices" products={products.spices} />
        <ProductSection title="Quality Meats" products={products.meats} />
      </main>
      <Footer />
    </div>
  );
}

export default App;