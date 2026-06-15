
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit us',
      details: ['Woodlands Singapore', 'S730855']
    },
    {
      icon: Phone,
      title: 'Call us',
      details: ['+65 82292965', 'Mon-Fri: 8:00 AM - 6:00 PM']
    },
    {
      icon: Mail,
      title: 'Email us',
      details: ['jerome.alog@alogref.com']
    },
    {
      icon: Clock,
      title: 'Business hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact us - Alog Refrigeration</title>
        <meta name="description" content="Get in touch with Alog Refrigeration for industrial refrigeration solutions, consultancy, and training services. Contact our team today." />
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
                  Get in touch
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Have a project in mind or need expert advice? Our team is ready to help you find the right refrigeration solution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border-none shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">
                        Send us a message
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact information
                  </h2>
                  
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <Card className="border-none shadow-md rounded-xl hover:shadow-lg transition-shadow duration-200">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-semibold text-foreground">
                                  {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-sm text-muted-foreground">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-accent text-accent-foreground rounded-2xl p-6 mt-8"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      Need immediate assistance?
                    </h3>
                    <p className="text-sm text-accent-foreground/90 leading-relaxed">
                      For urgent technical support or emergency service requests, please call our 24/7 hotline at +65 82292965.
                    </p>
                  </motion.div>
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

export default ContactPage;
