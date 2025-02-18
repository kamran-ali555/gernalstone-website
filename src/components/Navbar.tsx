import React from 'react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer hover:text-green-600 transition-colors" />
            <span className="text-xl font-bold text-green-600">FreshMart</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="hover:text-green-600 transition-colors">Products</a>
            <a href="#" className="hover:text-green-600 transition-colors">Offers</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-8 pr-4 py-1 rounded-full border focus:outline-none focus:border-green-600"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-green-600 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;