import React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Phone, ChevronRight, ArrowUpRight } from 'lucide-react'
import { useScrollProgress } from '../hooks/useAnimations'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

const SEARCH_INDEX = [
  { keywords: ['home', 'hero', 'welcome', 'brite shine', 'cleaning'], path: '/', section: null, label: 'Home' },
  { keywords: ['about', 'story', 'who we are', 'mission', 'values', 'team'], path: '/about', section: null, label: 'About Us' },
  { keywords: ['services', 'residential', 'commercial', 'deep clean', 'move in', 'move out', 'carpet', 'window', 'office', 'sanitization'], path: '/services', section: null, label: 'Our Services' },
  { keywords: ['pricing', 'plans', 'basic', 'standard', 'premium', 'price', 'cost', 'quote'], path: '/services', section: 'pricing', label: 'Pricing Plans' },
  { keywords: ['gallery', 'portfolio', 'before', 'after', 'photos', 'work'], path: '/gallery', section: null, label: 'Gallery' },
  { keywords: ['careers', 'jobs', 'hiring', 'apply', 'employment'], path: '/careers', section: null, label: 'Careers' },
  { keywords: ['contact', 'call', 'email', 'phone', 'address', 'message', 'quote'], path: '/contact', section: null, label: 'Contact Us' },
  { keywords: ['testimonials', 'reviews', 'clients'], path: '/', section: 'testimonials', label: 'Testimonials' },
  { keywords: ['faq', 'questions', 'help'], path: '/contact', section: 'faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setSearchOpen(false) }, [location.pathname])
  useEffect(() => { if (searchOpen && inputRef.current) inputRef.current.focus() }, [searchOpen])

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(p => !p) }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleSearch = useCallback((q) => {
    setQuery(q)
    if (!q.trim()) { setResults([]); return }
    const lower = q.toLowerCase()
    setResults(SEARCH_INDEX.filter(item =>
      item.keywords.some(kw => kw.includes(lower)) || item.label.toLowerCase().includes(lower)
    ))
  }, [])

  const goTo = (r) => {
    setSearchOpen(false); setQuery('')
    navigate(r.path)
    if (r.section) setTimeout(() => {
      document.getElementById(r.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 400)
  }

  const isActive = (p) => location.pathname === p

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'glass-light shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group relative">
              {/* Sun burst SVG logo mark */}
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="navGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F0D78A" />
                      <stop offset="50%" stopColor="#C8A94E" />
                      <stop offset="100%" stopColor="#B8943E" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="22" r="8" fill="url(#navGold)" />
                  {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
                    <line
                      key={i}
                      x1="20" y1={22 - 11}
                      x2="20" y2={22 - 14}
                      stroke="url(#navGold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      transform={`rotate(${angle} 20 22)`}
                    />
                  ))}
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[19px] font-bold tracking-tight">
                  <span className="text-navy-900">Brite</span>
                  <span className="text-gold-gradient">Shine</span>
                </span>
                <span className="text-[9px] font-heading font-medium uppercase tracking-[0.3em] text-navy-900/40 mt-0.5">
                  Cleaning Services
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 group"
                >
                  <span className={`text-[13px] font-heading font-semibold tracking-wide transition-colors ${
                    isActive(link.path) ? 'text-gold-600' : 'text-navy-900/60 group-hover:text-navy-900'
                  }`}>
                    {link.label}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl hover:bg-navy-900/5 transition-colors text-navy-900/50 hover:text-navy-900"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>

              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 bg-navy-900 text-white pl-5 pr-4 py-2.5 rounded-full text-[13px] font-heading font-semibold hover:bg-gold-600 transition-all duration-400 shadow-lg shadow-navy-900/10 group"
              >
                Get a Quote
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-navy-900/5 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-900/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-cream z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-navy-900/5">
                  <span className="font-heading text-lg font-bold">
                    <span className="text-navy-900">Brite</span><span className="text-gold-500">Shine</span>
                  </span>
                  <button onClick={() => setMobileOpen(false)} className="p-2"><X className="w-5 h-5" /></button>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl text-[15px] font-heading font-semibold transition-all ${
                          isActive(link.path)
                            ? 'bg-gold-100/60 text-gold-700'
                            : 'text-navy-900/60 hover:bg-ivory'
                        }`}
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-30" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="p-6 border-t border-navy-900/5">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-navy-900 text-white py-4 rounded-2xl font-heading font-semibold hover:bg-gold-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/30 backdrop-blur-xl z-[60] flex items-start justify-center pt-[18vh]"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg mx-4 glass-light rounded-2xl shadow-2xl shadow-navy-900/10 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <Search className="w-5 h-5 text-gold-500 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder="Search anything…"
                  className="flex-1 bg-transparent outline-none text-navy-900 placeholder:text-navy-900/25 font-body text-[15px]"
                />
                <kbd className="hidden sm:inline text-[11px] font-mono text-navy-900/25 bg-navy-900/5 px-2 py-0.5 rounded-md">ESC</kbd>
              </div>
              {results.length > 0 && (
                <div className="border-t border-navy-900/5 p-2 max-h-64 overflow-y-auto">
                  {results.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(r)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gold-50 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-sm font-heading font-semibold text-navy-900">{r.label}</p>
                        <p className="text-xs text-navy-900/30">{r.path}{r.section ? `#${r.section}` : ''}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
              {query && !results.length && (
                <div className="border-t border-navy-900/5 px-5 py-8 text-center text-navy-900/30 text-sm">No results found</div>
              )}
              {!query && (
                <div className="border-t border-navy-900/5 px-5 py-6 text-center text-navy-900/20 text-sm">Start typing to search…</div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
