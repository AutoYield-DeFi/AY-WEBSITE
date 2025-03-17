
import React from 'react';
import { Terminal } from 'lucide-react';

const ApiOverviewSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Terminal size={24} className="text-primary" />
        API Overview
      </h2>
      <p>
        The AutoYield API is a REST API that uses standard HTTP methods and follows standard conventions:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Base URL:</strong> <code className="bg-muted px-1 py-0.5 rounded">https://api.autoyield.io/v1</code></li>
        <li><strong>Content-Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">application/json</code></li>
        <li><strong>Authentication:</strong> API Key in header or JWT tokens</li>
        <li><strong>Rate Limiting:</strong> 100 requests per minute per API key</li>
      </ul>
    </section>
  );
};

export default ApiOverviewSection;
