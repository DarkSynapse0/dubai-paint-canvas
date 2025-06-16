
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const Services = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      category: 'residential',
      title: 'Interior Painting',
      description: 'Transform your living spaces with our premium interior painting services',
      features: ['Wall painting', 'Ceiling painting', 'Trim & molding', 'Color consultation'],
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3'
    },
    {
      category: 'residential',
      title: 'Exterior Painting',
      description: 'Protect and beautify your property exterior with weather-resistant coatings',
      features: ['Surface preparation', 'Weather protection', 'Color matching', 'Multi-story capability'],
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3'
    },
    {
      category: 'commercial',
      title: 'Commercial Painting',
      description: 'Professional painting solutions for offices, retail spaces, and commercial buildings',
      features: ['Minimal disruption', 'Fast turnaround', 'Quality materials', 'Safety compliance'],
      icon: '🏬',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3'
    },
    {
      category: 'specialized',
      title: 'Decorative Painting',
      description: 'Artistic finishes and decorative techniques for unique aesthetic appeal',
      features: ['Texture painting', 'Faux finishes', 'Murals', 'Custom designs'],
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3'
    },
    {
      category: 'industrial',
      title: 'Industrial Coating',
      description: 'Heavy-duty protective coatings for industrial facilities and equipment',
      features: ['Corrosion protection', 'Chemical resistance', 'High durability', 'Safety compliance'],
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3'
    },
    {
      category: 'specialized',
      title: 'Waterproofing',
      description: 'Complete waterproofing solutions for walls, roofs, and foundations',
      features: ['Leak prevention', 'Moisture control', 'Long-term protection', 'Various surfaces'],
      icon: '💧',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3'
    },
    {
      category: 'specialized',
      title: 'Wood Coating',
      description: 'Specialized wood staining and coating services for all wood surfaces',
      features: ['Wood staining', 'Protective coating', 'UV protection', 'Natural finish'],
      icon: '🪵',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3'
    },
    {
      category: 'maintenance',
      title: 'Maintenance Services',
      description: 'Regular maintenance and touch-up services to keep your property looking fresh',
      features: ['Regular inspections', 'Touch-up services', 'Preventive maintenance', 'Emergency repairs'],
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'specialized', name: 'Specialized' },
    { id: 'maintenance', name: 'Maintenance' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive painting and coating solutions for residential, commercial, and industrial projects
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-orange-400 font-semibold">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg">How we deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial assessment and project planning' },
              { step: '02', title: 'Preparation', desc: 'Surface cleaning and preparation' },
              { step: '03', title: 'Execution', desc: 'Professional painting with quality materials' },
              { step: '04', title: 'Completion', desc: 'Final inspection and client approval' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
