import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Instagram, Youtube, Instagram as Pinterest } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleLinkClick = (section) => {
    toast({
      title: `🚧 ${section} Feature`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    { name: 'Websites', url: 'https://mediatech.group/services/website-design-development/' },
    { name: 'AI', url: 'https://mediatech.group/services/intelligent-automation/' },
    { name: 'IT', url: 'https://mediatech.group/services/managed-it-services/' },
    { name: 'SEO & Marketing', url: 'https://mediatech.group/services/digital-marketing/' },
  ];

  const quickLinks = [
    { name: 'About', url: 'https://mediatech.group/about/' },
    { name: 'Portfolio', url: 'https://mediatech.group/portfolio/' },
    { name: 'Blog', url: 'https://mediatech.group/blog/' },
    { name: 'Contact', url: 'https://mediatech.group/contact/' },
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/media-technology-group-llc/' },
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/mediatechnologygroup' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/mediatech_group' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/mediatechgroup/' },
    { icon: Youtube, name: 'YouTube', url: 'https://www.youtube.com/@MediaTechnologyGroupLLC' },
    { icon: Pinterest, name: 'Pinterest', url: 'https://www.pinterest.com/mediatechgroup/' },
  ];

  return (
    <footer className="bg-black/50 text-brand-off-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/fd14ca4f-fea0-4be5-a5a9-75c4a34f7591/6e3ff140c6a3ca9a7dcd49008d949b59.png"
                alt="Media & Technology Group Logo"
                className="w-full h-auto max-w-[200px]"
              />
            </div>
            <p className="text-brand-light-teal mb-6">
              Pairing 25+ years of experience with tomorrow's AI technology to deliver results for York businesses.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-light-teal"><MapPin className="w-5 h-5 text-brand-gold" /><span>York, PA</span></div>
              <a href="tel:+17172563886" className="flex items-center space-x-3 text-brand-light-teal hover:text-white transition-colors"><Phone className="w-5 h-5 text-brand-gold" /><span>+1 717-256-3886</span></a>
              <a href="mailto:hello@mediatech.group" className="flex items-center space-x-3 text-brand-light-teal hover:text-white transition-colors"><Mail className="w-5 h-5 text-brand-gold" /><span>hello@mediatech.group</span></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} viewport={{ once: true }}>
            <span className="font-bold text-xl text-white mb-6 block">Services</span>
            <ul className="space-y-4">{services.map((s, i) => <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-light-teal hover:text-white transition-colors">{s.name}</a></li>)}</ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: true }}>
            <span className="font-bold text-xl text-white mb-6 block">Quick Links</span>
            <ul className="space-y-4">{quickLinks.map((l, i) => <li key={i}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-brand-light-teal hover:text-white transition-colors">{l.name}</a></li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} viewport={{ once: true }}>
            <span className="font-bold text-xl text-white mb-6 block">Stay Connected</span>
            <p className="text-brand-light-teal mb-6">Get AI trends and marketing strategies delivered to your inbox.</p>
            <div className="flex gap-2 mb-6">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-black/30 border border-brand-light-teal/50 text-white placeholder-brand-light-teal focus:outline-none focus:border-brand-gold transition-all" />
              <Button onClick={() => handleLinkClick('Newsletter')} className="bg-brand-gold hover:opacity-90 text-brand-dark-teal px-5 rounded-lg font-bold transition-all">Go</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-12 h-12 bg-black/30 hover:bg-brand-gold hover:text-brand-dark-teal rounded-lg flex items-center justify-center transition-all duration-300 text-brand-light-teal">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }} className="border-t border-brand-light-teal/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-light-teal text-sm text-center md:text-left">© {new Date().getFullYear()} Media & Technology Group, LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              <button onClick={() => handleLinkClick('Privacy Policy')} className="text-brand-light-teal hover:text-white text-sm transition-colors">Privacy</button>
              <button onClick={() => handleLinkClick('Terms of Service')} className="text-brand-light-teal hover:text-white text-sm transition-colors">Terms</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;