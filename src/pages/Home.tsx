
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ModernCard from '../components/ModernCard';
import { ArrowRight, Star, Award, Users, Clock } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    { title: t('interiorPainting'), icon: '🏠', gradient: 'from-blue-500 to-blue-600' },
    { title: t('exteriorPainting'), icon: '🏢', gradient: 'from-green-500 to-green-600' },
    { title: t('decorativePainting'), icon: '🎨', gradient: 'from-purple-500 to-purple-600' },
    { title: t('industrialPainting'), icon: '🏭', gradient: 'from-red-500 to-red-600' },
    { title: t('waterproofing'), icon: '💧', gradient: 'from-cyan-500 to-cyan-600' },
    { title: t('woodCoating'), icon: '🪵', gradient: 'from-amber-500 to-amber-600' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Users },
  ];

  return (
    <div className="pt-20">
      {/* Hero Carousel Section */}
      <Carousel />

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Professional painting solutions with cutting-edge technology and premium materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ModernCard key={index} variant="glass" className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Professional service with quality materials and expert craftsmanship
                </p>
                
                <button className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-medium transition-colors mx-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </ModernCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-modern ripple inline-flex items-center space-x-3 text-white"
            >
              <span>{t('viewAll')} Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ModernCard key={index} variant="glass" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </h3>
                
                <p className="text-gray-400 font-medium">
                  {stat.label}
                </p>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Why Choose Paint Tech?
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Experience the difference of working with Dubai's premier painting contractors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '15+ Years Experience', desc: 'Trusted expertise in Dubai market', icon: '🏆' },
              { title: 'Premium Materials', desc: 'Only the finest paints and coatings', icon: '🎨' },
              { title: 'Professional Team', desc: 'Skilled craftsmen and project managers', icon: '👥' },
              { title: '24/7 Support', desc: 'Always available for your needs', icon: '📞' },
            ].map((item, index) => (
              <ModernCard key={index} variant="glass" className="text-center h-full">
                <div className="text-4xl mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
