
import React from 'react';
import CodeBlock from './CodeBlock';

const SdkIntegrationSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">SDK Integration</h2>
      <p>
        For easier integration, AutoYield offers a JavaScript/TypeScript SDK:
      </p>
      
      <CodeBlock code={`// Install the SDK\nnpm install @autoyield/sdk\n\n// Import and initialize\nimport { AutoYield } from '@autoyield/sdk';\n\nconst autoyield = new AutoYield({\n  apiKey: 'YOUR_API_KEY',\n  environment: 'production' // or 'testnet'\n});\n\n// Example: Get all pools\nconst pools = await autoyield.pools.getAll();\n\n// Example: Create a position\nconst position = await autoyield.positions.create({\n  pool_id: 'sol_usdc',\n  amount_token0: 10, // 10 SOL\n  amount_token1: 0,   // 0 USDC (single-sided deposit)\n  risk_profile: 'moderate'\n});`} />
      
      <p>
        The SDK documentation is available at <a href="https://github.com/autoyield/sdk" className="text-primary hover:underline">github.com/autoyield/sdk</a>.
      </p>
    </section>
  );
};

export default SdkIntegrationSection;
