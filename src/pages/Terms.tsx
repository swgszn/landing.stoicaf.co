import React from 'react';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="mx-auto mb-6 text-stoic-blue" size={64} />
          <h1 className="text-5xl md:text-6xl font-black mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Last Updated: November 26, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing or using Stoic AF's website, products, or services, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Use of Services</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Eligibility</h3>
            <p className="text-slate-600 mb-6">
              You must be at least 18 years old to use our services. By using Stoic AF, you represent and
              warrant that you meet this age requirement.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Acceptable Use</h3>
            <p className="text-slate-600 mb-4">You agree to use our services only for lawful purposes. You will not:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code, viruses, or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use our services for spam or unsolicited marketing</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Intellectual Property</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Our Content</h3>
            <p className="text-slate-600 mb-6">
              All content on Stoic AF, including text, graphics, logos, images, and software, is the property
              of Stoic AF and protected by copyright and trademark laws. You may not copy, reproduce, distribute,
              or create derivative works without our express written permission.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Your Content</h3>
            <p className="text-slate-600 mb-6">
              You retain ownership of your journal entries and any content you create using our services.
              By using our services, you grant us a limited license to store and process your content
              solely to provide our services to you.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Products and Purchases</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Book and Digital Products</h3>
            <p className="text-slate-600 mb-6">
              All sales are final. Due to the digital nature of our products, we do not offer refunds
              unless required by law or in cases of technical issues that prevent access to purchased content.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Subscriptions</h3>
            <p className="text-slate-600 mb-6">
              If you subscribe to premium features of our journal app, your subscription will automatically
              renew unless you cancel before the renewal date. You can cancel anytime through your account
              settings. Refunds are not provided for partial subscription periods.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Pricing</h3>
            <p className="text-slate-600 mb-6">
              We reserve the right to change our pricing at any time. Price changes will not affect
              existing purchases or active subscriptions until renewal.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Disclaimers</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Educational Content</h3>
            <p className="text-slate-600 mb-6">
              Our content is for educational and informational purposes only. It is not a substitute for
              professional mental health advice, diagnosis, or treatment. If you're experiencing mental
              health issues, please consult a qualified professional.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">No Warranties</h3>
            <p className="text-slate-600 mb-6">
              Our services are provided "as is" without warranties of any kind, express or implied.
              We do not guarantee that our services will be uninterrupted, error-free, or secure.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              To the fullest extent permitted by law, Stoic AF shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of our services.
              Our total liability shall not exceed the amount you paid for our services in the past 12 months.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Account Termination</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to suspend or terminate your account if you violate these Terms of Service
              or engage in conduct we deem harmful to other users or our business. You may delete your account
              at any time through your account settings.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Changes to Terms</h2>
            <p className="text-slate-600 mb-6">
              We may update these Terms of Service from time to time. We'll notify you of material changes
              via email or a prominent notice on our website. Continued use of our services after changes
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of
              the jurisdiction in which Stoic AF operates, without regard to conflict of law provisions.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Contact</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about these Terms of Service, contact us at:{' '}
              <a href="mailto:legal@stoicaf.co" className="text-stoic-blue hover:underline font-semibold">
                legal@stoicaf.co
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
