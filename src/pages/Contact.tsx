import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with contact form service
    console.log('Contact form submitted:', formData);
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Questions? Feedback? Partnership inquiries? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-stoic-blue" size={32} />
              <h2 className="text-3xl font-black text-slate-900">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-stoic-blue focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-stoic-blue focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-stoic-blue focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-stoic-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stoic-blue hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-stoic-blue" size={32} />
              <h3 className="text-2xl font-black text-slate-900">Other Ways to Reach Us</h3>
            </div>

            <div className="space-y-4 text-slate-600">
              <p>
                <strong className="text-slate-900">General Inquiries:</strong>{' '}
                <a href="mailto:hello@stoicaf.co" className="text-stoic-blue hover:underline">
                  hello@stoicaf.co
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Support:</strong>{' '}
                <a href="mailto:support@stoicaf.co" className="text-stoic-blue hover:underline">
                  support@stoicaf.co
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Partnerships:</strong>{' '}
                <a href="mailto:partners@stoicaf.co" className="text-stoic-blue hover:underline">
                  partners@stoicaf.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
