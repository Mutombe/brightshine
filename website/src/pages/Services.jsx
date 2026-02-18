import React from 'react';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Building2, SprayCan, Truck, Wind, Droplets, Check, ArrowRight, Star, ChevronDown, ArrowUpRight } from 'lucide-react'

export default function Services() {
  return (<><ServicesHero /><ServicesList /><PricingSection /><FAQSection /></>)
}

function ServicesHero() {
  return (
    <section className="relative min-h-[65vh] flex items-end overflow-hidden">
      {/* Vision: Flat-lay of premium cleaning supplies on marble, artistically composed */}
      <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-cream/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 to-cream/30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-20 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <SprayCan className="w-4 h-4 text-gold-500" />
            <span className="text-[13px] font-heading font-semibold text-gold-700">Our Services</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-navy-900">Cleaning Solutions</span><br />
            <span className="text-gold-shimmer">For Every Need</span>
          </h1>
          <p className="text-navy-900/50 text-lg leading-relaxed max-w-xl">
            From routine maintenance to deep sanitization, explore our comprehensive professional cleaning services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesList() {
  const services = [
    { icon: HomeIcon, title: 'Residential Cleaning', tag: 'Your home, our priority',
      desc: 'Experience the joy of a pristine living space. We cover every room, surface, and corner with meticulous attention.',
      features: ['Kitchen & bathroom deep clean', 'Dusting all surfaces & fixtures', 'Vacuuming & mopping', 'Window sill & baseboard', 'Bed making & linen change', 'Trash removal'],
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80' },
    { icon: Building2, title: 'Commercial Cleaning', tag: 'Impress at first glance',
      desc: 'A clean workspace boosts productivity. Our commercial services are tailored to offices, retail, and corporate spaces.',
      features: ['Workspace sanitization', 'Restroom deep cleaning', 'Break room cleaning', 'Floor care & carpet', 'Window & glass', 'Custom schedules'],
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
    { icon: SprayCan, title: 'Deep Cleaning', tag: 'Beyond surface level',
      desc: 'Intensive deep cleaning tackles hidden grime — behind appliances, inside cabinets, under furniture.',
      features: ['Inside oven & fridge', 'Behind appliances', 'Light fixtures', 'Cabinet interiors', 'Grout & tile scrubbing', 'Air vent dusting'],
      img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=700&q=80' },
    { icon: Truck, title: 'Move-In/Out Cleaning', tag: 'Start fresh, leave clean',
      desc: 'Settling in or handing over keys, our move cleaning ensures every surface is immaculate.',
      features: ['Full property deep clean', 'Appliance interiors', 'Closet & storage', 'Wall spot cleaning', 'Fixture polishing', 'Final walkthrough'],
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=80' },
    { icon: Droplets, title: 'Sanitization Services', tag: 'Health-first cleaning',
      desc: 'Hospital-grade sanitization for homes, offices, and commercial spaces using EPA-approved disinfectants.',
      features: ['EPA-approved products', 'High-touch surface focus', 'Electrostatic spraying', 'Air quality improvement', 'Allergen reduction', 'Certification provided'],
      img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=700&q=80' },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="space-y-28">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className="relative" style={{ direction: 'ltr' }}>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-navy-900/5">
                  <img src={s.img} alt={s.title} className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-gold-500 to-gold-600 text-white px-5 py-2.5 rounded-xl shadow-lg font-heading font-bold text-sm hidden sm:block">
                  {s.tag}
                </div>
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="w-12 h-12 rounded-2xl bg-gold-100/80 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="font-heading text-3xl font-extrabold text-navy-900 mb-3">{s.title}</h2>
                <p className="text-navy-900/50 text-[15px] leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-navy-900/60">
                      <Check className="w-4 h-4 text-gold-500 shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full text-sm font-heading font-bold hover:bg-gold-600 transition-colors">
                  Book This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    { name: 'Basic', price: '$30', period: '/session', desc: 'Regular upkeep for small spaces.',
      features: ['Bathroom cleaning', 'Kitchen surfaces', 'Vacuuming', 'Mopping', 'Dusting'], popular: false },
    { name: 'Standard', price: '$70', period: '/session', desc: 'Our most popular thorough clean.',
      features: ['Everything in Basic', 'Inside fridge & oven', 'Inside cupboards', 'Window cleaning', 'Laundry folding', 'Bed making'], popular: true },
    { name: 'Premium', price: '$120', period: '/session', desc: 'The ultimate — no surface untouched.',
      features: ['Everything in Standard', 'Closet interiors', 'Storage organizing', 'High-reach surfaces', 'Appliance deep clean', 'Post-clean inspection'], popular: false },
  ]

  return (
    <section className="py-28 mesh-light" id="pricing">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[11px] font-heading font-bold text-gold-600 uppercase tracking-[0.2em] mb-3 block">Pricing</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900"
          >Choose Your <span className="text-gold-gradient">Perfect Clean</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                p.popular
                  ? 'bg-navy-900 text-white shadow-2xl shadow-navy-900/20 scale-[1.02] lg:scale-105 z-10'
                  : 'bg-white border border-navy-900/[0.04] hover:shadow-lg'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-xs font-heading font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className={`font-heading text-sm font-bold mb-2 ${p.popular ? 'text-gold-400' : 'text-gold-600'}`}>{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`font-heading text-4xl font-extrabold ${p.popular ? 'text-white' : 'text-navy-900'}`}>{p.price}</span>
                <span className={`text-sm ${p.popular ? 'text-white/40' : 'text-navy-900/30'}`}>{p.period}</span>
              </div>
              <p className={`text-sm mb-6 ${p.popular ? 'text-white/50' : 'text-navy-900/40'}`}>{p.desc}</p>
              <div className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 shrink-0 ${p.popular ? 'text-gold-400' : 'text-gold-500'}`} />
                    <span className={p.popular ? 'text-white/70' : 'text-navy-900/60'}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact"
                className={`block text-center py-3.5 rounded-2xl font-heading font-bold text-sm transition-all ${
                  p.popular ? 'bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-lg shadow-gold-500/25' : 'border border-navy-900/10 text-navy-900 hover:bg-navy-900 hover:text-white'
                }`}
              >Get Started</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'How do I book a cleaning session?', a: 'Book through our website, call us, or WhatsApp. We confirm within 2 hours.' },
    { q: 'Are your products safe for children and pets?', a: 'Yes! We use only eco-certified, non-toxic, biodegradable products.' },
    { q: 'Do I need to provide cleaning supplies?', a: 'No — our team arrives fully equipped with professional-grade supplies.' },
    { q: 'What if I\'m not satisfied?', a: 'We return within 24 hours to re-clean at no extra cost. Guaranteed.' },
    { q: 'How long does a typical session take?', a: 'Standard cleans take 2-4 hours; deep cleans may take 4-6 hours.' },
  ]

  return (
    <section className="py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl font-extrabold text-navy-900"
          >Frequently Asked <span className="text-gold-gradient">Questions</span></motion.h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="border border-navy-900/5 rounded-2xl overflow-hidden hover:border-gold-200/50 transition-colors"
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gold-50/30 transition-colors"
              >
                <span className="font-heading font-semibold text-navy-900 pr-4 text-[15px]">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <div className="px-6 pb-5 text-navy-900/50 text-sm leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
