import React, { useState, useEffect } from 'react';
import { Globe, Heart, Users, Sparkles, Sun, Moon, Music, Book, Video, Calendar, MapPin, MessageCircle, Share2, Award, TrendingUp, Smile, Hand, Leaf, Home, Shield, Star, ChevronRight, Play, Download, Bell } from 'lucide-react';

export default function PeaceWorld() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [peaceCounter, setPeaceCounter] = useState(1000000);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeaceCounter(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 6000);
    return () => quoteInterval;
  }, []);

  const bgClass = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
    : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50';

  const cardBg = isDark ? 'bg-gray-800/80' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-gray-800';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';

  const quotes = [
    { text: "Peace is not the absence of conflict, but the presence of justice", author: "Martin Luther King Jr." },
    { text: "If we have no peace, it is because we have forgotten that we belong to each other", author: "Mother Teresa" },
    { text: "Peace begins with a smile", author: "Mother Teresa" },
    { text: "The day the power of love overrules the love of power, the world will know peace", author: "Mahatma Gandhi" }
  ];

  const worldRegions = [
    { name: 'Asia Pacific', members: '4.2M', countries: 48, color: 'from-orange-500 to-red-500', icon: '🌏' },
    { name: 'Europe', members: '2.8M', countries: 44, color: 'from-blue-500 to-cyan-500', icon: '🇪🇺' },
    { name: 'Africa', members: '1.9M', countries: 54, color: 'from-yellow-500 to-orange-500', icon: '🌍' },
    { name: 'Americas', members: '3.1M', countries: 35, color: 'from-green-500 to-teal-500', icon: '🌎' },
    { name: 'Middle East', members: '950K', countries: 16, color: 'from-purple-500 to-pink-500', icon: '🕌' },
    { name: 'Oceania', members: '420K', countries: 14, color: 'from-indigo-500 to-blue-500', icon: '🏝️' }
  ];

  const peaceActivities = [
    { icon: Music, title: 'Peace Concerts', description: 'Global music events bringing cultures together', count: '2,500+' },
    { icon: Book, title: 'Education Programs', description: 'Teaching peace in schools worldwide', count: '15,000+' },
    { icon: Video, title: 'Virtual Gatherings', description: 'Online events connecting millions', count: '50,000+' },
    { icon: Hand, title: 'Volunteer Projects', description: 'Community service initiatives', count: '100,000+' },
    { icon: Leaf, title: 'Green Peace', description: 'Environmental sustainability efforts', count: '8,000+' },
    { icon: Home, title: 'Peace Centers', description: 'Physical hubs in cities globally', count: '3,200+' }
  ];

  const upcomingEvents = [
    { title: 'World Peace Day Celebration', date: 'Sep 21, 2026', location: 'Global - All Cities', attendees: '10M+', type: 'hybrid' },
    { title: 'International Meditation Marathon', date: 'Jan 1, 2026', location: 'Virtual', attendees: '5M+', type: 'virtual' },
    { title: 'Youth Peace Summit', date: 'Mar 15, 2026', location: 'New York, USA', attendees: '50,000', type: 'in-person' },
    { title: 'Global Unity Festival', date: 'Jun 21, 2026', location: '200+ Cities', attendees: '20M+', type: 'hybrid' }
  ];

  const testimonials = [
    { name: 'Amara K.', country: 'Kenya 🇰🇪', text: 'Peace World helped me start a youth program that transformed 500 lives in my community.' },
    { name: 'Carlos M.', country: 'Brazil 🇧🇷', text: 'Through this platform, I connected with peace builders globally and learned so much.' },
    { name: 'Yuki T.', country: 'Japan 🇯🇵', text: 'The meditation sessions and resources changed my life and my approach to conflicts.' },
    { name: 'Aisha R.', country: 'UAE 🇦🇪', text: 'Found a community that shares my values. Together we are making real change.' }
  ];

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-500`}>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Sparkles className="animate-pulse" size={18} />
            <span className="font-semibold">{peaceCounter.toLocaleString()} Acts of Peace Today</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-200 flex items-center gap-1">
              <Bell size={16} />
              <span>Get Updates</span>
            </button>
            <button onClick={() => setIsDark(!isDark)} className="p-1.5 bg-white/20 rounded-full">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${cardBg} shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95`}>
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Globe className="text-blue-500 animate-spin" style={{animationDuration: '30s'}} size={44} />
                <Heart className="text-pink-500 absolute top-0 left-0 animate-pulse" size={22} />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textPrimary}`}>Peace World</h1>
                <p className="text-xs text-purple-600">One Planet, One Family, One Future</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className={`${textPrimary} hover:text-purple-600 font-medium`}>Home</a>
              <a href="#about" className={`${textPrimary} hover:text-purple-600 font-medium`}>About</a>
              <a href="#regions" className={`${textPrimary} hover:text-purple-600 font-medium`}>Regions</a>
              <a href="#events" className={`${textPrimary} hover:text-purple-600 font-medium`}>Events</a>
              <a href="#join" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl transition">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-5 py-2 rounded-full mb-6">
            <Globe className="text-blue-600" size={20} />
            <span className={`font-semibold ${textPrimary}`}>Active in 195 Countries</span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${textPrimary}`}>
            Welcome to
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Peace World
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl ${textSecondary} mb-12 max-w-4xl mx-auto leading-relaxed`}>
            A global community dedicated to creating lasting peace through compassion, understanding, and unified action. Together, we're building a world where harmony transcends all boundaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
              <Heart size={24} />
              Start Your Journey
            </button>
            <button className={`${cardBg} ${textPrimary} px-10 py-4 rounded-full text-lg font-bold border-2 border-purple-400 hover:border-purple-600 transition flex items-center justify-center gap-2`}>
              <Play size={24} />
              Watch Introduction
            </button>
          </div>

          {/* Animated Quote */}
          <div className={`${cardBg} max-w-4xl mx-auto p-8 rounded-3xl shadow-2xl`}>
            <Sparkles className="text-yellow-500 mx-auto mb-4" size={32} />
            <blockquote className={`text-2xl md:text-3xl ${textPrimary} italic font-light mb-4 transition-all duration-1000`}>
              "{quotes[currentQuote].text}"
            </blockquote>
            <p className="text-purple-600 font-semibold">— {quotes[currentQuote].author}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <Users className="mx-auto mb-3" size={48} />
              <p className="text-4xl font-bold mb-2">13M+</p>
              <p className="text-purple-100">Global Members</p>
            </div>
            <div>
              <Globe className="mx-auto mb-3" size={48} />
              <p className="text-4xl font-bold mb-2">195</p>
              <p className="text-purple-100">Countries</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-3" size={48} />
              <p className="text-4xl font-bold mb-2">3,200+</p>
              <p className="text-purple-100">Peace Centers</p>
            </div>
            <div>
              <Award className="mx-auto mb-3" size={48} />
              <p className="text-4xl font-bold mb-2">180K+</p>
              <p className="text-purple-100">Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textPrimary}`}>
            Our Vision for Peace
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-16 max-w-3xl mx-auto`}>
            Creating a world where every person, regardless of background, can live in harmony and dignity
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${cardBg} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-blue-600 dark:text-blue-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>Universal Peace</h3>
              <p className={textSecondary}>
                We believe peace is a fundamental human right. Every person deserves to live free from violence, fear, and oppression.
              </p>
            </div>

            <div className={`${cardBg} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-600 dark:text-purple-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>Unity in Diversity</h3>
              <p className={textSecondary}>
                Celebrating our differences while recognizing our shared humanity. Together we are stronger, more creative, and more resilient.
              </p>
            </div>

            <div className={`${cardBg} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
              <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-green-600 dark:text-green-300" size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>Sustainable Progress</h3>
              <p className={textSecondary}>
                Building systems and communities that ensure peace for current and future generations through education and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* World Regions */}
      <section id="regions" className={`py-20 px-4 ${isDark ? 'bg-gray-800/30' : 'bg-white/60'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textPrimary}`}>
            Peace Around the World
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12`}>
            Our global network spans every continent and culture
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {worldRegions.map((region, idx) => (
              <div key={idx} className={`${cardBg} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:scale-105`}>
                <div className="text-6xl mb-4 text-center">{region.icon}</div>
                <h3 className={`text-2xl font-bold text-center mb-4 ${textPrimary}`}>{region.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={textSecondary}>Members</span>
                    <span className="font-bold text-purple-600">{region.members}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={textSecondary}>Countries</span>
                    <span className="font-bold text-blue-600">{region.countries}</span>
                  </div>
                </div>
                <div className={`h-3 bg-gradient-to-r ${region.color} rounded-full`}></div>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition">
                  Explore Region
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peace Activities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textPrimary}`}>
            How We Create Peace
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12`}>
            Multiple pathways to building a more peaceful world
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peaceActivities.map((activity, idx) => (
              <div key={idx} className={`${cardBg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition`}>
                <activity.icon className="text-purple-600 mb-4" size={40} />
                <h3 className={`text-xl font-bold mb-2 ${textPrimary}`}>{activity.title}</h3>
                <p className={`${textSecondary} mb-4 text-sm`}>{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">{activity.count}</span>
                  <ChevronRight className="text-gray-400" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={`py-20 px-4 ${isDark ? 'bg-gray-800/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textPrimary}`}>
            Upcoming Global Events
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12`}>
            Join millions in celebrating and building peace
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className={`${cardBg} rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition`}>
                <div className={`bg-gradient-to-r ${
                  event.type === 'virtual' ? 'from-blue-500 to-cyan-500' :
                  event.type === 'hybrid' ? 'from-purple-500 to-pink-500' :
                  'from-green-500 to-teal-500'
                } p-6 text-white`}>
                  <Calendar className="mb-2" size={32} />
                  <p className="text-sm font-semibold mb-1 uppercase">{event.type}</p>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-purple-600" />
                      <span className={textSecondary}>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-purple-600" />
                      <span className={textSecondary}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={18} className="text-purple-600" />
                      <span className={textSecondary}>{event.attendees} Expected</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textPrimary}`}>
            Voices from Peace World
          </h2>
          <p className={`text-center ${textSecondary} text-lg mb-12`}>
            Real stories from our global community
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`${cardBg} rounded-3xl p-8 shadow-xl`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${textPrimary}`}>{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <p className={`${textSecondary} italic text-lg leading-relaxed`}>
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="text-white mx-auto mb-6 animate-pulse" size={64} />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Peace World Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Be part of the largest global peace movement. Connect with millions who share your vision of a harmonious world.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white outline-none transition"
              />
              <button className="w-full bg-white text-purple-600 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
                <Heart size={24} />
                Join the Peace Movement
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">Free</p>
                <p className="text-sm text-blue-100">Forever</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">Global</p>
                <p className="text-sm text-blue-100">Network</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-sm text-blue-100">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={40} />
                <div>
                  <h3 className="text-2xl font-bold">Peace World</h3>
                  <p className="text-gray-400 text-sm">One Planet, One Family</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building a global movement for lasting peace through understanding, compassion, and unified action across all nations and cultures.
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <MessageCircle size={20} />
                </button>
                <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <Share2 size={20} />
                </button>
                <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                  <Heart size={20} />
                </button>
                <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <Download size={20} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#regions" className="hover:text-white transition">Global Regions</a></li>
                <li><a href="#events" className="hover:text-white transition">Events</a></li>
                <li><a href="#" className="hover:text-white transition">Resources</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#join" className="hover:text-white transition">Become a Member</a></li>
                <li><a href="#" className="hover:text-white transition">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition">Donate</a></li>
                <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Peace World. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with 💜 for a peaceful planet
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}