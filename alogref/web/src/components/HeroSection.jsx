
import React from 'react';
import { motion } from 'framer-motion';

const HERO_BACKGROUND = '/hero-background.png';

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
                <a
                  href={primaryCta.href}
                  className="hero-btn-primary"
                >
                  {primaryCta.text}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="hero-btn-secondary"
                >
                  {secondaryCta.text}
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
