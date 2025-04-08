import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Assuming react-helmet-async is used or can be added

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
      // Optionally remove the container if needed, though it might cause issues if script relies on it persisting
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Add the GetWaitlist CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <title>Get Early Access - AutoYield</title>
        <meta name="description" content="Join the waitlist for early access to AutoYield." />
      </Helmet>
      {/* Enhanced container with background and padding */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-slate-800 px-4 py-16">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          {/* More engaging heading */}
          <h1 className="text-4xl font-extrabold mb-4 text-primary">Unlock Early Access to AutoYield</h1>
          {/* Contextual description */}
          <p className="text-lg text-muted-foreground">
          Stop guessing. Start earning optimal DeFi yields on Solana. AutoYield automates smart strategies, making high returns effortless. Secure your spot for exclusive early access to the future of yield farming!


          </p>
          {/* GetWaitlist Container - Centered within the card */}
          <div
            id="getWaitlistContainer"
            data-waitlist_id="27123" // Your specific waitlist ID
            data-widget_type="WIDGET_1" // Or the specific widget type you configured
            className="w-full max-w-md mx-auto" // Ensure centering and max-width
          >
            {/* The GetWaitlist widget will render here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Waitlist;
