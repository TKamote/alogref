
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, benefits, image, index = 0, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={`${reverse ? 'md:order-2' : 'md:order-1'}`}>
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
              {benefits && benefits.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p className="font-medium text-sm uppercase tracking-wide text-secondary">
                    Key benefits
                  </p>
                  <ul className="space-y-2">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
