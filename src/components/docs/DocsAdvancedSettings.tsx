
import React from 'react';
import AdvancedSettingsHeader from './advanced-settings/AdvancedSettingsHeader';
import AIStrategySection from './advanced-settings/AIStrategySection';
import PerformanceAnalyticsSection from './advanced-settings/PerformanceAnalyticsSection';
import ExpertModeSection from './advanced-settings/ExpertModeSection';
import DefaultSettingsSection from './advanced-settings/DefaultSettingsSection';

const DocsAdvancedSettings = () => {
  return (
    <div className="space-y-10">
      <AdvancedSettingsHeader />
      <AIStrategySection />
      <PerformanceAnalyticsSection />
      <ExpertModeSection />
      <DefaultSettingsSection />
    </div>
  );
};

export default DocsAdvancedSettings;
