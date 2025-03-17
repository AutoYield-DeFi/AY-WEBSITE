
import React from 'react';

const DefaultSettingsSection = () => {
  return (
    <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
      <h3 className="text-xl font-bold mb-2">Restoring Default Settings</h3>
      <p>
        If you've customized your settings and want to return to AutoYield's optimized defaults:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>Navigate to the Settings page for your position or account</li>
        <li>Click the "Restore Defaults" button at the bottom of the page</li>
        <li>Confirm that you want to reset all customized parameters</li>
        <li>The AI will resume managing your position with the default optimized settings</li>
      </ol>
    </section>
  );
};

export default DefaultSettingsSection;
