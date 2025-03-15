
import React from 'react';
import { 
  Lock, 
  Key, 
  ShieldCheck, 
  Users, 
  AlertOctagon,
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Non-Custodial Architecture',
      description: 'You retain full ownership of your assets at all times, with withdrawals available instantly.'
    },
    {
      icon: ShieldCheck,
      title: 'Audited Smart Contracts',
      description: 'All code is externally audited by leading security firms to prevent vulnerabilities.'
    },
    {
      icon: Users,
      title: 'Multi-Signature Controls',
      description: 'Critical platform changes require multiple signature approvals for enhanced security.'
    },
    {
      icon: AlertOctagon,
      title: 'Emergency Protection',
      description: 'If any exploit is detected, liquidity withdrawal can be temporarily halted to protect funds.'
    },
    {
      icon: UserCheck,
      title: 'Trusted Operations',
      description: 'Only pre-approved operations can execute rebalancing transactions on the platform.'
    },
    {
      icon: Key,
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring for unusual pool behaviors to prevent front-running and other DeFi exploits.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Security First</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Protection</h2>
          <p className="text-lg text-muted-foreground">
            AutoYield implements robust smart contract protections and a non-custodial architecture to keep your assets safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="border border-gray-100 bg-white/70 backdrop-blur-sm opacity-0 animate-fade-up hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
