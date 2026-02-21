import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Johnson\'s Bakery',
      location: 'Downtown York',
      rating: 5,
      text: 'Media & Technology Group transformed our online presence completely. Our AI-powered website has increased our online orders by 250% in just 6 months!',
      image: 'Happy bakery owner Sarah Johnson standing in front of her downtown York bakery'
    },
    {
      name: 'Mike Rodriguez',
      business: 'Rodriguez Auto Repair',
      location: 'West York',
      rating: 5,
      text: 'The custom booking system they built saves us 10 hours a week. Their 25 years of experience really shows in the quality of their work.',
      image: 'Professional auto mechanic Mike Rodriguez in his garage with modern tools and equipment'
    },
    {
      name: 'Lisa Chen',
      business: 'Chen Family Restaurant',
      location: 'York Township',
      rating: 5,
      text: 'Their SEO and PPC campaigns brought us so many new customers. We went from struggling to having a 2-week waiting list for reservations!',
      image: 'Restaurant owner Lisa Chen smiling in her family restaurant with traditional Asian decor'
    },
    {
      name: 'David Thompson',
      business: 'Thompson Law Firm',
      location: 'Central York',
      rating: 5,
      text: 'Professional, reliable, and incredibly knowledgeable. They understand both technology and business needs perfectly.',
      image: 'Professional lawyer David Thompson in his law office with law books and modern technology'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            What York Businesses Say About Us
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what local business owners have to say about our AI-powered solutions and 25+ years of expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img 
                  className="w-16 h-16 rounded-full object-cover"
                  alt={`${testimonial.name} from ${testimonial.business}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div className="flex-1">
                  <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-blue-200">{testimonial.business}</div>
                  <div className="text-blue-300 text-sm">{testimonial.location}</div>
                </div>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-200">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;