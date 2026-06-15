
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { motion } from 'framer-motion';
import { assetUrl } from '@/lib/utils';

const ServicesPage = () => {
  const services = [
    {
      id: 'trading',
      title: 'Trading refrigeration parts and components',
      description: 'We supply a comprehensive range of high-quality refrigeration parts and components for industrial and commercial applications. Our extensive inventory includes compressors, condensers, evaporators, expansion valves, and control systems from leading manufacturers.',
      benefits: [
        'Direct partnerships with top manufacturers',
        'Competitive pricing on bulk orders',
        'Fast delivery across North America',
        'Technical support for component selection',
        'Quality assurance on all products'
      ],
      image: assetUrl('services-parts.png')
    },
    {
      id: 'consultancy',
      title: 'Consultancy services for project management',
      description: 'Our experienced consultants provide end-to-end project management services for refrigeration system installations. From initial planning to final commissioning, we ensure your project stays on schedule and within budget while meeting all technical specifications.',
      benefits: [
        'Comprehensive project planning and scheduling',
        'Budget optimization and cost control',
        'Technical specification development',
        'Vendor coordination and management',
        'Quality assurance and compliance verification'
      ],
      image: assetUrl('services-consultancy.png')
    },
    {
      id: 'training',
      title: 'Training specialists in industrial refrigeration',
      description: 'Our comprehensive training programs equip technicians and engineers with the knowledge and skills needed to work with modern industrial refrigeration systems. We cover system design, component selection, installation best practices, and troubleshooting techniques.',
      benefits: [
        'Hands-on practical training sessions',
        'Industry-recognized certification programs',
        'Customized training for your team',
        'Latest technology and best practices',
        'Ongoing support and resources'
      ],
      image: assetUrl('services-training.png')
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Alog Refrigeration</title>
        <meta name="description" content="Explore our comprehensive refrigeration services including parts trading, consultancy, and professional training programs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our services
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive refrigeration solutions designed to meet the unique needs of commercial and industrial clients
                </p>
              </motion.div>

              <div className="space-y-24">
                {services.map((service, index) => (
                  <div key={service.id} id={service.id}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      benefits={service.benefits}
                      image={service.image}
                      index={index}
                      reverse={index % 2 !== 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
