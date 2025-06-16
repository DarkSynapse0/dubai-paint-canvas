
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      category: 'interior',
      name: 'Premium Interior Emulsion',
      brand: 'Jotun',
      description: 'High-quality water-based paint for interior walls and ceilings',
      features: ['Washable', 'Low VOC', 'Easy Application', 'Long-lasting'],
      coverage: '12-14 m²/L',
      finishes: ['Matt', 'Silk', 'Eggshell'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3'
    },
    {
      category: 'exterior',
      name: 'Weather Shield Exterior',
      brand: 'Dulux',
      description: 'Weather-resistant exterior paint for harsh UAE climate',
      features: ['UV Protection', 'Fade Resistant', 'Crack Bridging', 'Mould Resistant'],
      coverage: '10-12 m²/L',
      finishes: ['Matt', 'Satin', 'Gloss'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3'
    },
    {
      category: 'wood',
      name: 'Wood Stain & Varnish',
      brand: 'Nippon Paint',
      description: 'Premium wood finishing products for interior and exterior use',
      features: ['Wood Protection', 'Natural Finish', 'Water Resistant', 'UV Stable'],
      coverage: '14-16 m²/L',
      finishes: ['Clear', 'Tinted', 'Colored'],
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3'
    },
    {
      category: 'industrial',
      name: 'Industrial Epoxy Coating',
      brand: 'PPG',
      description: 'Heavy-duty protective coating for industrial applications',
      features: ['Chemical Resistant', 'Abrasion Resistant', 'Easy Clean', 'Durable'],
      coverage: '8-10 m²/L',
      finishes: ['Gloss', 'Semi-Gloss'],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3'
    },
    {
      category: 'specialty',
      name: 'Waterproofing Membrane',
      brand: 'Asian Paints',
      description: 'Advanced waterproofing solution for roofs and foundations',
      features: ['100% Waterproof', 'Flexible', 'UV Resistant', 'Easy Application'],
      coverage: '4-5 m²/L',
      finishes: ['Smooth', 'Textured'],
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3'
    },
    {
      category: 'thinners',
      name: 'Premium Thinner',
      brand: 'Berger',
      description: 'High-quality thinners for various paint applications',
      features: ['Fast Drying', 'Low Odor', 'Clean Finish', 'Consistent Quality'],
      coverage: 'As per dilution ratio',
      finishes: ['Standard Grade', 'Premium Grade'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎨' },
    { id: 'interior', name: 'Interior Paints', icon: '🏠' },
    { id: 'exterior', name: 'Exterior Paints', icon: '🏢' },
    { id: 'wood', name: 'Wood Coatings', icon: '🪵' },
    { id: 'industrial', name: 'Industrial', icon: '🏭' },
    { id: 'specialty', name: 'Specialty', icon: '⚡' },
    { id: 'thinners', name: 'Thinners', icon: '🧪' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium paints and coatings from world-renowned brands for every application
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.brand}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-orange-400 font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-gray-400 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Info */}
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Coverage:</span>
                      <span className="text-white">{product.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Available Finishes:</span>
                      <span className="text-white">{product.finishes.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 text-sm">
                      Get Quote
                    </button>
                    <button className="flex-1 border border-orange-500 text-orange-400 font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Trusted Brands</h2>
            <p className="text-gray-400 text-lg">Premium products from world-renowned manufacturers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Jotun', logo: '🎨' },
              { name: 'Dulux', logo: '🏠' },
              { name: 'Nippon Paint', logo: '🌸' },
              { name: 'Asian Paints', logo: '🎯' },
              { name: 'Berger', logo: '🖌️' },
              { name: 'PPG', logo: '⚡' },
            ].map((brand, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 group text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <h3 className="text-white font-semibold">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Consultation */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Product Consultation?</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our experts can help you choose the right products for your specific project requirements. 
            Get professional advice on paint selection, color matching, and application techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Consultation
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
