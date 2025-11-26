import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="mx-auto mb-6 text-stoic-blue" size={64} />
          <h1 className="text-5xl md:text-6xl font-black mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Last Updated: November 26, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-6">
              At Stoic AF, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our website,
              book, app, and services.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Information We Collect</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Information You Provide</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Email address when you subscribe to our newsletter</li>
              <li>Name and contact details when you reach out via our contact form</li>
              <li>Account information if you create an account for our journal app</li>
              <li>Payment information when you purchase our products (processed securely by third-party providers)</li>
              <li>Journal entries and reflections (stored locally and encrypted)</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-8">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>IP address and general location</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>To deliver our services and improve your experience</li>
              <li>To send you newsletters, updates, and content you subscribed to</li>
              <li>To process transactions and send purchase confirmations</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze usage patterns and improve our products</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Data Sharing and Disclosure</h2>
            <p className="text-slate-600 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Email platforms, payment processors, hosting providers</li>
              <li><strong>Analytics Tools:</strong> To understand how our services are used (anonymized when possible)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Your Journal Data</h2>
            <p className="text-slate-600 mb-6">
              Your journal entries are private and belong to you. We encrypt your data and store it securely.
              You can export or delete your journal data at any time. We never share your personal reflections
              with third parties.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Cookies</h2>
            <p className="text-slate-600 mb-6">
              We use cookies to enhance your experience, remember your preferences, and analyze site traffic.
              You can control cookie settings through your browser, but some features may not work properly
              if cookies are disabled.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement industry-standard security measures to protect your data, including encryption,
              secure servers, and regular security audits. However, no method of transmission over the internet
              is 100% secure.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Privacy Policy from time to time. We'll notify you of significant changes
              via email or a prominent notice on our website. Continued use of our services after changes
              constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-4 mt-12">Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about this Privacy Policy or how we handle your data, contact us at:{' '}
              <a href="mailto:privacy@stoicaf.co" className="text-stoic-blue hover:underline font-semibold">
                privacy@stoicaf.co
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
