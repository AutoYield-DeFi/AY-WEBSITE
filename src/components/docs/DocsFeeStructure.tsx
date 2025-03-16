
import React from 'react';
import { DollarSign, BarChart, RefreshCw, PiggyBank } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DocsHeader from './DocsHeader';

const DocsFeeStructure = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Fee Structure"
        description="Understanding AutoYield's performance-based fee model"
        icon={<DollarSign size={24} className="text-primary" />}
      />

      <section className="space-y-4">
        <p className="text-lg">
          AutoYield follows a performance-based revenue model, ensuring alignment with user profitability. We only make money when you make money, creating perfect alignment between our interests.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Fee Categories</h2>
        
        <div className="grid gap-6 mt-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart size={20} className="text-primary" />
                Performance Fee
              </CardTitle>
              <CardDescription>Applied only to generated yield</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Rate:</span>
                <span className="font-bold text-xl">10%</span>
              </div>
              <p>
                A 10% fee is charged on trading fees earned by your liquidity position. 
                This fee is only applied to the yield generated, not your principal investment.
              </p>
              <p className="mt-2">
                <strong>Example:</strong> If your position earns $100 in trading fees, AutoYield will charge $10 as a performance fee.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw size={20} className="text-primary" />
                Auto-Compounding Fee
              </CardTitle>
              <CardDescription>Applied when reinvesting earned fees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Rate:</span>
                <span className="font-bold text-xl">0.1%</span>
              </div>
              <p>
                A minimal 0.1% fee is charged on the amount of earned fees being reinvested through auto-compounding.
              </p>
              <p className="mt-2">
                <strong>Example:</strong> If your position has $500 in accumulated fees that are being reinvested, the auto-compounding fee would be $0.50.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw size={20} className="text-primary" />
                Rebalancing Fee
              </CardTitle>
              <CardDescription>Applied during position adjustments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Rate:</span>
                <span className="font-bold text-xl">0.1%</span>
              </div>
              <p>
                A 0.1% fee is charged on the total position value when the AI rebalances your position.
              </p>
              <p className="mt-2">
                <strong>Example:</strong> If your $10,000 position is rebalanced, the fee would be $10. The AI optimizes rebalancing frequency to ensure the benefits outweigh the costs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank size={20} className="text-primary" />
                No Management Fees
              </CardTitle>
              <CardDescription>$0 cost for maintaining positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Rate:</span>
                <span className="font-bold text-xl">0%</span>
              </div>
              <p>
                AutoYield does not charge any management fees for maintaining your liquidity positions. There are no subscription costs, monthly fees, or maintenance charges.
              </p>
              <p className="mt-2">
                You only pay fees when your position is actively generating yield or being optimized.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Alert className="bg-primary-muted/10 border-primary-muted/20">
        <AlertTitle>Transaction Fees</AlertTitle>
        <AlertDescription>
          Users are responsible for Solana network transaction fees (gas) required to execute operations on the blockchain. 
          However, these fees on Solana are typically extremely low (fractions of a cent per transaction).
        </AlertDescription>
      </Alert>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Fee Comparison</h2>
        <p>
          AutoYield's fee structure compares favorably to traditional finance and other DeFi platforms:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Traditional Investment Funds:</strong> Typically charge 2% management fee and 20% performance fee</li>
          <li><strong>Yield Aggregators:</strong> Often charge 0.5-2% management fees plus performance fees</li>
          <li><strong>Manual LP Management:</strong> No direct fees, but high gas costs and often suboptimal positioning</li>
        </ul>
        <p className="mt-4">
          Our performance-based model ensures we only profit when you do, creating perfect alignment between AutoYield and our users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Fee Calculation Examples</h2>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">Example 1: Standard Yield Scenario</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial deposit: $10,000</li>
              <li>Monthly trading fees earned: $150 (18% APR)</li>
              <li>Performance fee: $15 (10% of $150)</li>
              <li>Auto-compounding fee: $0.15 (0.1% of $150)</li>
              <li>Rebalancing occurs twice: $20 (0.1% of $10,000 x 2)</li>
              <li><strong>Total monthly fees: $35.15</strong></li>
              <li><strong>Net yield to user: $114.85</strong></li>
            </ul>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">Example 2: High Volatility Scenario</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial deposit: $10,000</li>
              <li>Monthly trading fees earned: $300 (36% APR due to high volatility)</li>
              <li>Performance fee: $30 (10% of $300)</li>
              <li>Auto-compounding fee: $0.30 (0.1% of $300)</li>
              <li>Rebalancing occurs five times: $50 (0.1% of $10,000 x 5)</li>
              <li><strong>Total monthly fees: $80.30</strong></li>
              <li><strong>Net yield to user: $219.70</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Transparency Commitment</h3>
        <p>
          AutoYield is committed to complete fee transparency. All fees are:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Clearly displayed in the user interface before any transaction</li>
          <li>Documented in detail in the transaction history</li>
          <li>Calculated automatically and visible in real-time</li>
          <li>Subject to community governance for potential future adjustments</li>
        </ul>
      </section>
    </div>
  );
};

export default DocsFeeStructure;
