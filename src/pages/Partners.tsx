
import { useLanguage } from '../contexts/LanguageContext';

const Partners = () => {
  const { t } = useLanguage();

  const paintPartners = [
    { name: 'Jotun', logo: '🎨', specialty: 'Marine & Protective Coatings', country: 'Norway' },
    { name: 'Dulux', logo: '🏠', specialty: 'Architectural Paints', country: 'UK' },
    { name: 'Nippon Paint', logo: '🌸', specialty: 'Automotive & Industrial', country: 'Japan' },
    { name: 'Asian Paints', logo: '🎯', specialty: 'Decorative Paints', country: 'India' },
    { name: 'Berger Paints', logo: '🖌️', specialty: 'Home Decor Solutions', country: 'India' },
    { name: 'PPG', logo: '⚡', specialty: 'Industrial Coatings', country: 'USA' },
  ];

  const supplierPartners = [
    { name: 'Al Dobowi Group', logo: '🏗️', specialty: 'Building Materials', country: 'UAE' },
    { name: 'Danube Building Materials', logo: '🌊', specialty: 'Construction Supplies', country: 'UAE' },
    { name: 'ACE Hardware', logo: '🔧', specialty: 'Tools & Equipment', country: 'UAE' },
    { name: 'Home Centre', logo: '🏡', specialty: 'Home Improvement', country: 'UAE' },
  ];

  const certificationPartners = [
    { name: 'Dubai Municipality', logo: '🏛️', specialty: 'Contractor License', type: 'Government' },
    { name: 'Emirates Authority', logo: '🇦🇪', specialty: 'Quality Standards', type: 'Regulatory' },
    { name: 'ISO Certification', logo: '📋', specialty: 'Quality Management', type: 'International' },
    { name: 'OHSAS 18001', logo: '🛡️', specialty: 'Health & Safety', type: 'International' },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strong partnerships with leading brands ensure we deliver the highest quality materials and services
            </p>
          </div>
        </div>
      </section>

      {/* Paint Brand Partners */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Paint Brands</h2>
            <p className="text-gray-400 text-lg">Authorized partners with world-renowned paint manufacturers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintPartners.map((partner, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-orange-400 mb-2">{partner.specialty}</p>
                  <p className="text-gray-400 text-sm">{partner.country}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-600">
                  <div className="flex justify-center">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                      Authorized Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Partners */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supply Chain Partners</h2>
            <p className="text-gray-400 text-lg">Reliable suppliers ensuring consistent material availability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplierPartners.map((partner, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{partner.specialty}</p>
                <p className="text-orange-400 text-xs">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Accreditations</h2>
            <p className="text-gray-400 text-lg">Certified and accredited by leading regulatory bodies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationPartners.map((cert, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.logo}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{cert.specialty}</p>
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  {cert.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-gray-400 text-lg">How our partnerships benefit our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💯',
                title: 'Premium Quality',
                desc: 'Access to the finest paints and materials from trusted global brands'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                desc: 'Better pricing through direct partnerships and bulk purchasing'
              },
              {
                icon: '🚚',
                title: 'Reliable Supply',
                desc: 'Guaranteed material availability and timely project delivery'
              },
              {
                icon: '🔬',
                title: 'Latest Technology',
                desc: 'Access to cutting-edge coating technologies and innovations'
              },
              {
                icon: '📚',
                title: 'Technical Support',
                desc: 'Expert technical guidance and product training from manufacturers'
              },
              {
                icon: '🛡️',
                title: 'Warranty Coverage',
                desc: 'Extended warranty support backed by manufacturer guarantees'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Partnership?</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We're always looking for strategic partnerships with quality suppliers, manufacturers, 
            and service providers who share our commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
