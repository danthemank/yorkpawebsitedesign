import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Search, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const handleServiceClick = (url) => {
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Globe,
      title: 'AI-Powered Web Design',
      description: 'Modern, responsive websites built with cutting-edge AI tools for maximum impact and efficiency.',
      url: 'https://mediatech.group/services/website-design-development/'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO strategies and digital marketing campaigns that drive real results.',
      url: 'https://mediatech.group/services/digital-marketing/'
    },
    {
      icon: Code,
      title: 'AI & Automation',
      description: 'Tailored software, AI, and automation for unique business needs and workflow optimization.',
      url: 'https://mediatech.group/services/intelligent-automation/'
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-4 section-bg-teal">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl text-brand-light-teal max-w-3xl mx-auto">
            From stunning websites to growth-focused marketing, we offer a complete suite of services to elevate your York business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -20, boxShadow: '0 30px 60px -15px rgba(235, 202, 151, 0.2)' }}
              className="dark-glass-effect rounded-3xl p-8 transition-all duration-300 flex flex-col h-full border-brand-light-teal/25"
            >
              <div className="flex-grow">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                >
                  <service.icon className="w-10 h-10 text-brand-dark-teal" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-brand-light-teal text-lg mb-8">{service.description}</p>
              </div>

              <Button
                onClick={() => handleServiceClick(service.url)}
                variant="outline"
                className="w-full mt-auto border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-teal font-bold py-6 text-lg"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;