
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { assetUrl } from '@/lib/utils';

const HERO_BACKGROUND = assetUrl('hero-background.png');

const HeroSection = ({ 
  backgroundImage = HERO_BACKGROUND, 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta
}) => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-gradient" aria-hidden="true" />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {title && (
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-title"
            >
              {title}
            </motion.h1>
          )}
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-subtitle"
            >
              {subtitle}
            </motion.p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="hero-btn-primary"
                >
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="hero-btn-secondary"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
