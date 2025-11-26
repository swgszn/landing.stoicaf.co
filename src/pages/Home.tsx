import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, BookOpen, Smartphone, ShoppingBag,
  ArrowRight, Check, Star, Twitter, Instagram,
  Mail, ChevronDown, Calendar, Clock
} from 'lucide-react';
import Logo from '../components/Logo';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;
    const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;

    // Debug logging
    console.log('ConvertKit config:', {
      formId: formId ? 'Set' : 'Missing',
      apiKey: apiKey ? 'Set' : 'Missing',
      formIdValue: formId,
      allEnvVars: import.meta.env
    });

    // Fallback if env vars not set (dev mode)
    if (!formId || !apiKey) {
      console.log('ConvertKit not configured. Email:', email);
      alert('Thanks for subscribing! (ConvertKit integration pending)');
      setEmail('');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
        }),
      });

      const data = await response.json();
      console.log('ConvertKit response:', { status: response.status, data });

      if (response.ok) {
        alert('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        console.error('ConvertKit error:', data);
        alert(`Oops! ${data.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                STOIC AF
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://blog.stoicaf.co" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                BLOG
              </a>
              <a href="#book" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                THE BOOK
              </a>
              <a href="#app" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                THE APP
              </a>
              <a href="#merch" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                MERCH
              </a>
              <a href="#newsletter" className="bg-stoic-blue hover:bg-sky-600 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm hover:shadow-md">
                GET UPDATES
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 hover:text-stoic-blue p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a href="https://blog.stoicaf.co" className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              BLOG
            </a>
            <a href="#book" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              THE BOOK
            </a>
            <a href="#app" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              THE APP
            </a>
            <a href="#merch" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              MERCH
            </a>
            <a href="#newsletter" onClick={() => setIsMenuOpen(false)} className="block bg-stoic-blue text-white px-4 py-3 rounded-md font-bold text-center">
              GET UPDATES
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-12" style={{ backgroundColor: 'rgba(75, 144, 200, 0.02)' }}>
        <div className="mx-auto relative" style={{ width: '85%', maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stoic AF Bust Mascot */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative" style={{
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08))'
              }}>
                <img
                  src="/images/marble_bust.png"
                  alt="Stoic AF Marble Bust"
                  className="w-full max-w-md lg:max-w-lg"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="fade-in-up order-1 lg:order-2">
              <div className="inline-block mb-6 px-4 py-2 bg-stoic-blue/10 rounded-full">
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  Ancient Wisdom, Modern Application
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                Master Your Mind.<br />
                <span className="text-stoic-blue">Own Your Life.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                Stoicism isn't just philosophy—it's the operating system for a meaningful life.
                Learn to control what you can, let go of what you can't, and build unshakeable discipline.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book"
                  className="bg-stoic-blue hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Get the Book
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="#app"
                  className="border-2 border-slate-300 hover:border-stoic-blue text-slate-800 hover:text-stoic-blue px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Smartphone size={20} />
                  Try the App
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  <span>No BS, Just Philosophy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  <span>Practical Daily Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  <span>Build Real Discipline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <a href="#book" className="inline-flex flex-col items-center text-slate-400 hover:text-stoic-blue transition-colors">
              <span className="text-xs uppercase tracking-wider mb-2">Explore</span>
              <ChevronDown className="animate-bounce" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed">
            "You have power over your mind—not outside events. Realize this, and you will find strength."
          </blockquote>
          <p className="mt-4 text-stoic-blue font-bold text-lg">— Marcus Aurelius</p>
        </div>
      </section>

      {/* Featured Blog Articles */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-stoic-blue/10 rounded-full">
              <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                From The Blog
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Latest Stoic <span className="text-stoic-blue">Insights</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Weekly wisdom on building discipline, conquering anxiety, and living with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'How to Think Like a Stoic in 2025',
                excerpt: 'Ancient philosophy meets modern challenges. Learn the core principles that made Marcus Aurelius unshakeable.',
                category: 'Philosophy',
                readTime: '8 min',
                date: 'Nov 20, 2025',
                image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80'
              },
              {
                title: 'The Dichotomy Journal: Control What You Can',
                excerpt: 'A daily practice to separate what you control from what you don\'t. Transform anxiety into action.',
                category: 'Journaling',
                readTime: '6 min',
                date: 'Nov 18, 2025',
                image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
              },
              {
                title: 'Why Discipline Beats Motivation Every Time',
                excerpt: 'Motivation is a lie. Discipline is freedom. Here\'s how to build systems that work when you don\'t feel like it.',
                category: 'Discipline',
                readTime: '10 min',
                date: 'Nov 15, 2025',
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
              }
            ].map((article, i) => (
              <a
                key={i}
                href="https://blog.stoicaf.co"
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-stoic-blue"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-stoic-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stoic-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-stoic-blue font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://blog.stoicaf.co"
              className="inline-flex items-center gap-2 border-2 border-stoic-blue text-stoic-blue hover:bg-stoic-blue hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
            >
              View All Articles
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* The Book Section */}
      <section id="book" className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Image/Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform">
                <img
                  src="/images/book.png"
                  alt="Stoic AF Book"
                  className="w-full h-[600px] object-cover"
                  style={{ objectPosition: 'center 65%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <BookOpen className="mb-4" size={48} />
                    <h3 className="text-4xl font-black mb-2">STOIC AF</h3>
                    <p className="text-xl font-semibold mb-4">The Millennial Bro's Guide to Stoicism</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-stoic-blue/10 rounded-full">
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  The Book
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Your Playbook for <span className="text-stoic-blue">Unshakeable Calm</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                This isn't another self-help book full of fluff. It's a no-BS guide to Stoic philosophy,
                rewritten for the modern grind. Learn how ancient Romans conquered anxiety, built empires,
                and died with zero regrets.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Master the Dichotomy of Control',
                  'Build Daily Discipline Systems',
                  'Conquer Negative Emotions',
                  '30-Day Stoic Workbook Included',
                  'Journal Templates & Exercises'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stoic-blue hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Pre-Order Now - $24.99
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-slate-300 hover:border-stoic-blue text-slate-800 hover:text-stoic-blue px-8 py-4 rounded-lg text-lg font-bold transition-all">
                  Read Sample Chapter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The App Section */}
      <section id="app" className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* App Description - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-stoic-blue/10 rounded-full">
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  The Journal App
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Your Daily <span className="text-stoic-blue">Stoic Practice</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Marcus Aurelius journaled daily. So should you. Our app makes it effortless with
                guided prompts, reflection templates, and progress tracking built on Stoic principles.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Morning & Evening Stoic Rituals',
                  'Dichotomy of Control Journal',
                  'Negative Visualization Exercises',
                  'Progress Tracking & Insights',
                  'Customizable Templates'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stoic-blue hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Smartphone size={20} />
                  Download iOS/Android
                </button>
                <button className="border-2 border-slate-300 hover:border-stoic-blue text-slate-800 hover:text-stoic-blue px-8 py-4 rounded-lg text-lg font-bold transition-all">
                  Try Web Version
                </button>
              </div>

              <p className="text-sm text-slate-500 mt-4">
                Free to start. Premium features unlock deeper insights.
              </p>
            </div>

            {/* App Mockup - Right Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="Journal app on phone"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex items-end">
                  <div className="p-8 text-white w-full">
                    <Smartphone className="mb-4" size={48} />
                    <h3 className="text-3xl font-black mb-3">Daily Stoic Journal</h3>
                    <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <div className="text-sm opacity-90">
                        <div className="text-xs uppercase tracking-wider mb-1">Morning Meditation</div>
                        <div className="font-semibold">What's in your control today?</div>
                      </div>
                      <div className="text-sm opacity-90">
                        <div className="text-xs uppercase tracking-wider mb-1">Evening Reflection</div>
                        <div className="font-semibold">What did you learn today?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-stoic-blue/10 rounded-full">
            <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
              The Gear
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Wear the <span className="text-stoic-blue">Mindset</span>
          </h2>

          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            High-quality apparel with Stoic quotes and minimalist designs.
            Every piece is a reminder to stay disciplined, stay focused, stay Stoic AF.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Amor Fati Tee', price: '$32', desc: 'Love your fate. Premium cotton.', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80' },
              { name: 'Memento Bro Hoodie', price: '$58', desc: 'Remember you will die. Heavy fleece.', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80' },
              { name: 'Discipline Equals Freedom Hat', price: '$28', desc: 'Structured cap. Embroidered.', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-stoic-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-stoic-blue">{item.price}</span>
                    <button className="bg-slate-900 hover:bg-stoic-blue text-white px-6 py-2 rounded-lg font-bold transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="border-2 border-stoic-blue text-stoic-blue hover:bg-stoic-blue hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all">
            View Full Collection
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-slate-600">Real reviews from real readers building real discipline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jake M.',
                role: 'Entrepreneur',
                text: 'This book changed how I handle stress. The journaling system alone is worth 10x the price. Finally feeling in control.'
              },
              {
                name: 'Sarah K.',
                role: 'Product Manager',
                text: 'No fluff, just actionable philosophy. I use the morning ritual every day. My anxiety is down, my focus is up.'
              },
              {
                name: 'Marcus T.',
                role: 'Developer',
                text: 'Best $25 I ever spent. The app keeps me consistent. The book keeps me grounded. This is the real deal.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-xl border-l-4 border-stoic-blue">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-12 bg-stoic-blue">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="text-white mx-auto mb-6" size={64} />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Get Weekly Stoic Insights
          </h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Join 10,000+ readers getting actionable philosophy, journaling prompts,
            and exclusive content delivered every Sunday morning.
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-lg border-2 border-transparent focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
              </button>
            </div>
            <p className="text-sm text-sky-100 mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stoic-dark text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Logo className="w-6 h-6" />
                <span className="text-lg font-bold text-white">STOIC AF</span>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-6">
                Ancient wisdom for the modern grind. We translate Marcus Aurelius for the digital age,
                helping you build resilience, discipline, and a life worth living.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#book" className="hover:text-stoic-blue transition-colors">The Book</a></li>
                <li><a href="#app" className="hover:text-stoic-blue transition-colors">Journal App</a></li>
                <li><a href="#merch" className="hover:text-stoic-blue transition-colors">Merch Store</a></li>
                <li><a href="https://blog.stoicaf.co" className="hover:text-stoic-blue transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-stoic-blue transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-stoic-blue transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-stoic-blue transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-stoic-blue transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Stoic AF. All rights reserved. Memento Bro.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
