
import React from 'react';

interface ApiParameter {
  name: string;
  type: string;
  description: string;
  required: boolean;
}

interface ApiParametersTableProps {
  parameters: ApiParameter[];
}

const ApiParametersTable = ({ parameters }: ApiParametersTableProps) => {
  return (
    <>
      <h4 className="font-semibold">Parameters</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Parameter</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Required</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4"><code>{param.name}</code></td>
                <td className="py-2 px-4">{param.type}</td>
                <td className="py-2 px-4">{param.description}</td>
                <td className="py-2 px-4">{param.required ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApiParametersTable;
