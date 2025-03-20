
import React from 'react';
import { Server, Shield, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from './CodeBlock';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AuthenticationSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Server size={24} className="text-primary" />
        Authentication
      </h2>
      <div className="flex items-center mb-4 p-3 bg-amber-50 text-amber-800 rounded-md border border-amber-200">
        <Shield className="h-5 w-5 mr-2 flex-shrink-0" />
        <p className="text-sm">
          Always use HTTPS when calling the API and never expose API keys in client-side code.
        </p>
      </div>
      
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Security Warning</AlertTitle>
        <AlertDescription>
          In a DeFi application, security is critical. Always implement rate limiting, IP restrictions, 
          and monitor for unusual API access patterns that could indicate an attack.
        </AlertDescription>
      </Alert>
      
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
          <div className="mt-4 space-y-2">
            <p className="font-medium">Security best practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Store API keys securely and never expose them in client-side code</li>
              <li>Rotate keys regularly and implement key expiration</li>
              <li>Use the principle of least privilege - create keys with minimal permissions needed</li>
              <li>IP-restrict your API keys to known server addresses when possible</li>
            </ul>
          </div>
          <p className="mt-2">
            To generate an API key, go to your account settings in the AutoYield dashboard and navigate to the API section. 
            API keys should be treated as secrets and stored securely.
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
          <div className="mt-4 space-y-2">
            <p className="font-medium">JWT security best practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use short-lived tokens (1 hour max) with a secure refresh token mechanism</li>
              <li>Implement token revocation for compromised tokens</li>
              <li>Include only necessary claims in the payload</li>
              <li>Use a strong signing algorithm (RS256 recommended over HS256)</li>
            </ul>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tokens expire after 1 hour and should be refreshed using the <code>/auth/refresh</code> endpoint.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AuthenticationSection;
