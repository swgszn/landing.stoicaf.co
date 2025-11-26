import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Twitter, Instagram, Mail } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                STOIC AF
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://blog.stoicaf.co" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                BLOG
              </a>
              <a href="/#book" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                THE BOOK
              </a>
              <a href="/#app" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                THE APP
              </a>
              <a href="/#merch" className="text-sm font-semibold text-slate-600 hover:text-stoic-blue transition-colors">
                MERCH
              </a>
              <a href="/#newsletter" className="bg-stoic-blue hover:bg-sky-600 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm hover:shadow-md">
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
            <a href="/#book" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              THE BOOK
            </a>
            <a href="/#app" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              THE APP
            </a>
            <a href="/#merch" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-md">
              MERCH
            </a>
            <a href="/#newsletter" onClick={() => setIsMenuOpen(false)} className="block bg-stoic-blue text-white px-4 py-3 rounded-md font-bold text-center">
              GET UPDATES
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

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
                <li><a href="/#book" className="hover:text-stoic-blue transition-colors">The Book</a></li>
                <li><a href="/#app" className="hover:text-stoic-blue transition-colors">Journal App</a></li>
                <li><a href="/#merch" className="hover:text-stoic-blue transition-colors">Merch Store</a></li>
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
