
import React from 'react';
import { Settings, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import DocsHeader from '../DocsHeader';

const AdvancedSettingsHeader = () => {
  return (
    <div className="space-y-6">
      <DocsHeader
        title="Advanced Settings"
        description="Customize your AutoYield experience with advanced configuration options"
        icon={<Settings size={24} className="text-primary" />}
      />

      <Alert variant="warning" className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <AlertTitle>For Advanced Users</AlertTitle>
        <AlertDescription>
          These settings are intended for experienced users who understand DeFi liquidity provisioning and the associated risks. 
          The default AutoYield settings are optimized for most users. Modify these parameters only if you understand their impact.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AdvancedSettingsHeader;
