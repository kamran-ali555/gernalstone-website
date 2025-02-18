import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMart</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for quality groceries and household essentials.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">info@freshmart.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">123 Store Street, City, Country</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full focus:outline-none text-gray-800"
              />
              <button className="bg-green-600 px-6 py-2 rounded-r-full hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;