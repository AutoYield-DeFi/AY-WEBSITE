import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Define the Content Security Policy string
// Added: fonts.googleapis.com to style-src
// Added: fonts.gstatic.com to font-src
const csp = `
  default-src 'self';  script-src 'self' 'unsafe-inline' prod-waitlist-widget.s3.us-east-2.amazonaws.com www.google.com www.gstatic.com cdn.gpteng.co;  connect-src 'self' api.getwaitlist.com *.autoyield.io;
  style-src 'self' 'unsafe-inline' prod-waitlist-widget.s3.us-east-2.amazonaws.com fonts.googleapis.com;
  frame-src 'self' www.google.com;
  img-src 'self' data: * https:;
  font-src 'self' data: fonts.gstatic.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.trim().replace(/\s+/g, ' '); // Clean up whitespace for the header value

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Add the headers configuration block
    headers: {
      'Content-Security-Policy': csp
      // Recommended security headers (uncomment if not set elsewhere like Cloudflare):
      // 'X-Frame-Options': 'DENY', // Or 'SAMEORIGIN'
      // 'X-Content-Type-Options': 'nosniff',
      // 'Referrer-Policy': 'strict-origin-when-cross-origin', // Or 'same-origin'
      // 'Permissions-Policy': 'camera=(), microphone=(), geolocation=()', // Example: restrict features
    },
    host: "::", // Your existing host config
    port: 8080, // Your existing port config
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Your existing alias config
    },
  },
});