
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { assetUrl } from '@/lib/utils';
import { profile } from '@/content/profile';

const Footer = () => {
  const { identity } = profile;

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={assetUrl('logo.png')}
              alt={identity.name}
              className="h-10 w-10 object-contain shrink-0"
            />
            <div>
              <span className="text-sm font-bold block">{identity.name}</span>
              <span className="text-xs text-secondary-foreground/70">{identity.title}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-secondary-foreground/80">
            <a href={`mailto:${identity.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              {identity.email}
            </a>
            <a href={`tel:${identity.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {identity.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {identity.location}
            </span>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-6 pt-6 text-center">
          <span className="text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
