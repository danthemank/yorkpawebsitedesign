import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTA = () => {
  const handleCTAClick = () => {
    toast({
      title: "🚧 Let's Get Started!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-brand-dark-teal">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-gold/30 via-brand-light-teal/30 to-brand-dark-teal"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ backgroundSize: '400% 400%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-effect p-8 md:p-14 rounded-3xl border border-brand-gold/50 shadow-brand-gold/30 shadow-2xl">
              <motion.h2
                variants={itemVariants}
                className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight gradient-text"
                style={{ textShadow: '0 4px 15px rgba(255, 215, 0, 0.5)' }}
              >
                Ready to Ignite Your Business's Future?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-brand-off-white mb-10 max-w-2xl mx-auto font-medium"
              >
                Unleash the transformative power of cutting-edge AI-driven design and marketing, custom-crafted for unparalleled success.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button
                  onClick={handleCTAClick}
                  size="lg"
                  className="group w-full sm:w-auto px-10 py-6 bg-brand-gold text-brand-dark-teal font-bold text-xl rounded-full hover:bg-brand-gold/90 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand-gold/30 relative overflow-hidden flex items-center justify-center"
                >
                  <CalendarDays className="mr-3 h-7 w-7" />
                  Book Your Free Strategy Call
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[shimmer_2s_infinite]" />
                </Button>
              </motion.div>
          </div>
          <motion.div variants={itemVariants} className="mt-10">
            <a href="tel:+17172563886" className="inline-flex items-center text-brand-off-white hover:text-white transition-colors group text-lg font-semibold">
              <Phone className="w-5 h-5 mr-3 text-brand-gold" />
              Or reach us directly at +1 717-256-3886
              <ArrowRight className="w-5 h-5 ml-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;