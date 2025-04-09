import React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '@/components/Logo'; // Keep the Logo component

const Waitlist: React.FC = () => {
  return (
    <>
      {/* ===== React Helmet Async for Head Elements ===== */}
      <Helmet>
        {/* Standard Head Tags */}
        <title>Get Early Access - AutoYield</title>
        <meta
          name="description"
          content="Join the AutoYield waitlist for early access. Automate your DeFi strategies on Solana for optimal, effortless high yields."
        />

        {/* GetWaitlist CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />

        {/* GetWaitlist JS */}
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" async></script>
      </Helmet>

      {/* ===== Page Content ===== */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 py-10">
        {/* Outer Card Structure */}
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-lg w-full">

          {/* Logo Container - Keep this for overall branding ABOVE the widget area */}
          <div className="flex justify-center">
            <Logo className="h-10 w-auto" />
          </div>

          {/* REMOVED: The H1 and P elements that were duplicating the widget's intent */}
          {/*
            <h1 className="text-3xl font-extrabold mb-4 text-primary">
              Unlock Early Access to AutoYield
            </h1>
            <p className="text-base text-muted-foreground mb-6"> {/* Added mb-6 for spacing */}
            {/*  Stop guessing. Start earning optimal DeFi yields on Solana...
            </p>
          */}

          {/* GetWaitlist Container - Let the script populate ALL content here */}
          <div
            id="getWaitlistContainer"
            data-waitlist_id="27123" // Ensure this is your correct Waitlist ID
            data-widget_type="WIDGET_1" // Make sure this widget type includes title/description
            className="w-full mx-auto"
          >
            {/* Optional: Loading indicator that gets replaced by the widget */}
            <p className="text-sm text-muted-foreground text-center py-4">
              Loading Waitlist Form...
            </p>
            {/* The GetWaitlist script will inject its form OR its confirmation message here,
                including its own title and description based on its configuration. */}
          </div>

           {/* Optional: Add the "Check your Status" link manually if the widget doesn't */}
           {/* You might need to style this appropriately */}
           {/* Check if the GetWaitlist widget adds this link itself first */}
           {/*
           <div className="text-center mt-4">
                <a
                    href={`https://app.getwaitlist.com/waitlist/status?waitlist_id=27123`} // Construct the status check URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                >
                   Signed up before? Check your Status
                </a>
           </div>
           */}

        </div>
      </div>
    </>
  );
};

export default Waitlist;

// ===== IMPORTANT REMINDER =====
// Ensure you have <HelmetProvider> wrapping your application's root component
// (usually in main.jsx or App.jsx) for react-helmet-async to work correctly.