
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={assetUrl('logo.png')}
                alt="Jerome Refrigeration Engineer"
                className="h-12 w-12 object-contain shrink-0"
              />
              <span className="text-xl font-bold">Alog Refrigeration</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Professional industrial refrigeration solutions, consultancy, and training services for commercial and industrial clients.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide">Quick links</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide">Contact information</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  Woodlands Singapore, S730855
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  +65 82292965
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  jerome.alog@alogref.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-secondary-foreground/60">
            © 2026 Alog Refrigeration. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
