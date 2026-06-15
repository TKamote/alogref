
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, Pencil, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const services = [
    {
      icon: Package,
      title: 'Trading refrigeration parts',
      description: 'Comprehensive supply of high-quality refrigeration components and parts for industrial and commercial applications.',
      link: '/services#trading'
    },
    {
      icon: Users,
      title: 'Consultancy services',
      description: 'Expert project management and technical consulting for refrigeration system implementation and optimization.',
      link: '/services#consultancy'
    },
    {
      icon: Pencil,
      title: 'Refrigeration design',
      description: 'Custom design solutions for commercial and industrial refrigeration facilities tailored to your specific operational needs.',
      link: '/services#design'
    },
    {
      icon: GraduationCap,
      title: 'Training programs',
      description: 'Professional training for specialists in industrial refrigeration systems and component selection.',
      link: '/services#training'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Alog Refrigeration - Industrial refrigeration solutions and services</title>
        <meta name="description" content="Professional industrial refrigeration solutions including parts trading, consultancy, refrigeration system design, and specialist training for commercial and industrial clients." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection
            title="Industrial refrigeration solutions built for performance"
            subtitle="Expert consultancy, design, and supply services for commercial and industrial refrigeration systems across Asia Pacific region."
            primaryCta={{ text: 'Explore services', href: '/services' }}
            secondaryCta={{ text: 'Get in touch', href: '/contact' }}
          />

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  Our core services
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  Comprehensive refrigeration solutions from design to implementation
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link to={service.link}>
                        <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-none rounded-2xl">
                          <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl font-semibold">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
                  <p className="text-muted-foreground">Years of experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">200+</div>
                  <p className="text-muted-foreground">Projects completed</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">98%</div>
                  <p className="text-muted-foreground">Client satisfaction</p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
