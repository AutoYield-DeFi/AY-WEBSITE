
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Legal Information | AutoYield"
        description="Legal information, privacy policy, terms of service, and disclaimers for AutoYield's liquidity management platform on Solana."
        keywords="legal, privacy policy, terms of service, disclaimer, AutoYield, DeFi risks"
      />
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Legal Information</h1>
        
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="disclaimer">Risk Disclaimer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="terms" className="space-y-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold">Terms of Service</h2>
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h3 className="text-xl font-medium mt-6">1. Agreement to Terms</h3>
              <p>
                By accessing or using the AutoYield platform, website, or any applications (collectively, the "Services") made available by AutoYield ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Services.
              </p>
              
              <h3 className="text-xl font-medium mt-6">2. Services Description</h3>
              <p>
                AutoYield provides an AI-powered liquidity management platform built on Solana. We offer automated liquidity provisioning and management services utilizing various tokens available on the Solana blockchain. Our platform uses algorithms and artificial intelligence to deploy strategies aimed at maximizing yield while mitigating risks.
              </p>
              
              <h3 className="text-xl font-medium mt-6">3. Eligibility</h3>
              <p>
                By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>You are at least 18 years of age;</li>
                <li>You have the legal capacity to enter into these Terms;</li>
                <li>You are not located in, under the control of, or a national or resident of any country to which the United States has embargoed goods or services;</li>
                <li>You are not a person barred from receiving services under the laws of your jurisdiction or any other applicable jurisdiction;</li>
                <li>Your use of the Services does not violate any applicable law or regulation.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">4. No Financial Advice</h3>
              <p>
                AutoYield does not provide investment, tax, legal, or accounting advice. The information and Services provided by AutoYield are not intended to constitute financial advice, and you should not rely on the information provided through our Services for making financial decisions. You should consult with qualified professionals before making any financial decisions.
              </p>
              
              <h3 className="text-xl font-medium mt-6">5. Risks and Disclaimers</h3>
              <p>
                The use of our Services involves significant risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Market Risk:</strong> The value of digital assets can be extremely volatile and may significantly decrease or increase in a short period of time.</li>
                <li><strong>Smart Contract Risk:</strong> Our Services rely on smart contracts deployed on the Solana blockchain. These smart contracts may contain bugs, vulnerabilities, or other issues that could result in the loss of funds or other negative consequences.</li>
                <li><strong>Impermanent Loss:</strong> Providing liquidity to automated market makers involves the risk of impermanent loss, which may result in decreased value compared to simply holding the assets.</li>
                <li><strong>Technical Risk:</strong> The Services may experience technical issues, including but not limited to system failures, network issues, or other technical disruptions that could affect performance or result in loss of funds.</li>
                <li><strong>Regulatory Risk:</strong> Changes in laws, regulations, or enforcement actions may adversely affect the operation of our Services or the value of digital assets.</li>
              </ul>
              <p className="mt-2">
                <strong>YOU ACKNOWLEDGE AND AGREE THAT YOU ARE USING OUR SERVICES AT YOUR OWN RISK. WE SHALL NOT BE RESPONSIBLE FOR ANY LOSSES OR DAMAGES YOU MAY INCUR AS A RESULT OF USING OUR SERVICES.</strong>
              </p>
              
              <h3 className="text-xl font-medium mt-6">6. Limitation of Liability</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AUTOYIELD, ITS AFFILIATES, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICES.
              </p>
              <p className="mt-2">
                IN NO EVENT WILL OUR AGGREGATE LIABILITY TO YOU OR ANY THIRD PARTY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE GREATER OF (A) THE AMOUNT YOU HAVE PAID TO US FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE 12-MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) $100.
              </p>
              
              <h3 className="text-xl font-medium mt-6">7. Indemnification</h3>
              <p>
                You agree to defend, indemnify, and hold harmless AutoYield, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any rights of another; or (d) your violation of any applicable laws, rules, or regulations.
              </p>
              
              <h3 className="text-xl font-medium mt-6">8. Modification of Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h3 className="text-xl font-medium mt-6">9. Termination</h3>
              <p>
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
              </p>
              
              <h3 className="text-xl font-medium mt-6">10. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Cayman Islands, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="text-xl font-medium mt-6">11. Dispute Resolution</h3>
              <p>
                Any dispute arising out of or relating to these Terms or the Services shall be finally settled by binding arbitration administered by the International Centre for Dispute Resolution in accordance with its International Arbitration Rules. The place of arbitration shall be the Cayman Islands. The language of the arbitration shall be English.
              </p>
              
              <h3 className="text-xl font-medium mt-6">12. Entire Agreement</h3>
              <p>
                These Terms constitute the entire agreement between you and AutoYield regarding the Services and supersede all prior agreements and understandings, whether written or oral.
              </p>
              
              <h3 className="text-xl font-medium mt-6">13. Contact Information</h3>
              <p>
                If you have any questions about these Terms, please contact us at legal@autoyield.io.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold">Privacy Policy</h2>
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h3 className="text-xl font-medium mt-6">1. Introduction</h3>
              <p>
                This Privacy Policy explains how AutoYield ("we," "us," or "our") collects, uses, and shares information about you when you use our website, applications, or other services (collectively, the "Services"). By using our Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy.
              </p>
              
              <h3 className="text-xl font-medium mt-6">2. Information We Collect</h3>
              <p>
                We collect information about you in the following ways:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Information you provide to us:</strong> We collect information you provide directly to us, such as when you create an account, update your profile, use the interactive features of our Services, participate in surveys, contests, or promotions, request customer support, or otherwise communicate with us.
                </li>
                <li>
                  <strong>Wallet information:</strong> To use certain features of our Services, you may need to connect your cryptocurrency wallet. When you connect your wallet, we may collect your wallet address and transaction history related to your interactions with our Services.
                </li>
                <li>
                  <strong>Automatically collected information:</strong> When you use our Services, we automatically collect certain information, including:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Log information, such as your IP address, browser type, operating system, referring pages, and pages visited.</li>
                    <li>Device information, such as hardware model, operating system, and unique device identifiers.</li>
                    <li>Usage information, such as the features you use, the time and duration of your visits, and other information about your interactions with our Services.</li>
                  </ul>
                </li>
                <li>
                  <strong>Information from cookies and similar technologies:</strong> We and our service providers use cookies, web beacons, and other technologies to collect information about your interactions with our Services and other websites and applications.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">3. How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide, maintain, and improve our Services;</li>
                <li>Process transactions and send related information, including confirmations and receipts;</li>
                <li>Send technical notices, updates, security alerts, and support and administrative messages;</li>
                <li>Respond to your comments, questions, and requests;</li>
                <li>Provide customer service and support;</li>
                <li>Communicate with you about products, services, offers, promotions, and events, and provide other news or information about us and our partners;</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of AutoYield and others;</li>
                <li>Personalize and improve the Services and provide content or features that match user profiles or interests;</li>
                <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards;</li>
                <li>Carry out any other purpose described to you at the time the information was collected.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">4. Sharing of Information</h3>
              <p>
                We may share information about you as follows:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>With service providers, professional advisors, and other third parties who need access to such information to carry out work on our behalf;</li>
                <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process;</li>
                <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of AutoYield or others;</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company;</li>
                <li>Between and among AutoYield and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership;</li>
                <li>With your consent or at your direction.</li>
              </ul>
              <p className="mt-2">
                We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
              </p>
              
              <h3 className="text-xl font-medium mt-6">5. Data Retention</h3>
              <p>
                We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
              </p>
              
              <h3 className="text-xl font-medium mt-6">6. Security</h3>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
              </p>
              
              <h3 className="text-xl font-medium mt-6">7. Your Choices</h3>
              <p>
                <strong>Account Information:</strong> You may update, correct, or delete information about you at any time by logging into your account settings. If you wish to delete or deactivate your account, please contact us, but note that we may retain certain information as required by law or for legitimate business purposes.
              </p>
              <p className="mt-2">
                <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
              </p>
              
              <h3 className="text-xl font-medium mt-6">8. Changes to this Privacy Policy</h3>
              <p>
                We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice. We encourage you to review the Privacy Policy whenever you access the Services to stay informed about our information practices.
              </p>
              
              <h3 className="text-xl font-medium mt-6">9. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@autoyield.io.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="disclaimer" className="space-y-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold">Risk Disclaimer</h2>
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h3 className="text-xl font-medium mt-6">1. General Risk Warning</h3>
              <p>
                Using AutoYield's platform and participating in decentralized finance ("DeFi") activities involves substantial risk of loss and is not suitable for all users. Before using our Services, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment, and therefore you should not invest money that you cannot afford to lose.
              </p>
              <p className="mt-2">
                <strong>YOU ACKNOWLEDGE AND AGREE THAT YOU SHALL ACCESS AND USE THE SERVICES AT YOUR OWN RISK. THE RISK OF LOSS IN USING THE SERVICES CAN BE SUBSTANTIAL.</strong>
              </p>
              
              <h3 className="text-xl font-medium mt-6">2. Specific Risks of DeFi and Cryptocurrency</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Volatility Risk:</strong> The cryptocurrency and DeFi markets are highly volatile. Token prices can fluctuate significantly in a short period, which may result in substantial losses.
                </li>
                <li>
                  <strong>Liquidity Risk:</strong> Liquidity in cryptocurrency markets can be highly variable. In times of market stress, it may be difficult or impossible to liquidate a position at a reasonable price.
                </li>
                <li>
                  <strong>Market Risk:</strong> The value of your investment may decline due to factors affecting the overall performance of the cryptocurrency market or specific DeFi protocols.
                </li>
                <li>
                  <strong>Smart Contract Risk:</strong> Our platform, as well as the underlying protocols we interact with, relies on smart contracts that may contain bugs, vulnerabilities, or exploits that could result in loss of funds.
                </li>
                <li>
                  <strong>Impermanent Loss:</strong> When providing liquidity to automated market makers (AMMs), you may experience impermanent loss due to price divergence between the paired assets.
                </li>
                <li>
                  <strong>Regulatory Risk:</strong> The regulatory landscape for DeFi and cryptocurrencies is evolving and varies by jurisdiction. Changes in laws or regulations may adversely affect the value or functionality of cryptocurrencies or our Services.
                </li>
                <li>
                  <strong>Technology Risk:</strong> The Services rely on blockchain technology, which is still experimental. Technical issues, network congestion, or blockchain reorganization could affect transactions and platform functionality.
                </li>
                <li>
                  <strong>Protocol Risk:</strong> The underlying protocols integrated with AutoYield may experience governance changes, economic attacks, or discontinuation that could affect your assets.
                </li>
                <li>
                  <strong>Algorithmic Strategy Risk:</strong> Our AI and algorithmic strategies, while designed to optimize returns and minimize risks, cannot guarantee performance and may not react optimally in all market conditions.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">3. No Investment Advice</h3>
              <p>
                Nothing contained on the AutoYield platform or in our communications constitutes investment advice, financial advice, trading advice, or any other advice. AutoYield is not registered as an investment advisor, broker-dealer, or exchange in any jurisdiction. You are solely responsible for determining whether any investment, investment strategy, or related transaction is appropriate for you based on your personal investment objectives, financial circumstances, and risk tolerance.
              </p>
              
              <h3 className="text-xl font-medium mt-6">4. No Guarantees</h3>
              <p>
                AutoYield makes no guarantees regarding the performance of any investment made through our platform. Past performance is not indicative of future results. The projected or estimated returns presented on our platform are based on various assumptions and historical data, which may not accurately reflect future conditions.
              </p>
              
              <h3 className="text-xl font-medium mt-6">5. AI and Algorithmic Limitations</h3>
              <p>
                While AutoYield uses advanced AI and algorithms to analyze markets and manage liquidity positions, these technologies have inherent limitations. They rely on historical data and patterns which may not accurately predict future market conditions, especially during extreme market events or unprecedented scenarios.
              </p>
              
              <h3 className="text-xl font-medium mt-6">6. Platform Dependencies</h3>
              <p>
                AutoYield depends on the security, stability, and performance of Solana and other integrated protocols. Issues affecting these underlying technologies could impact our Services and your assets.
              </p>
              
              <h3 className="text-xl font-medium mt-6">7. Research and Due Diligence</h3>
              <p>
                Users are strongly encouraged to conduct their own research and due diligence before using AutoYield's Services. You should understand how the platform works, the underlying protocols it interacts with, and all associated risks.
              </p>
              
              <h3 className="text-xl font-medium mt-6">8. Risk Appetite and Capital Allocation</h3>
              <p>
                Only allocate funds to DeFi activities that you can afford to lose. Users should carefully consider their risk tolerance and adjust their capital allocation accordingly.
              </p>
              
              <h3 className="text-xl font-medium mt-6">9. Acknowledgment</h3>
              <p>
                By using AutoYield's Services, you acknowledge that you have read, understood, and agree to this Risk Disclaimer. You accept sole responsibility for your investment decisions and the potential risks and outcomes that may result from using our Services.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
