import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Cookie } from 'lucide-react'

function ModalShell({ open, onClose, icon: Icon, title, children, footer }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-navy-900/40 backdrop-blur-md z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-7 py-5 border-b border-navy-900/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gold-100/80 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <h2 className="font-heading text-lg font-bold text-navy-900">{title}</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-navy-900/5 transition-colors">
                <X className="w-5 h-5 text-navy-900/40" />
              </button>
            </div>
            <div className="px-7 py-6 overflow-y-auto max-h-[55vh] text-navy-900/60 text-sm leading-relaxed space-y-4">
              {children}
            </div>
            {footer && <div className="px-7 py-5 border-t border-navy-900/5">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function PolicyModal({ open, onClose }) {
  return (
    <ModalShell open={open} onClose={onClose} icon={Shield} title="Privacy Policy"
      footer={<button onClick={onClose} className="w-full py-3 bg-navy-900 text-white rounded-2xl font-heading font-semibold text-sm hover:bg-gold-600 transition-colors">I Understand</button>}
    >
      <p className="font-heading font-semibold text-navy-900">Last Updated: February 2026</p>
      <p>Brite Shine Cleaning Services is committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">Information We Collect</h3>
      <p>We collect information you provide directly — name, email, phone, service address when you request a quote or book. We also collect browsing data through cookies.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">How We Use It</h3>
      <p>To provide services, communicate about bookings, process payments, and improve our offerings. We never sell your data to third parties.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">Your Rights</h3>
      <p>You can access, correct, or delete your data anytime. Contact privacy@briteshine.co.zw for inquiries.</p>
    </ModalShell>
  )
}

export function CookieModal({ open, onClose }) {
  return (
    <ModalShell open={open} onClose={onClose} icon={Cookie} title="Cookie Policy"
      footer={
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 border border-navy-900/10 rounded-2xl font-heading font-semibold text-sm text-navy-900/60 hover:bg-ivory transition-colors">Essential Only</button>
          <button onClick={onClose} className="flex-1 py-3 bg-navy-900 text-white rounded-2xl font-heading font-semibold text-sm hover:bg-gold-600 transition-colors">Accept All</button>
        </div>
      }
    >
      <p>We use cookies to enhance your browsing experience.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">Essential Cookies</h3>
      <p>Required for site functionality — session cookies, security, preferences. Cannot be disabled.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">Analytics Cookies</h3>
      <p>Help us understand visitor behavior to improve our services. All data is anonymized.</p>
      <h3 className="font-heading font-semibold text-navy-900 pt-2">Marketing Cookies</h3>
      <p>Deliver relevant ads and track campaign effectiveness. You can opt out anytime.</p>
    </ModalShell>
  )
}

export function CookieBanner({ onAccept, onOpenPolicy }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] glass-dark rounded-2xl p-5 text-white shadow-2xl"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-white/70 leading-relaxed mb-3">
            We use cookies to improve your experience.{' '}
            <button onClick={onOpenPolicy} className="text-gold-400 underline underline-offset-2">Learn more</button>.
          </p>
          <div className="flex gap-2">
            <button onClick={onAccept} className="px-4 py-2 bg-gold-500 text-navy-900 rounded-xl text-sm font-heading font-bold hover:bg-gold-400 transition-colors">Accept</button>
            <button onClick={onAccept} className="px-4 py-2 border border-white/15 rounded-xl text-sm font-heading text-white/50 hover:text-white hover:border-white/30 transition-colors">Essential Only</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
