import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";


const links = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Residential', path: '/services' },
    { label: 'Commercial', path: '/services' },
    { label: 'Deep Cleaning', path: '/services' },
    { label: 'Move-In/Out', path: '/services' },
    { label: 'Sanitization', path: '/services' },
  ],
}

export default function Footer({ onOpenPolicy, onOpenCookies }) {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden grain">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -mt-16 mb-20 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
              alt="" className="w-full h-full object-cover" loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-navy-900/60" />
          </div>
          <div className="relative px-8 sm:px-14 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready for a Spotless Space?
              </h3>
              <p className="text-white/50 font-body max-w-md text-[15px]">
                Get your free estimate today. Our experts are standing by.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-heading font-bold text-sm hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 flex items-center gap-2 group"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <svg viewBox="0 0 32 32" className="w-7 h-7">
                <defs><linearGradient id="fGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F0D78A"/><stop offset="100%" stopColor="#B8943E"/></linearGradient></defs>
                <circle cx="16" cy="18" r="6" fill="url(#fGold)"/>
                {[0,45,90,135,180,225,270,315].map((a,i)=>(
                  <line key={i} x1="16" y1="9" x2="16" y2="6" stroke="url(#fGold)" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${a} 16 18)`}/>
                ))}
              </svg>
              <span className="font-heading text-lg font-bold">
                Brite<span className="text-gold-400">Shine</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs">
              Premium cleaning services delivering spotless perfection since 2015.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Instagram, FaXTwitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/30 hover:text-gold-400 hover:bg-gold-500/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-[11px] text-white/40 uppercase tracking-[0.2em] mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map(l => (
                  <li key={l.label}>
                    <Link to={l.path} className="text-white/30 text-sm hover:text-gold-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-[11px] text-white/40 uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-white/30">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5"/><span>123 Shine Ave, Business District, Harare</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold-500 shrink-0"/><a href="tel:+263771234567" className="hover:text-gold-400 transition-colors">+263 77 123 4567</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold-500 shrink-0"/><a href="mailto:info@briteshine.co.zw" className="hover:text-gold-400 transition-colors">info@briteshine.co.zw</a></li>
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold-500 shrink-0"/><span>Mon–Sat: 7AM–6PM</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Brite Shine Cleaning Services. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={onOpenPolicy} className="text-white/20 text-xs hover:text-gold-400 transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={onOpenCookies} className="text-white/20 text-xs hover:text-gold-400 transition-colors cursor-pointer">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
