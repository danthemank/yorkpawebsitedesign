import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: undefined, y: undefined, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        let dx = mouse.current.x - this.x;
        let dy = mouse.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.current.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.current.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx/10;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy/10;
            }
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 7000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2.5 + 1;
        let x = Math.random() * (window.innerWidth - size * 2) + size;
        let y = Math.random() * (window.innerHeight - size * 2) + size;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = `rgba(178, 208, 198, ${Math.random() * 0.6 + 0.3})`;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                               ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                    opacityValue = 1 - (distance / 20000);
                    let dx = mouse.current.x - particlesArray[a].x;
                    let dy = mouse.current.y - particlesArray[a].y;
                    let mouseDistance = Math.sqrt(dx*dx+dy*dy);
                    if (mouseDistance < mouse.current.radius) {
                       ctx.strokeStyle = `rgba(235, 202, 151, ${opacityValue * 0.8})`;
                    } else {
                       ctx.strokeStyle = `rgba(178, 208, 198, ${opacityValue * 0.4})`;
                    }
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.current.x = undefined;
      mouse.current.y = undefined;
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      if(animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleCTAClick = () => {
    toast({
      title: "🚀 Free Consultation",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden section-bg-darker-teal ai-grid-bg">
      <canvas ref={canvasRef} id="particle-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center space-x-3 glass-effect rounded-full px-6 py-3 border border-brand-light-teal/25"
          >
            <Award className="w-6 h-6 text-brand-gold" />
            <span className="text-white text-base font-semibold">25+ Years of Proven Results</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-tight tracking-tighter"
            >
              York's Leader in{' '}
              <span className="gradient-text">AI-Driven</span>{' '}
              Web Design
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-brand-light-teal font-medium max-w-3xl mx-auto"
            >
              Pairing Decades of Experience with Tomorrow's Technology.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-teal px-10 py-7 text-xl font-bold pulse-glow shadow-2xl"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <Button
              onClick={handleCTAClick}
              variant="outline"
              size="lg"
              className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-teal px-10 py-7 text-xl font-bold transition-all duration-300"
            >
              Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;