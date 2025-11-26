import React from 'react';
import { BookOpen, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">About Stoic AF</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Ancient philosophy for modern life. No fluff. No BS. Just practical wisdom.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              We're on a mission to make Stoic philosophy accessible, practical, and actually useful for the modern world.
              No academic jargon. No pretentious gatekeeping. Just real tools for real people trying to build better lives.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Marcus Aurelius, Epictetus, and Seneca faced the same human problems we face today: anxiety, ego, loss, discipline.
              Their solutions work. We're just translating them for the 21st century.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-stoic-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-stoic-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Practical Over Theory</h3>
              <p className="text-slate-600">
                We focus on what you can actually use today, not abstract philosophical debates.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-stoic-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-stoic-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Honest & Direct</h3>
              <p className="text-slate-600">
                No sugarcoating. No false promises. Just straight talk about what works and what doesn't.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-stoic-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-stoic-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community Driven</h3>
              <p className="text-slate-600">
                Built with and for people who are actually doing the work, not just reading about it.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why We Started This</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Most Stoic content is either too academic (boring philosophy lectures) or too superficial (Instagram quote spam).
              We wanted something in between: deep enough to actually change your life, accessible enough to use every day.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              So we built Stoic AF—a book, app, and community for people who want to build real discipline, conquer anxiety,
              and live with purpose. Not through motivation hacks or positive thinking, but through ancient principles that
              have stood the test of time.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              If you're tired of self-help BS and ready for something that actually works, you're in the right place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
