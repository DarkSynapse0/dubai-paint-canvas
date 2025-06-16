
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              About Paint Tech Contracting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading painting contractors in Dubai with over 15 years of experience in transforming spaces
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Established in Dubai, Paint Tech Contracting WLL has been at the forefront of the painting and coating industry, 
                serving both residential and commercial clients across the UAE. Our journey began with a simple mission: 
                to provide exceptional painting services that transform spaces and exceed expectations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Over the years, we've built a reputation for quality, reliability, and innovation. Our team of skilled professionals 
                combines traditional craftsmanship with modern techniques to deliver results that stand the test of time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3"
                alt="Paint Tech Team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide superior painting and coating solutions that enhance the beauty, protection, and value of our clients' properties 
                while maintaining the highest standards of professionalism, safety, and environmental responsibility.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted and innovative painting contractor in the UAE, recognized for our commitment to quality, 
                customer satisfaction, and sustainable practices that contribute to the region's architectural excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⭐', title: 'Quality', desc: 'Uncompromising commitment to excellence in every project' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent business practices with all stakeholders' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing new technologies and techniques for better results' },
              { icon: '🌱', title: 'Sustainability', desc: 'Environmentally responsible practices and eco-friendly materials' },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                desc: 'Fully licensed contracting company with comprehensive insurance coverage',
                icon: '📋'
              },
              {
                title: 'Experienced Team',
                desc: 'Skilled professionals with extensive training and years of experience',
                icon: '👥'
              },
              {
                title: 'Quality Materials',
                desc: 'Partnership with leading paint manufacturers for premium results',
                icon: '🎨'
              },
              {
                title: 'Timely Delivery',
                desc: 'Committed to completing projects on time and within budget',
                icon: '⏰'
              },
              {
                title: 'Customer Service',
                desc: '24/7 support and maintenance services for complete peace of mind',
                icon: '📞'
              },
              {
                title: 'Competitive Pricing',
                desc: 'Fair, transparent pricing without compromising on quality',
                icon: '💰'
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
