
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Carousel Section */}
      <Carousel />

      {/* Services Preview */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional painting solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('interiorPainting'), icon: '🏠' },
              { title: t('exteriorPainting'), icon: '🏢' },
              { title: t('decorativePainting'), icon: '🎨' },
              { title: t('industrialPainting'), icon: '🏭' },
              { title: t('waterproofing'), icon: '💧' },
              { title: t('woodCoating'), icon: '🪵' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">Professional service with quality materials</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t('viewAll')} Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Paint Tech?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '15+ Years Experience', desc: 'Trusted expertise in Dubai market' },
              { title: 'Premium Materials', desc: 'Only the finest paints and coatings' },
              { title: 'Professional Team', desc: 'Skilled craftsmen and project managers' },
              { title: '24/7 Support', desc: 'Always available for your needs' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
