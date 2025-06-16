
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import ModernHeader from '../components/ModernHeader';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Clients from './Clients';
import Partners from './Partners';
import Products from './Products';
import Contact from './Contact';
import FloatingCTA from '../components/FloatingCTA';
import ScrollToTop from '../components/ScrollToTop';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <ModernHeader />
          
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
          
          <Footer />
          <FloatingCTA />
          <ScrollToTop />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
