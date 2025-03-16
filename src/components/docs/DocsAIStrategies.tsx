
import React from 'react';
import { RefreshCcw, TrendingUp, Shield, Sparkles, AlertTriangle, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const DocsAIStrategies = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">AI Strategies</h1>
        <p className="text-xl text-muted-foreground">
          How the QUANT AI optimizes your liquidity positions
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Brain size={24} className="text-primary" />
          The QUANT AI Agent
        </h2>
        <p>
          The QUANT AI agent is the backbone of AutoYield's automated strategy, designed to optimize 
          liquidity positions for maximum yield while mitigating risk. Leveraging Solana's AI Agent Kit, 
          the QUANT AI employs multiple strategies to enhance capital efficiency and protect against 
          adverse market conditions.
        </p>
        <p>
          Our AI continuously analyzes on-chain data, price movements, volatility metrics, and liquidity 
          depths to make intelligent decisions about your liquidity positions.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Core AI Strategies</h2>
        
        <Card id="dynamic-range-rebalancing">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCcw size={20} className="text-primary" />
              Dynamic Range Rebalancing
            </CardTitle>
            <CardDescription>Ensuring your liquidity stays in the most active trading range</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The QUANT AI continuously analyzes price trends and liquidity depth in Meteora DLMM pools. 
              When price movements push liquidity outside an optimal range, the AI rebalances automatically.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>AI monitors price movements relative to your concentrated liquidity range</li>
              <li>When prices approach the edges of your range, the AI evaluates market conditions</li>
              <li>If the price trend is likely to continue, the AI proactively shifts your range</li>
              <li>Your liquidity remains active where trading is happening, maximizing fee collection</li>
            </ol>
            <Alert>
              <AlertTitle>Strategy Benefit</AlertTitle>
              <AlertDescription>
                This strategy ensures your capital is always actively earning fees instead of sitting idle 
                outside the trading range. Traditional LP positions become ineffective when prices move out 
                of range.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="market-adaptive-deployment">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" />
              Market-Adaptive Liquidity Deployment
            </CardTitle>
            <CardDescription>Optimizing capital allocation based on real-time market dynamics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The QUANT AI detects trading volume surges and reallocates liquidity dynamically to ensure 
              capital is placed where fee generation is highest.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>AI analyzes trading volume patterns across different price ranges</li>
              <li>Identifies price zones with higher trading activity and fee generation</li>
              <li>Concentrates more of your liquidity in these high-activity zones</li>
              <li>Continuously adjusts as trading patterns shift</li>
            </ol>
            <Alert>
              <AlertTitle>Strategy Benefit</AlertTitle>
              <AlertDescription>
                By concentrating liquidity where trading is most active, your capital works more efficiently, 
                generating higher returns than evenly distributed liquidity across all price ranges.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="impermanent-loss-mitigation">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              Impermanent Loss Mitigation
            </CardTitle>
            <CardDescription>Protecting your capital during market volatility</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The QUANT AI monitors volatility metrics and adjusts positions preemptively, shifting 
              liquidity to safer price bands during large price swings.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>AI constantly evaluates market volatility and directional momentum</li>
              <li>Calculates potential impermanent loss scenarios based on volatility models</li>
              <li>During high volatility periods, narrows liquidity range to reduce exposure</li>
              <li>If significant directional moves are detected, shifts range accordingly</li>
            </ol>
            <Alert>
              <AlertTitle>Strategy Benefit</AlertTitle>
              <AlertDescription>
                Impermanent loss is one of the biggest challenges in liquidity provision. Our AI actively 
                works to reduce this risk, preserving your capital while maintaining yield generation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="auto-compounding">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              Auto-Compounding Fees
            </CardTitle>
            <CardDescription>Maximizing returns through automatic reinvestment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The QUANT AI automatically reinvests earned trading fees to maximize long-term yield and 
              reduces gas costs through compounding efficiency.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>AI collects trading fees earned from your liquidity position</li>
              <li>Calculates optimal compounding frequency based on fee accumulation rate and gas costs</li>
              <li>Automatically reinvests fees back into your liquidity position</li>
              <li>Compounds more frequently during high-volume periods, less during low activity</li>
            </ol>
            <Alert>
              <AlertTitle>Strategy Benefit</AlertTitle>
              <AlertDescription>
                Compounding is a powerful way to accelerate returns. AutoYield handles this automatically 
                at optimal intervals, saving you gas fees while maximizing the growth potential of your position.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="stop-loss">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-primary" />
              Smart Stop-Loss Mechanism
            </CardTitle>
            <CardDescription>Emergency protection during extreme market conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The QUANT AI sets risk thresholds based on market conditions and automatically withdraws 
              liquidity to stable assets if volatility exceeds safe limits.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>AI continuously monitors market conditions and on-chain activity</li>
              <li>Establishes dynamic risk thresholds based on historical volatility</li>
              <li>During extreme market events or unusual pool activity, triggers safety protocols</li>
              <li>Can automatically withdraw liquidity to stable assets if risk exceeds user-defined thresholds</li>
            </ol>
            <Alert>
              <AlertTitle>Strategy Benefit</AlertTitle>
              <AlertDescription>
                This safety mechanism provides peace of mind, particularly during market crashes or 
                black swan events, helping preserve capital that could otherwise face significant losses.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Technical Implementation</h2>
        <p>
          The QUANT AI is powered by the Solana AI Agent Kit, enabling fast, efficient execution of 
          complex liquidity strategies. The technical architecture includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>On-chain Data Collection:</strong> Real-time monitoring of Solana blockchain activity</li>
          <li><strong>AI Analysis Engine:</strong> Pattern recognition and predictive modeling for market conditions</li>
          <li><strong>Execution Layer:</strong> Smart contract infrastructure for automated position management</li>
          <li><strong>Risk Management System:</strong> Dynamic risk assessment and threshold management</li>
        </ul>
        <p>
          All AI actions are executed via secure, audited smart contracts with robust permission systems 
          to ensure only authorized operations can occur.
        </p>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
        <p>
          The QUANT AI is constantly learning and improving. Our system analyzes the performance of 
          strategies across thousands of liquidity positions to identify what works best in different 
          market conditions. This feedback loop allows us to continually refine our algorithms and 
          enhance performance for all users.
        </p>
      </section>
    </div>
  );
};

export default DocsAIStrategies;
