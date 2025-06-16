
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  // Define sub-menu items for About and Services
  const aboutSubItems = [
    { name: 'Our Story', href: '/about#story', description: 'Learn about our journey and history' },
    { name: 'Mission & Vision', href: '/about#mission', description: 'Our commitment to excellence' },
    { name: 'Our Team', href: '/about#team', description: 'Meet our skilled professionals' },
    { name: 'Why Choose Us', href: '/about#why-choose', description: 'What sets us apart' },
  ];

  const servicesSubItems = [
    { name: t('interiorPainting'), href: '/services#interior', description: 'Professional interior painting services' },
    { name: t('exteriorPainting'), href: '/services#exterior', description: 'Weather-resistant exterior painting' },
    { name: t('decorativePainting'), href: '/services#decorative', description: 'Artistic and decorative finishes' },
    { name: t('industrialPainting'), href: '/services#industrial', description: 'Industrial coating solutions' },
    { name: t('waterproofing'), href: '/services#waterproofing', description: 'Waterproofing and protection' },
    { name: t('woodCoating'), href: '/services#wood', description: 'Wood coating and finishing' },
  ];

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('products'), href: '/products' },
    { name: t('clients'), href: '/clients' },
    { name: t('partners'), href: '/partners' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PT</span>
            </div>
            <span className="font-bold text-lg text-white">Paint Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-gray-800 hover:text-orange-400 transition-colors duration-200",
                          location.pathname === item.href ? 'text-orange-400' : 'text-gray-300'
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800 hover:text-orange-400 text-gray-300 data-[state=open]:text-orange-400">
                    {t('about')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] bg-gray-800 border border-gray-700">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/20 to-orange-600/20 p-6 no-underline outline-none focus:shadow-md hover:bg-gradient-to-b hover:from-orange-500/30 hover:to-orange-600/30 transition-colors"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              About Paint Tech
                            </div>
                            <p className="text-sm leading-tight text-gray-300">
                              15+ years of excellence in Dubai's painting industry
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        {aboutSubItems.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-orange-400 focus:bg-gray-700 focus:text-orange-400"
                            >
                              <div className="text-sm font-medium leading-none text-white">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800 hover:text-orange-400 text-gray-300 data-[state=open]:text-orange-400">
                    {t('services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] bg-gray-800 border border-gray-700">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/20 to-orange-600/20 p-6 no-underline outline-none focus:shadow-md hover:bg-gradient-to-b hover:from-orange-500/30 hover:to-orange-600/30 transition-colors"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Our Services
                            </div>
                            <p className="text-sm leading-tight text-gray-300">
                              Comprehensive painting solutions for all your needs
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {servicesSubItems.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-orange-400 focus:bg-gray-700 focus:text-orange-400"
                            >
                              <div className="text-sm font-medium leading-none text-white">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800 mt-2">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile About submenu */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">{t('about')}</div>
                <div className="ml-4 space-y-1">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-2 py-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Services submenu */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">{t('services')}</div>
                <div className="ml-4 space-y-1">
                  {servicesSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-2 py-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
