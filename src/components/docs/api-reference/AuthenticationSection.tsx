
import React from 'react';
import { Server } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from './CodeBlock';

const AuthenticationSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Server size={24} className="text-primary" />
        Authentication
      </h2>
      <p>
        There are two methods for authenticating with the AutoYield API:
      </p>
      
      <Tabs defaultValue="api-key" className="w-full">
        <TabsList>
          <TabsTrigger value="api-key">API Key</TabsTrigger>
          <TabsTrigger value="jwt">JWT Token</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api-key" className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">API Key Authentication</h3>
          <p>
            For server-to-server integrations, use API key authentication by including your key in the request header:
          </p>
          <CodeBlock code={`GET /pools\nAuthorization: Bearer YOUR_API_KEY`} />
          <p className="mt-2">
            To generate an API key, go to your account settings in the AutoYield dashboard and navigate to the API section.
          </p>
        </TabsContent>
        
        <TabsContent value="jwt" className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">JWT Authentication</h3>
          <p>
            For user-specific operations, use JWT authentication. First, obtain a token:
          </p>
          <CodeBlock code={`POST /auth/login\nContent-Type: application/json\n\n{\n  "wallet_address": "YOUR_WALLET_ADDRESS",\n  "signature": "SIGNATURE_FROM_WALLET"\n}`} />
          <p className="mt-2">
            Then include the token in subsequent requests:
          </p>
          <CodeBlock code={`GET /user/positions\nAuthorization: Bearer YOUR_JWT_TOKEN`} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AuthenticationSection;
