import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BrainCircuit, Bot, Zap, Code } from 'lucide-react';

const AiCard = ({ icon, title, description }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 40, mass: 0.5 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 40, mass: 0.5 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['25deg', '-25deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-25deg', '25deg']);
  const glareX = useTransform(x, [-0.5, 0.5], [120, -120]);
  const glareY = useTransform(y, [-0.5, 0.5], [120, -120]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="interactive-card group relative w-full h-full bg-brand-dark-teal/80 rounded-3xl p-8 text-white shadow-2xl shadow-brand-dark-teal/40 border border-brand-light-teal/20"
    >
      <motion.div
        style={{
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(235, 202, 151, 0.3), transparent 50%)`,
            transition: 'background 0.1s ease',
        }}
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-gold transition-all duration-300 pointer-events-none"></div>
      <div
        className="interactive-card-content flex flex-col items-center text-center"
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center mb-8 border-2 border-brand-gold/30 group-hover:bg-brand-gold/20 transition-colors duration-300"
          style={{ transform: 'translateZ(40px)' }}
        >
          <IconComponent className="w-12 h-12 text-brand-gold" />
        </motion.div>
        <motion.h3
          className="text-3xl font-bold mb-4 text-white"
          style={{ transform: 'translateZ(60px)' }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-brand-light-teal text-lg"
          style={{ transform: 'translateZ(30px)' }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const AiInteraction = () => {
  return (
    <section className="py-24 lg:py-32 px-4 section-bg-darker-teal relative overflow-hidden ai-grid-bg">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Experience the <span className="gradient-text">Future, Today</span>
          </h2>
          <p className="text-xl text-brand-light-teal max-w-3xl mx-auto">
            We don't just use AI, we live it. Interact with our core AI principles that drive innovation and results for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: BrainCircuit,
              title: 'Intelligent Automation',
              description: 'We build AI systems that learn and adapt, automating complex tasks to free up your time.'
            },
            {
              icon: Bot,
              title: 'Generative Content',
              description: 'Leverage AI to create compelling copy, stunning visuals, and engaging marketing materials at scale.'
            },
            {
              icon: Zap,
              title: 'Performance Optimization',
              description: 'Our AI tools analyze data in real-time to continuously improve website performance and user experience.'
            },
            {
              icon: Code,
              title: 'Predictive Analytics',
              description: 'Harness the power of AI to forecast trends, understand customer behavior, and make smarter decisions.'
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ perspective: '1200px' }}
            >
              <AiCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiInteraction;