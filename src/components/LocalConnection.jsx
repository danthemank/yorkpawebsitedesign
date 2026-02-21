import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building, Users, Heart } from 'lucide-react';

const LocalConnection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const cards = [
    {
      icon: Building,
      title: 'Downtown York Expertise',
      description: 'Deep understanding of York’s historic business district and its unique digital needs.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Personalized service and local market knowledge for York County businesses.',
    },
    {
      icon: Heart,
      title: 'Proudly Local',
      description: 'Born and raised in York, PA. We are deeply invested in our community\'s success.',
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[110vh] min-h-[800px] overflow-hidden bg-brand-dark-teal">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <img
          className="object-cover w-full h-full"
          alt="Aerial view of York, Pennsylvania, known as the White Rose City, at dusk"
         src="https://images.unsplash.com/photo-1581283675866-d09aa9c5a338" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-teal via-brand-dark-teal/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-display font-extrabold mb-4 text-shadow-strong">
            Proudly Serving <span className="gradient-text">York, PA</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-brand-off-white text-shadow">
            We're not just a service provider; we're your neighbors, combining global tech with a deep love for our local community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
              className="dark-glass-effect p-8 rounded-3xl border border-brand-light-teal/25 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 hover:scale-110">
                <card.icon className="w-10 h-10 text-brand-dark-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-brand-light-teal">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalConnection;