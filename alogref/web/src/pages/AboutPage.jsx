
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, from design to implementation.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Our engineering approach ensures accurate, efficient refrigeration solutions.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to deliver cutting-edge refrigeration technology.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable results on every project.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About us - Alog Refrigeration</title>
        <meta name="description" content="Learn about Alog Refrigeration's expertise in industrial refrigeration solutions, our team, and our commitment to excellence in cold storage design and implementation." />
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
                  About Alog Refrigeration
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Building the future of industrial refrigeration through expertise, innovation, and dedication
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-foreground">
                    Our story
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded over 15 years ago, Alog Refrigeration has grown from a small parts supplier to a comprehensive refrigeration solutions provider. Our journey has been driven by a commitment to excellence and a deep understanding of industrial refrigeration needs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we serve clients across North America, delivering everything from individual components to complete cold storage facility designs. Our team of experienced engineers and technicians brings decades of combined expertise to every project.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in building long-term partnerships with our clients, providing ongoing support and training to ensure their refrigeration systems operate at peak efficiency for years to come.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img 
                    src="/about-early-days.png" 
                    alt="Alog Refrigeration technician at an industrial refrigeration site"
                    className="w-full h-96 object-cover object-center"
                  />
                </motion.div>
              </div>

              <div className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl font-bold text-foreground text-center mb-12"
                >
                  Our values
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <Card className="h-full border-none shadow-lg rounded-2xl">
                          <CardContent className="pt-6 text-center space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {value.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Our expertise
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                  With over 200 successful projects completed and a team of certified refrigeration specialists, we bring unmatched expertise to every engagement. Our engineers hold advanced certifications in industrial refrigeration design, and our technicians receive ongoing training on the latest technologies and best practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <p className="text-primary-foreground/80">Years in business</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <p className="text-primary-foreground/80">Projects delivered</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <p className="text-primary-foreground/80">Client satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
