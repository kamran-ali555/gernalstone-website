import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;