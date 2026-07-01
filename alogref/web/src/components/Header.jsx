
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assetUrl } from '@/lib/utils';
import { navSections, profile } from '@/content/profile';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity } = profile;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group"
          >
            <img
              src={assetUrl('logo.png')}
              alt={identity.name}
              className="h-10 w-10 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-lg font-bold text-primary hidden sm:block">
              {identity.name.split(' ')[0]}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navSections.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 space-y-1">
              {navSections.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
