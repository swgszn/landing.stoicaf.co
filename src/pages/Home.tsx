import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, BookOpen, Smartphone, ShoppingBag,
  ArrowRight, Check, Star, Twitter, Instagram,
  Mail, ChevronDown, Calendar, Clock
} from 'lucide-react';
import Logo from '../components/Logo';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTheme();

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
    <div className={`min-h-screen ${t.colors.body}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${t.colors.nav} backdrop-blur-md border-b ${t.colors.navBorder} z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className={`text-xl font-extrabold tracking-tight ${t.colors.heading}`}>
                STOIC AF
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://blog.stoicaf.co" className={`text-sm font-semibold ${t.colors.navText} hover:text-stoic-blue transition-colors`}>
                BLOG
              </a>
              <a href="#book" className={`text-sm font-semibold ${t.colors.navText} hover:text-stoic-blue transition-colors`}>
                THE BOOK
              </a>
              <a href="#app" className={`text-sm font-semibold ${t.colors.navText} hover:text-stoic-blue transition-colors`}>
                THE APP
              </a>
              <a href="#merch" className={`text-sm font-semibold ${t.colors.navText} hover:text-stoic-blue transition-colors`}>
                MERCH
              </a>
              <a href="#newsletter" className="bg-stoic-blue hover:bg-sky-500 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm hover:shadow-md">
                GET UPDATES
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-stoic-blue p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className={`md:hidden ${t.colors.navMobile} border-b ${t.colors.navBorder} px-4 py-4 space-y-3`}>
            <a href="https://blog.stoicaf.co" className={`block px-3 py-2 text-base font-bold ${t.colors.navMobileText} ${t.colors.navMobileHover} rounded-md`}>
              BLOG
            </a>
            <a href="#book" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${t.colors.navMobileText} ${t.colors.navMobileHover} rounded-md`}>
              THE BOOK
            </a>
            <a href="#app" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${t.colors.navMobileText} ${t.colors.navMobileHover} rounded-md`}>
              THE APP
            </a>
            <a href="#merch" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 text-base font-bold ${t.colors.navMobileText} ${t.colors.navMobileHover} rounded-md`}>
              MERCH
            </a>
            <a href="#newsletter" onClick={() => setIsMenuOpen(false)} className="block bg-stoic-blue text-white px-4 py-3 rounded-md font-bold text-center">
              GET UPDATES
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-12 ${t.colors.hero}`}>
        <div className="mx-auto relative" style={{ width: '85%', maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* Left: Stoic AF Bust Mascot */}
            <div className="relative flex justify-center order-2 lg:order-1 lg:pr-8">
              <div className="relative" style={{
                filter: 'drop-shadow(0 12px 24px rgba(75, 144, 200, 0.15))'
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
              <div className={`inline-block mb-6 px-4 py-2 ${t.colors.badge} rounded-full`}>
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  2,000-Year-Old Cheat Codes
                </span>
              </div>

              <h1 className={`text-5xl md:text-7xl font-black ${t.colors.heading} tracking-tight mb-6 leading-tight`}>
                Stop Being Soft.<br />
                <span className="text-stoic-blue">Get Stoic AF.</span>
              </h1>

              <p className={`text-xl md:text-2xl ${t.colors.bodyText} mb-10 leading-relaxed`}>
                Look, here's the thing—Roman emperors figured this out 2,000 years ago.
                How to stay calm when everything's on fire. How to stop caring about things that don't matter.
                We just translated it so you don't need a philosophy degree.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book"
                  className="bg-stoic-blue hover:bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Get the Book
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="#app"
                  className={`border-2 ${t.colors.buttonBorder} hover:border-stoic-blue ${t.colors.buttonText} ${t.colors.buttonHoverText} px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center gap-2`}
                >
                  <Smartphone size={20} />
                  Try the App
                </a>
              </div>

              <div className={`mt-8 flex flex-wrap gap-6 text-sm ${t.colors.metaText}`}>
                <div className="flex items-center gap-2">
                  <Check className="text-stoic-blue" size={20} />
                  <span>Zero Fluff Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-stoic-blue" size={20} />
                  <span>Actually Works IRL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  <span>Become Unf*ckwithable</span>
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
      <section className={`py-16 ${t.colors.divider} border-y ${t.colors.dividerBorder}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed">
            "You have power over your mind—not outside events. Realize this, and you will find strength."
          </blockquote>
          <p className="mt-4 text-stoic-blue font-bold text-lg">— Marcus Aurelius</p>
        </div>
      </section>

      {/* Featured Blog Articles */}
      <section className={`py-24 px-4 sm:px-6 lg:px-12 ${t.colors.blogSection}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-block mb-4 px-4 py-2 ${t.colors.badge} rounded-full`}>
              <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                Free Game
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black ${t.colors.heading} mb-4`}>
              The Blog That <span className="text-stoic-blue">Hits Different</span>
            </h2>
            <p className={`text-lg ${t.colors.metaText} max-w-2xl mx-auto`}>
              No motivational poster nonsense. Just real talk on rewiring your brain,
              crushing anxiety, and not being a victim of your own emotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'Your Feelings Are Lying to You (Here\'s Proof)',
                excerpt: 'That voice in your head? It\'s been wrong about literally everything. Here\'s how Marcus Aurelius learned to stop trusting it.',
                category: 'Mindset',
                readTime: '8 min',
                date: 'Nov 20, 2025',
                image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80'
              },
              {
                title: 'The "Not My Problem" Framework',
                excerpt: 'Most of your stress comes from things you literally cannot change. Wild concept. Let\'s talk about how to actually internalize that.',
                category: 'Strategy',
                readTime: '6 min',
                date: 'Nov 18, 2025',
                image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
              },
              {
                title: 'Motivation Is a Scam. Try This Instead.',
                excerpt: 'Waiting until you "feel like it" is why you\'re still in the same spot. Here\'s the system that works when your brain doesn\'t want to.',
                category: 'Discipline',
                readTime: '10 min',
                date: 'Nov 15, 2025',
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
              }
            ].map((article, i) => (
              <a
                key={i}
                href="https://blog.stoicaf.co"
                className={`group ${t.colors.card} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border ${t.colors.cardBorder} hover:border-stoic-blue`}
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
                  <div className={`flex items-center gap-4 text-xs ${t.colors.metaText} mb-3`}>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${t.colors.heading} mb-3 group-hover:text-stoic-blue transition-colors`}>
                    {article.title}
                  </h3>
                  <p className={`${t.colors.bodyText} leading-relaxed mb-4`}>
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
      <section id="book" className={`py-24 px-4 sm:px-6 lg:px-12 ${t.colors.bookSection}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Image/Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform">
                <img
                  src="/images/book.png"
                  alt="Stoic AF Book"
                  className="w-full h-[600px] object-cover"
                  style={{ objectPosition: 'center 35%' }}
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
              <div className={`inline-block mb-4 px-4 py-2 ${t.colors.badge} rounded-full`}>
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  The Playbook
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-black ${t.colors.heading} mb-6 leading-tight`}>
                Philosophy That <span className="text-stoic-blue">Actually Slaps</span>
              </h2>

              <p className={`text-lg ${t.colors.bodyText} mb-6 leading-relaxed`}>
                Real talk: most self-help books are trash. Written by people who've never struggled.
                This one's different. It's Stoicism stripped of the academic nonsense and rebuilt
                for people who actually want results. Marcus Aurelius ran an empire on this stuff.
                You can probably handle your inbox.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'The "What Can I Actually Control?" Protocol',
                  'Systems That Work When You Don\'t Feel Like It',
                  'How to Stop Taking Everything Personally',
                  '30-Day Challenge (With Actual Accountability)',
                  'Templates You\'ll Actually Use'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`${t.colors.checkIcon} rounded-full p-1 mt-1`}>
                      <Check className={t.colors.checkIconColor} size={16} />
                    </div>
                    <span className={`${t.colors.bodyText} font-semibold`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stoic-blue hover:bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Grab It Now - $24.99
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className={`border-2 ${t.colors.buttonBorder} hover:border-stoic-blue ${t.colors.buttonText} ${t.colors.buttonHoverText} px-8 py-4 rounded-lg text-lg font-bold transition-all`}>
                  Read Chapter 1 Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The App Section */}
      <section id="app" className={`py-24 px-4 sm:px-6 lg:px-12 ${t.colors.appSection}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* App Description - Left Side */}
            <div className="order-2 lg:order-1">
              <div className={`inline-block mb-4 px-4 py-2 ${t.colors.badge} rounded-full`}>
                <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
                  Your Daily Rep
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-black ${t.colors.heading} mb-6 leading-tight`}>
                Mental Gym <span className="text-stoic-blue">In Your Pocket</span>
              </h2>

              <p className={`text-lg ${t.colors.bodyText} mb-6 leading-relaxed`}>
                Here's the thing nobody tells you: mental toughness is a skill. You train it.
                Marcus Aurelius wrote in his journal every single day. This app makes that easy
                with prompts that actually make you think, not just feel good about yourself.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Morning Primer (2 min to set your mind right)',
                  'Evening Debrief (What went wrong? What\'s on you?)',
                  'The "Worst Case Scenario" Tool (Sounds dark, works great)',
                  'Streak Tracking (Because consistency wins)',
                  'Custom Prompts (Make it yours)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`${t.colors.checkIcon} rounded-full p-1 mt-1`}>
                      <Check className={t.colors.checkIconColor} size={16} />
                    </div>
                    <span className={`${t.colors.bodyText} font-semibold`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stoic-blue hover:bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Smartphone size={20} />
                  Get the App Free
                </button>
                <button className={`border-2 ${t.colors.buttonBorder} hover:border-stoic-blue ${t.colors.buttonText} ${t.colors.buttonHoverText} px-8 py-4 rounded-lg text-lg font-bold transition-all`}>
                  Try It In Browser
                </button>
              </div>

              <p className={`text-sm ${t.colors.metaText} mt-4`}>
                Free tier is legitimately useful. Premium just makes you a machine.
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
                    <h3 className="text-3xl font-black mb-3">Your Daily Mental Reps</h3>
                    <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <div className="text-sm opacity-90">
                        <div className="text-xs uppercase tracking-wider mb-1">AM Check-In</div>
                        <div className="font-semibold">What's actually in your control today?</div>
                      </div>
                      <div className="text-sm opacity-90">
                        <div className="text-xs uppercase tracking-wider mb-1">PM Reality Check</div>
                        <div className="font-semibold">Where'd you mess up? How do you fix it?</div>
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
      <section id="merch" className={`py-24 px-4 sm:px-6 lg:px-12 ${t.colors.merchSection}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-block mb-4 px-4 py-2 ${t.colors.badge} rounded-full`}>
            <span className="text-sm font-bold text-stoic-blue uppercase tracking-wider">
              Drip With Purpose
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-black ${t.colors.heading} mb-6 leading-tight`}>
            Wear Your <span className="text-stoic-blue">Philosophy</span>
          </h2>

          <p className={`text-lg ${t.colors.bodyText} mb-12 max-w-2xl mx-auto`}>
            Not your average merch. These aren't corny motivational quotes—they're conversation starters.
            Premium quality because cheap fabric is for people who don't respect themselves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Amor Fati Tee', price: '$32', desc: '"Love your fate." Goes hard in any setting.', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80' },
              { name: 'Memento Bro Hoodie', price: '$58', desc: 'Remember death. Look fire doing it.', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80' },
              { name: 'Discipline = Freedom Hat', price: '$28', desc: 'The equation that fixes everything.', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80' }
            ].map((item, i) => (
              <div key={i} className={`${t.colors.card} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border ${t.colors.cardBorder}`}>
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
                  <h3 className={`text-xl font-bold ${t.colors.merchCardTitle} mb-2`}>{item.name}</h3>
                  <p className={`${t.colors.merchCardDesc} mb-4`}>{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-stoic-blue">{item.price}</span>
                    <button className={`${t.colors.merchButton} ${t.colors.merchButtonHover} text-white px-6 py-2 rounded-lg font-bold transition-colors`}>
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
      <section className={`py-24 px-4 sm:px-6 lg:px-12 ${t.colors.testimonialsSection}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black ${t.colors.heading} mb-4`}>
              Don't Take Our Word For It
            </h2>
            <p className={`text-lg ${t.colors.metaText}`}>Real people who stopped making excuses and started making changes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jake M.',
                role: 'Founder',
                text: 'I was a mess before this. Overthinking everything. Now when stuff hits the fan, I actually have a framework. The journaling system is lowkey life-changing.'
              },
              {
                name: 'Sarah K.',
                role: 'PM @ Tech Co',
                text: 'Finally, philosophy that doesn\'t feel like homework. The morning ritual takes 5 minutes and my brain is just... quieter. Less reactive. It\'s wild.'
              },
              {
                name: 'Marcus T.',
                role: 'Software Dev',
                text: 'Skeptical at first—another self-help thing, great. But the app got me hooked. 90-day streak. I\'m not the same person I was three months ago.'
              }
            ].map((testimonial, i) => (
              <div key={i} className={`${t.colors.testimonialCard} p-8 rounded-xl border-l-4 border-stoic-blue`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className={`${t.colors.testimonialQuote} mb-6 italic leading-relaxed`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div className={`font-bold ${t.colors.testimonialName}`}>{testimonial.name}</div>
                  <div className={`text-sm ${t.colors.testimonialRole}`}>{testimonial.role}</div>
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
            Free Weekly Brain Gains
          </h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Every Sunday, we send one email. No fluff, no affiliate garbage—just one idea
            that'll make you think differently. 10K+ people are already in. You coming or what?
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
                {isSubmitting ? 'On it...' : 'I\'m In'}
              </button>
            </div>
            <p className="text-sm text-sky-100 mt-4">
              Zero spam. One email per week. Unsubscribe whenever. No hard feelings.
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
                2,000-year-old philosophy, zero academic nonsense. We took what the Roman emperors
                knew about crushing it mentally and made it actually usable. No guru vibes here.
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
            <p>&copy; {new Date().getFullYear()} Stoic AF. All rights reserved. Stay hard. Stay humble.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
