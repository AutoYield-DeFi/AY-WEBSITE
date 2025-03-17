
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

interface ApiEndpointCardProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
  description: string;
  children: React.ReactNode;
}

const ApiEndpointCard = ({ method, endpoint, description, children }: ApiEndpointCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="px-2 py-1 bg-primary-muted/20 text-primary rounded text-sm mr-2">{method}</span>
          {endpoint}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default ApiEndpointCard;
