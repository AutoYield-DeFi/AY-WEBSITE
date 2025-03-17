
import React from 'react';
import { Shield, Clock, HeartHandshake, LineChart } from 'lucide-react';
import { motion } from './MotionWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "We test with our own money before we ask for yours. Our platform needs to earn our trust before it can earn yours."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Algorithms Don't Sleep",
      description: "Markets move 24/7, and so do our algorithms. We built AutoYield so you don't have to explain impermanent loss to your friends."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Results, Not Promises",
      description: "In DeFi, fancy marketing can't hide poor performance. We let our algorithms do the talking."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Built By Users, For Users",
      description: "We're building the tool we wished existed when we were losing money to impermanent loss."
    }
  ];

  return (
    <section id="values" className="py-16 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Principles</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {values.map((value, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-sm border border-primary/5 text-center h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-primary-muted/20 rounded-full"></div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-muted text-primary mb-4 relative z-10">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 relative z-10">{value.title}</h3>
                    <p className="text-muted-foreground text-sm relative z-10">{value.description}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Values;
