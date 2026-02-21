import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, TrendingUp, Code } from 'lucide-react';

const Experience = () => {
  const stats = [
    {
      icon: Calendar,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Serving York businesses since 1998'
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Projects Completed',
      description: 'Websites, apps, and marketing campaigns'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average ROI Increase',
      description: 'Client growth after our solutions'
    },
    {
      icon: Code,
      number: 'AI',
      label: 'Powered Solutions',
      description: 'Cutting-edge technology integration'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            25+ Years of <span className="gradient-text">Technology Excellence</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Since 1998, we've been at the forefront of web technology, evolving from basic HTML to today's AI-powered solutions. Our experience spans the entire digital revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-effect rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                From HTML to AI: Our Evolution Story
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-blue-200 font-semibold">1998-2005: The Foundation Years</div>
                    <div className="text-blue-100">Started with basic HTML and CSS, building our first business websites</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-blue-200 font-semibold">2006-2015: The Growth Era</div>
                    <div className="text-blue-100">Embraced CMS platforms, mobile-first design, and digital marketing</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-blue-200 font-semibold">2016-2023: The Innovation Phase</div>
                    <div className="text-blue-100">Advanced frameworks, cloud solutions, and data-driven strategies</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-blue-200 font-semibold">2024-Present: The AI Revolution</div>
                    <div className="text-blue-100">Leading with AI-powered design tools and intelligent automation</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                className="w-full h-auto rounded-xl shadow-2xl"
                alt="Technology evolution timeline showing progression from basic websites to AI-powered solutions"
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;