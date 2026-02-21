import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', url: 'https://mediatech.group/about/' },
    { name: 'Portfolio', url: 'https://mediatech.group/portfolio/' },
    { name: 'Websites', url: 'https://mediatech.group/services/website-design-development/' },
    { name: 'AI', url: 'https://mediatech.group/services/intelligent-automation/' },
    { name: 'IT', url: 'https://mediatech.group/services/managed-it-services/' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between glass-effect rounded-full px-6 py-3 shadow-lg border border-brand-light-teal/20">
          <a href="/" className="flex items-center space-x-3" aria-label="Media & Technology Group Homepage">
            <motion.div whileHover={{ scale: 1.15, rotate: 15 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <img 
                src="https://horizons-cdn.hostinger.com/fd14ca4f-fea0-4be5-a5a9-75c4a34f7591/6e3ff140c6a3ca9a7dcd49008d949b59.png"
                alt="Media & Technology Group Logo"
                className="h-[75px]"
              />
            </motion.div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-brand-off-white hover:text-brand-gold transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-off-white"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 glass-effect rounded-xl"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-brand-off-white hover:bg-white/10 rounded-md p-3 transition-colors text-left font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;