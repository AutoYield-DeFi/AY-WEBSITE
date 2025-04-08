import React from 'react'; // No useEffect or useRef needed here anymore
import { Helmet } from 'react-helmet-async'; // Keep using react-helmet-async
import Logo from '@/components/Logo';

// No global declarations needed here unless specifically required for other reasons

const Waitlist: React.FC = () => {
  // The useEffect logic for script/style loading is removed entirely.

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

        {/* GetWaitlist CSS - Injected via Helmet */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />

        {/* GetWaitlist JS - Injected via Helmet */}
        {/* Helmet will add this to the head, the script itself likely waits for DOM ready */}
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" async></script>
        {/* Added 'async' which is generally good practice for external scripts */}

        {/* IMPORTANT: Remove CSP meta tags if you had any here. CSP should be set via HTTP Headers (Cloudflare / Vite config) */}
      </Helmet>

      {/* ===== Page Content ===== */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 py-10">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-lg w-full">
          {/* Logo Container */}
          <div className="flex justify-center mb-6">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold mb-4 text-primary">
            Unlock Early Access to AutoYield
          </h1>

          {/* Description */}
          <p className="text-base text-muted-foreground">
            Stop guessing. Start earning optimal DeFi yields on Solana. AutoYield automates smart strategies, making high returns effortless. Secure your spot for exclusive early access to the future of yield farming!
          </p>

          {/* GetWaitlist Container - The script added via Helmet should find this */}
          <div
            id="getWaitlistContainer"
            data-waitlist_id="27123" // Ensure this is your correct Waitlist ID
            data-widget_type="WIDGET_1"
            className="w-full mx-auto"
          >
            {/* The widget script will populate this container. */}
            {/* You can keep a simple placeholder if desired, but it might flash briefly */}
             <p className="text-sm text-muted-foreground text-center py-4">Loading Waitlist Form...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Waitlist;

// ===== IMPORTANT REMINDER =====
// Ensure you have <HelmetProvider> wrapping your application's root component
// (usually in main.jsx or App.jsx) for react-helmet-async to work correctly.
// Example (main.jsx):
// import { HelmetProvider } from 'react-helmet-async';
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </React.StrictMode>,
// )