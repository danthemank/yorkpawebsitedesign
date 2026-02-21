import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0);

  const handleViewMore = () => {
    toast({
      title: "🚧 Portfolio Feature",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const caseStudies = [
    {
      business: 'York County Fitness',
      industry: 'Health & Wellness',
      challenge: 'Outdated website with poor mobile experience',
      solution: 'AI-powered responsive design with booking system',
      results: {
        traffic: '+340%',
        conversions: '+280%',
        revenue: '+450%'
      },
      beforeImage: 'Old outdated fitness website with poor design and navigation on desktop computer',
      afterImage: 'Modern sleek fitness website with AI-powered design, mobile responsive layout, and booking system'
    },
    {
      business: 'Heritage Antiques',
      industry: 'Retail',
      challenge: 'No online presence, losing customers to competitors',
      solution: 'E-commerce website with AI-driven product recommendations',
      results: {
        traffic: '+500%',
        conversions: '+320%',
        revenue: '+380%'
      },
      beforeImage: 'Empty storefront with no digital presence, traditional antique shop interior',
      afterImage: 'Beautiful e-commerce website showcasing antiques with AI recommendations and online shopping features'
    },
    {
      business: 'York Legal Associates',
      industry: 'Legal Services',
      challenge: 'Difficulty generating qualified leads online',
      solution: 'Professional website with integrated SEO and PPC campaigns',
      results: {
        traffic: '+220%',
        conversions: '+190%',
        revenue: '+260%'
      },
      beforeImage: 'Basic law firm website with outdated design and poor user experience',
      afterImage: 'Professional modern law firm website with clear navigation, client testimonials, and contact forms'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Before & After: <span className="gradient-text">Real Transformations</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the dramatic impact our AI-powered solutions have had on York businesses. These aren't just pretty websites – they're revenue-generating machines.
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCase === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'glass-effect text-blue-200 hover:text-white'
              }`}
            >
              {study.business}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Before */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Before</h3>
              <img 
                className="w-full h-64 object-cover rounded-xl mb-4"
                alt={`Before transformation - ${caseStudies[activeCase].business}`}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="glass-effect rounded-lg p-4">
                <h4 className="text-lg font-semibold text-red-300 mb-2">The Challenge</h4>
                <p className="text-blue-100">{caseStudies[activeCase].challenge}</p>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">After</h3>
              <img 
                className="w-full h-64 object-cover rounded-xl mb-4"
                alt={`After transformation - ${caseStudies[activeCase].business}`}
               src="https://images.unsplash.com/photo-1545029013-53df3fe020e8" />
              <div className="glass-effect rounded-lg p-4">
                <h4 className="text-lg font-semibold text-green-300 mb-2">Our Solution</h4>
                <p className="text-blue-100">{caseStudies[activeCase].solution}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">The Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6"
              >
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {caseStudies[activeCase].results.traffic}
                </div>
                <div className="text-blue-200">Website Traffic</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6"
              >
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {caseStudies[activeCase].results.conversions}
                </div>
                <div className="text-blue-200">Lead Conversions</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6"
              >
                <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {caseStudies[activeCase].results.revenue}
                </div>
                <div className="text-blue-200">Revenue Growth</div>
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={handleViewMore}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4"
            >
              View Full Case Study
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;