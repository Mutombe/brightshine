import React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { PolicyModal, CookieModal, CookieBanner } from './components/Modals'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-gold-200 border-t-gold-500 rounded-full"
        />
        <span className="text-xs font-heading text-navy-900/30">Loading…</span>
      </div>
    </div>
  )
}

function PageTransition({ children }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const META = {
  '/': { title: 'Brite Shine Cleaning Services — Spotless Perfection', desc: 'Premium residential & commercial cleaning. Trusted by 800+ happy clients.' },
  '/about': { title: 'About Us — Brite Shine Cleaning Services', desc: 'Our story, values, and the passionate team behind every spotless space.' },
  '/services': { title: 'Our Services — Brite Shine Cleaning Services', desc: 'Residential, commercial, deep cleaning, and more.' },
  '/gallery': { title: 'Gallery — Brite Shine Cleaning Services', desc: 'Before & after transformations showcasing our work.' },
  '/careers': { title: 'Careers — Brite Shine Cleaning Services', desc: 'Join our team and build a career with purpose.' },
  '/contact': { title: 'Contact Us — Brite Shine Cleaning Services', desc: 'Get a free quote. Reach out via phone, email, or our contact form.' },
}

function SEOHandler() {
  const { pathname } = useLocation()
  useEffect(() => {
    const m = META[pathname] || META['/']
    document.title = m.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.desc)
  }, [pathname])
  return null
}

export default function App() {
  const [policyOpen, setPolicyOpen] = useState(false)
  const [cookieModalOpen, setCookieModalOpen] = useState(false)
  const [cookieAccepted, setCookieAccepted] = useState(() => {
    try { return localStorage.getItem('bs-cookies') === '1' } catch { return false }
  })

  const acceptCookies = () => {
    setCookieAccepted(true)
    try { localStorage.setItem('bs-cookies', '1') } catch {}
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOHandler />
      <Toaster position="top-right" />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </Suspense>
        </main>
        <Footer onOpenPolicy={() => setPolicyOpen(true)} onOpenCookies={() => setCookieModalOpen(true)} />
      </div>

      <PolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
      <CookieModal open={cookieModalOpen} onClose={() => setCookieModalOpen(false)} />
      <AnimatePresence>
        {!cookieAccepted && <CookieBanner onAccept={acceptCookies} onOpenPolicy={() => setCookieModalOpen(true)} />}
      </AnimatePresence>
    </BrowserRouter>
  )
}
