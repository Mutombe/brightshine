import React from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  return (<><ContactHero /><ContactContent /><MapSection /></>)
}

function ContactHero() {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden mesh-light">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-gold-200/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-gold-300/10 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <MessageCircle className="w-4 h-4 text-gold-500" />
            <span className="text-[13px] font-heading font-semibold text-gold-700">Get In Touch</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-navy-900">Let's Make Your</span><br />
            <span className="text-gold-shimmer">Space Shine</span>
          </h1>
          <p className="text-navy-900/50 text-lg max-w-xl mx-auto">
            Ready for a sparkling clean? Get in touch for a free, no-obligation quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    toast.success('Message sent! We\'ll get back to you within 2 hours.', {
      style: { background: '#0A0E1A', color: '#fff', border: '1px solid rgba(212,184,106,0.15)' }
    })
  }

  const info = [
    { icon: Phone, label: 'Call Us', value: '+263 77 123 4567', href: 'tel:+263771234567', sub: 'Mon-Sat, 7AM-6PM' },
    { icon: Mail, label: 'Email Us', value: 'info@briteshine.co.zw', href: 'mailto:info@briteshine.co.zw', sub: 'We reply within 2 hours' },
    { icon: MapPin, label: 'Visit Us', value: '123 Shine Ave, Business District', href: '#map', sub: 'Harare, Zimbabwe' },
    { icon: Clock, label: 'Hours', value: 'Mon–Sat: 7:00 AM – 6:00 PM', href: null, sub: 'Sundays by appointment' },
  ]

  const inputCls = "w-full px-4 py-3.5 rounded-2xl border border-navy-900/[0.06] bg-white text-navy-900 placeholder:text-navy-900/25 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200/40 transition-all font-body text-[15px]"

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-extrabold text-navy-900 mb-2">Request a Free Quote</h2>
            <p className="text-navy-900/40 text-[15px] mb-8">Fill out the form and we'll respond promptly.</p>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-gold-50 border border-gold-200/50 rounded-3xl p-12 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-extrabold text-navy-900 mb-2">Thank You!</h3>
                <p className="text-navy-900/50">Your message has been sent. We'll reach out within 2 hours during business hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy-900 mb-2">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy-900 mb-2">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} placeholder="you@email.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy-900 mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} placeholder="+263 77 000 0000" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy-900 mb-2">Service</label>
                    <select name="service" value={form.service} onChange={e => setForm(p => ({...p, service: e.target.value}))} className={`${inputCls} appearance-none`}>
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="movein">Move-In/Out</option>
                      <option value="sanitization">Sanitization</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-navy-900 mb-2">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} placeholder="Tell us about your space..." className={`${inputCls} resize-none`} />
                </div>
                <button type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-2xl font-heading font-bold text-[15px] hover:bg-gold-600 transition-all shadow-lg shadow-navy-900/10"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
            {info.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-navy-900/[0.04] hover:border-gold-200/50 hover:bg-gold-50/30 transition-all card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-100/80 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold text-navy-900/30 uppercase tracking-wider mb-1">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-heading font-bold text-navy-900 text-sm hover:text-gold-600 transition-colors block">{c.value}</a>
                    ) : (
                      <p className="font-heading font-bold text-navy-900 text-sm">{c.value}</p>
                    )}
                    <p className="text-[11px] text-navy-900/30 mt-0.5">{c.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.a href="https://wa.me/263771234567" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 w-full p-5 rounded-2xl bg-emerald-600 text-white font-heading font-bold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="relative h-[350px] bg-ivory" id="map">
      {/* Vision: Aerial photo of Harare city with warm golden overlay */}
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80" alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold-500/30">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-heading text-xl font-extrabold text-navy-900 mb-1">Brite Shine HQ</h3>
          <p className="text-navy-900/50 text-sm">123 Shine Avenue, Business District, Harare</p>
        </motion.div>
      </div>
    </section>
  )
}
