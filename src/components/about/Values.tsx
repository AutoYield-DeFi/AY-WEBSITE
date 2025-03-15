
import React from 'react';
import { Shield, Lightbulb, Users, Coins, Lock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "We prioritize user funds and data security above all, implementing rigorous testing and auditing protocols."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Continuous Innovation",
      description: "We constantly improve our AI algorithms and user experience based on market developments and feedback."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "We believe in building together with our users, incorporating feedback and sharing knowledge openly."
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Capital Efficiency",
      description: "We optimize for maximum returns while carefully managing risk exposure for all users."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Transparency",
      description: "We maintain clear communication about how our systems work and perform, with no hidden fees or surprises."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Accessibility",
      description: "We design our products to be intuitive for newcomers while powerful enough for DeFi experts."
    }
  ];

  return (
    <section id="values" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The core principles that guide our decisions and development at AutoYield.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <Card key={index} className="border border-transparent hover:border-blue-200 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-blue-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Values;
