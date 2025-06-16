
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import BentoGrid, { BentoItem } from '../components/BentoGrid';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Carousel Section */}
      <Carousel />

      {/* Services Preview with Bento Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional painting solutions with cutting-edge technology and premium materials
            </motion.p>
          </motion.div>

          <BentoGrid columns={3}>
            {services.map((service, index) => (
              <BentoItem 
                key={index} 
                size={index === 0 ? 'wide' : index === 2 ? 'tall' : 'medium'}
                delay={index}
              >
                <div className="flex flex-col h-full">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl">{service.icon}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white mb-4 flex-grow">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Professional service with quality materials and expert craftsmanship
                  </p>
                  
                  <motion.button
                    className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-medium transition-colors self-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </BentoItem>
            ))}
          </BentoGrid>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="/services"
              className="btn-modern ripple inline-flex items-center space-x-3 text-white"
            >
              <span>{t('viewAll')} Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ModernCard variant="glass" className="text-center group">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold text-gradient mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.h3>
                  
                  <p className="text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </ModernCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Why Choose Paint Tech?
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Experience the difference of working with Dubai's premier painting contractors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '15+ Years Experience', desc: 'Trusted expertise in Dubai market', icon: '🏆' },
              { title: 'Premium Materials', desc: 'Only the finest paints and coatings', icon: '🎨' },
              { title: 'Professional Team', desc: 'Skilled craftsmen and project managers', icon: '👥' },
              { title: '24/7 Support', desc: 'Always available for your needs', icon: '📞' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ModernCard variant="glass" className="text-center h-full">
                  <motion.div 
                    className="text-4xl mb-6 floating"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
