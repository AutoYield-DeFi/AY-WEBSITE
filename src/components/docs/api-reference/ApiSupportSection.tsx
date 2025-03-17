
import React from 'react';

const ApiSupportSection = () => {
  return (
    <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
      <h3 className="text-xl font-bold mb-2">API Support</h3>
      <p>
        For questions or issues related to the API, please contact us:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li>GitHub Issues: <a href="https://github.com/autoyield/api/issues" className="text-primary hover:underline">github.com/autoyield/api/issues</a></li>
        <li>Developer Discord: <a href="#" className="text-primary hover:underline">Join our Discord</a></li>
        <li>Email: <a href="mailto:api@autoyield.io" className="text-primary hover:underline">api@autoyield.io</a></li>
      </ul>
    </section>
  );
};

export default ApiSupportSection;
