
import React from 'react';
import { Code } from 'lucide-react';
import DocsHeader from './DocsHeader';
import ApiIntroSection from './api-reference/ApiIntroSection';
import ApiOverviewSection from './api-reference/ApiOverviewSection';
import AuthenticationSection from './api-reference/AuthenticationSection';
import ApiEndpointsSection from './api-reference/ApiEndpointsSection';
import SdkIntegrationSection from './api-reference/SdkIntegrationSection';
import ApiSupportSection from './api-reference/ApiSupportSection';

const DocsAPIReference = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="API Reference"
        description="Technical documentation for integrating with AutoYield's API"
        icon={<Code size={24} className="text-primary" />}
      />

      <ApiIntroSection />
      <ApiOverviewSection />
      <AuthenticationSection />
      <ApiEndpointsSection />
      <SdkIntegrationSection />
      <ApiSupportSection />
    </div>
  );
};

export default DocsAPIReference;
