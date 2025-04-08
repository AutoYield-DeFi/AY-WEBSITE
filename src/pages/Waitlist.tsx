import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '@/components/Logo';

const Waitlist: React.FC = () => {
  useEffect(() => {
    // Dynamically load the GetWaitlist script
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <title>Get Early Access - AutoYield</title>
        <meta
          name="description"
          content="Join the AutoYield waitlist for early access. Automate your DeFi strategies on Solana for optimal, effortless high yields."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 py-10">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-lg w-full">
          {/* Logo Container - centered */}
          <div className="flex justify-center mb-6">
            <Logo className="h-10 w-auto" />
          </div>

          <h1 className="text-3xl font-extrabold mb-4 text-primary">
            Unlock Early Access to AutoYield
          </h1>

          <p className="text-base text-muted-foreground">
            Stop guessing. Start earning optimal DeFi yields on Solana. AutoYield automates smart strategies, making high returns effortless. Secure your spot for exclusive early access to the future of yield farming!
          </p>

          {/* GetWaitlist Container */}
          <div
            id="getWaitlistContainer"
            data-waitlist_id="27123"
            data-widget_type="WIDGET_1"
            className="w-full mx-auto"
          >
            {/* The GetWaitlist widget will render here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Waitlist;