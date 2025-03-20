
import React from 'react';
import { Shield, Lock, AlertTriangle, Eye, Users, CheckCircle, Code, Database, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const DocsSecurityModel = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Security Model</h1>
        <p className="text-xl text-muted-foreground">
          How AutoYield protects your assets and ensures platform integrity
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield size={24} className="text-primary" />
          Security-First Approach
        </h2>
        <p>
          AutoYield follows a security-first approach, implementing robust smart contract protections and non-custodial 
          architecture. Your security is our highest priority, which is why we've built multiple layers of protection 
          into our platform.
        </p>
        
        <Alert variant="destructive" className="my-6">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Critical DeFi Security Warning</AlertTitle>
          <AlertDescription>
            As a DeFi application handling financial assets, AutoYield implements rigorous security measures beyond 
            industry standards. However, all DeFi platforms carry inherent risks. Only deposit what you can afford to lose and 
            always verify transactions before signing them.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Smart Contract Architecture</h2>
        
        <Card id="vault-contract">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock size={20} className="text-primary" />
              Isolated Vault Contracts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When you deposit assets into AutoYield, your funds are held in isolated vault contracts that are directly 
              linked to your wallet address.
            </p>
            <h4 className="font-semibold">Key security features:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Each user has their own isolated vault to prevent cross-contamination</li>
              <li>Vaults interact with Meteora DLMM pools through secure program-to-program calls</li>
              <li>Strict permission controls ensure only authorized operations can occur</li>
              <li>All state changes are verified through multi-level validation checks</li>
              <li>Reentrancy guards prevent flash loan and similar attacks</li>
              <li>Integer overflow protection for all numerical calculations</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card id="non-custodial">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              Non-Custodial Design
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              AutoYield operates on a fully non-custodial model, meaning you retain full ownership and control of your 
              assets at all times.
            </p>
            <h4 className="font-semibold">What this means for you:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership rights to your deposited assets at all times</li>
              <li>Withdrawals can be made instantly, without requiring approval from us</li>
              <li>Your assets never pass through any centralized wallet or third-party custodian</li>
              <li>Even if AutoYield's web interface were to go offline, your assets would remain accessible</li>
              <li>No admin keys exist that could freeze or seize your funds</li>
            </ul>
            <Alert>
              <AlertTitle>Security Benefit</AlertTitle>
              <AlertDescription>
                The non-custodial model eliminates single points of failure and greatly reduces counterparty risk. 
                Your assets are never pooled with other users' funds in shared wallets.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="program-to-program">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock size={20} className="text-primary" />
              Program-to-Program Calls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              AutoYield's smart contracts interact directly with Meteora's liquidity program through secure 
              program-to-program (P2P) calls, allowing for AI-driven automated execution without intermediaries.
            </p>
            <h4 className="font-semibold">Security advantages:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct program interactions reduce attack surface and potential for exploitation</li>
              <li>All P2P calls include strict validation of input parameters and expected outputs</li>
              <li>Transaction atomicity ensures operations either complete fully or revert entirely</li>
              <li>No reliance on external oracles or off-chain data sources for critical operations</li>
              <li>Comprehensive error handling prevents partial execution states</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card id="blockchain-security">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code size={20} className="text-primary" />
              Blockchain-Specific Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Solana's unique architecture requires specific security considerations that we've addressed in our implementation.
            </p>
            <h4 className="font-semibold">Solana-specific protections:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account validation to prevent account substitution attacks</li>
              <li>Proper handling of CPI (Cross-Program Invocation) context</li>
              <li>Signing verification to prevent unauthorized transactions</li>
              <li>Comprehensive seed derivation validation</li>
              <li>Careful management of PDAs (Program Derived Addresses)</li>
              <li>Protection against transaction instruction manipulation</li>
            </ul>
            <Alert variant="default" className="bg-primary-muted/10 mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Our contracts implement specific defenses against common Solana attack vectors including instruction 
                snooping, account data manipulation, and malicious CPI chains.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Security Features</h2>
        
        <Card id="smart-contract-audits">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye size={20} className="text-primary" />
              Smart Contract Audits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All AutoYield smart contracts undergo comprehensive third-party security audits to identify and 
              address potential vulnerabilities before deployment.
            </p>
            <h4 className="font-semibold">Our audit process:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple independent audit firms review our code</li>
              <li>Continuous automated testing through fuzzing and formal verification</li>
              <li>All audit reports are published publicly for transparency</li>
              <li>Identified issues are addressed with verification from auditors</li>
              <li>Bug bounty program to incentivize responsible disclosure</li>
            </ul>
            <p className="mt-2">
              <a href="#" className="text-primary hover:underline">View our latest audit reports</a>
            </p>
          </CardContent>
        </Card>
        
        <Card id="multi-sig-governance">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} className="text-primary" />
              Multi-Signature Governance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Critical protocol functions and parameter updates require multi-signature approval from multiple 
              trusted parties, preventing any single entity from making unauthorized changes.
            </p>
            <h4 className="font-semibold">Multi-sig protections:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum of M-of-N signatures required for any critical changes</li>
              <li>Signers are distributed across different geographic locations and jurisdictions</li>
              <li>Hardware security modules (HSMs) protect signing keys</li>
              <li>Time-locks on significant changes for community review</li>
              <li>Transparent on-chain governance with public proposals</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card id="emergency-stop">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-primary" />
              Emergency Stop Mechanism
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If any security exploit is detected, an emergency stop mechanism can temporarily pause specific 
              functions to protect user funds while the issue is addressed.
            </p>
            <h4 className="font-semibold">How it works:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitored transaction anomaly detection triggers alerts</li>
              <li>Multi-sig approval required to activate emergency stop</li>
              <li>Granular control allows pausing specific functions without affecting others</li>
              <li>User withdrawals remain enabled even during emergency stop periods</li>
              <li>Time-locked execution prevents indefinite freezing of protocol</li>
            </ul>
            <Alert>
              <AlertTitle>User Protection</AlertTitle>
              <AlertDescription>
                While the emergency stop can pause new deposits or AI operations, user withdrawals always remain 
                enabled, ensuring you can access your funds at any time, even during security incidents.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card id="permissioned-operator">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              Permissioned Operator System
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Only pre-approved AI agents and authorized operators can execute rebalancing transactions or make 
              changes to user positions.
            </p>
            <h4 className="font-semibold">Permission controls:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strict access control lists (ACLs) for all smart contract functions</li>
              <li>Regular rotation of operator keys</li>
              <li>Detailed logging of all operator actions on-chain</li>
              <li>Rate limiting prevents rapid, potentially malicious actions</li>
              <li>Hierarchical approval system for different risk levels</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card id="real-time-monitoring">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye size={20} className="text-primary" />
              Real-Time Monitoring & Anomaly Detection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              AI continuously monitors unusual pool behaviors to prevent front-running and other DeFi exploits, 
              with 24/7 supervision by our security team.
            </p>
            <h4 className="font-semibold">Monitoring systems:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time transaction monitoring across Solana blockchain</li>
              <li>Machine learning models detect anomalous patterns</li>
              <li>Automatic alerts for unusual activity or potential exploits</li>
              <li>Dedicated security team responds to alerts 24/7</li>
              <li>Circuit breakers activate when extreme market conditions are detected</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card id="secure-architecture">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database size={20} className="text-primary" />
              Secure Web Application Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our web application implements industry-leading security practices to protect against common web vulnerabilities.
            </p>
            <h4 className="font-semibold">Web security measures:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive Content Security Policy (CSP) to prevent XSS attacks</li>
              <li>Secure, HttpOnly cookies and proper CORS configuration</li>
              <li>Input validation and output encoding for all user-provided content</li>
              <li>Protection against CSRF, clickjacking, and injection attacks</li>
              <li>Regular security scanning and penetration testing</li>
              <li>Sanitization of all data displayed in the interface</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Our application is regularly tested against OWASP Top 10 vulnerabilities and follows industry best practices for secure coding.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Risk Mitigation Strategies</h2>
        <p>
          While we implement comprehensive security measures, DeFi inherently involves various risks. 
          Here's how we address them:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Smart Contract Risk:</strong> Thorough audits, formal verification, and gradual rollout of new features</li>
          <li><strong>Market Risk:</strong> AI-driven position management with stop-loss mechanisms</li>
          <li><strong>Oracle Risk:</strong> Using multiple price sources and on-chain data to prevent manipulation</li>
          <li><strong>Centralization Risk:</strong> Non-custodial design and multi-sig governance</li>
          <li><strong>Front-Running Risk:</strong> Transaction monitoring and anomaly detection</li>
          <li><strong>MEV Protection:</strong> Special transaction ordering protection to prevent MEV extraction</li>
          <li><strong>Bridge Risk:</strong> Limited interaction with cross-chain bridges to reduce attack surface</li>
          <li><strong>Protocol Dependency Risk:</strong> Continuous monitoring of integrated protocols</li>
        </ul>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Security Best Practices for Users</h3>
        <p className="mb-4">
          While AutoYield prioritizes platform security, users should also follow these best practices:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always verify you're on the official AutoYield website before connecting your wallet</li>
          <li>Use hardware wallets when possible for enhanced security</li>
          <li>Never share your seed phrase or private keys with anyone</li>
          <li>Start with smaller positions until you're comfortable with the platform</li>
          <li>Keep your wallet software and operating system updated</li>
          <li>Use unique passwords and 2FA for your exchange accounts</li>
          <li>Be wary of phishing attempts and fake websites</li>
          <li>Review all transaction details before signing</li>
        </ul>
      </section>
    </div>
  );
};

export default DocsSecurityModel;
