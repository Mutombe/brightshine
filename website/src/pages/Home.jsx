import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Sparkles, Shield, Clock, Award, Users, Star,
  ChevronRight, Play, CheckCircle2, Home as HomeIcon, Building2, Truck,
  SprayCan, Wind, Droplets, Phone, Zap, Heart, Leaf
} from 'lucide-react'
import { useInView, useCounter } from '../hooks/useAnimations'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

/* ═══════════════════════════════════════════════
   HERO — Full-viewport immersive hero with
   blended background image, glassmorphism stat
   cards, animated gradient orbs, and floating
   decorative elements. The image should be a
   stunning, bright modern interior that's been
   expertly cleaned.
═══════════════════════════════════════════════ */
function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image — blended behind everything */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 -top-20 -bottom-20">
        {/* Vision: Stunning modern living room / luxury interior — bright, airy, immaculately clean,
            with golden sunlight pouring through floor-to-ceiling windows. Think architectural photography. */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85"
          alt="Luxury clean interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer blend for text readability + brand feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold-100/20 via-transparent to-transparent" />
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold-300/20 to-gold-500/5 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] blob bg-gradient-to-tr from-gold-200/15 to-transparent blur-[80px]"
        />
      </div>

      {/* Floating geometric deco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[15%] right-[8%] w-64 h-64 border border-gold-300/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[20%] right-[5%] w-40 h-40 border border-gold-300/5 rounded-full"
        />
        <div className="absolute top-[30%] left-[5%] w-2 h-2 bg-gold-400/40 rounded-full float-slow" />
        <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-gold-400/20 rounded-full float-medium" />
        <div className="absolute bottom-[20%] left-[10%] w-1.5 h-1.5 bg-gold-500/30 rounded-full float-slow" />
      </div>

      <motion.div style={{ y: contentY, opacity }} className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 pb-24 lg:pt-44 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8"
          >
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-[13px] font-heading font-semibold text-gold-700">Premium Cleaning Excellence</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight mb-7"
          >
            <span className="text-navy-900">Where Every</span>
            <br />
            <span className="text-gold-shimmer">Surface Shines</span>
            <br />
            <span className="text-navy-900">With Brilliance</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-navy-900/50 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Experience the epitome of cleanliness. We transform spaces into pristine havens with eco-friendly products and unmatched precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-navy-900 text-white px-8 py-4 rounded-full font-heading font-bold text-[15px] hover:bg-gold-600 transition-all duration-500 shadow-xl shadow-navy-900/15 hover:shadow-gold-500/20"
            >
              Book a Cleaning
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2.5 glass-light px-8 py-4 rounded-full font-heading font-bold text-[15px] text-navy-900/70 hover:text-navy-900 transition-all"
            >
              Explore Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-5 flex-wrap"
          >
            <div className="flex -space-x-2.5">
              {['E7C8A0','C9A96E','A8D8A8','9BC4E2'].map((c, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-[2.5px] border-cream flex items-center justify-center text-[11px] font-heading font-bold text-white"
                  style={{ background: `#${c}` }}
                >
                  {['SM','JK','AT','MR'][i]}
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-navy-900/10" />
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />)}
                <span className="text-xs font-heading font-bold text-navy-900 ml-1.5">4.9</span>
              </div>
              <p className="text-xs text-navy-900/40 font-heading">Trusted by <strong className="text-navy-900/70">800+</strong> clients</p>
            </div>
          </motion.div>
        </div>

        {/* Floating glass stat cards — positioned on the right side over the image */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 space-y-4 z-20">
          {[
            { val: '800+', label: 'Happy Clients', icon: Users, delay: 0.8 },
            { val: '99%', label: 'Satisfaction', icon: Heart, delay: 0.9 },
            { val: '10+', label: 'Years', icon: Award, delay: 1.0 },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: s.delay, type: 'spring', stiffness: 200 }}
              className="glass-light rounded-2xl p-4 pr-6 flex items-center gap-3 shadow-xl shadow-navy-900/5 hover:shadow-2xl transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-gold-100/80 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="font-heading text-xl font-extrabold text-navy-900 leading-none">{s.val}</p>
                <p className="text-[11px] font-heading text-navy-900/40 mt-0.5">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-9 rounded-full border-2 border-navy-900/15 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1 bg-gold-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SERVICES BENTO — Asymmetric grid with
   mixed card sizes, image backgrounds, glass
   overlays, and hover reveals.
═══════════════════════════════════════════════ */
function ServicesBento() {
  const [ref, inView] = useInView()
  const services = [
    { icon: HomeIcon, title: 'Residential', desc: 'Sparkling homes from kitchen to bedroom', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80', span: 'md:col-span-2 md:row-span-2', h: 'h-[320px] md:h-full' },
    { icon: Building2, title: 'Commercial', desc: 'Professional office & retail cleaning', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', span: '', h: 'h-[240px]' },
    { icon: SprayCan, title: 'Deep Clean', desc: 'Intensive cleaning for every corner', img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80', span: '', h: 'h-[240px]' },
    { icon: Truck, title: 'Move-In/Out', desc: 'Start fresh in your new space', img: '/3.jpg', span: '', h: 'h-[240px]' },
    { icon: Droplets, title: 'Sanitization', desc: 'Hospital-grade disinfection', img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80', span: '', h: 'h-[240px]' },
  ]

  return (
    <section className="py-28 mesh-light relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-heading font-bold text-gold-600 uppercase tracking-[0.2em] mb-3 block"
            >Our Expertise</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight"
            >
              Services Tailored<br /><span className="text-gold-gradient">For You</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-heading font-bold text-gold-600 hover:text-gold-700 transition-colors group">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px] md:auto-rows-[1fr]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${s.span} ${s.h}`}
            >
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent group-hover:from-navy-900/90 transition-all duration-500" />
              {/* Glass icon badge */}
              <div className="absolute top-4 left-4 glass-frost rounded-xl p-2.5">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-white/60 text-sm font-body">{s.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-gold-400 text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   WHY US — Split layout with blended image on
   left, feature cards on right with glass hover.
   Image bleeds behind decorative shapes.
═══════════════════════════════════════════════ */
function WhyUs() {
  const [ref, inView] = useInView()
  const features = [
    { icon: Shield, title: 'Trusted & Insured', desc: 'Fully vetted team with comprehensive coverage.' },
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Non-toxic, biodegradable products only.' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Evenings, weekends, holidays — we adapt.' },
    { icon: Zap, title: 'Quality Guarantee', desc: 'Not happy? We re-clean within 24 hours.' },
  ]

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-[2rem] border border-gold-200/30 -z-10" />
            <div className="absolute -inset-8 rounded-[2.5rem] border border-gold-200/15 -z-10" />

            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
              {/* Vision: Two professional cleaners working side-by-side in a modern kitchen, branded uniforms, warm lighting, action shot */}
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional cleaning team"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-navy-900">100% Satisfaction</p>
                <p className="text-[11px] text-navy-900/40">Guaranteed Every Time</p>
              </div>
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              animate={inView ? { opacity: 1, rotate: 6, scale: 1 } : {}}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg shadow-gold-500/30 hidden sm:flex"
            >
              <span className="font-heading text-2xl font-extrabold">10+</span>
              <span className="text-[10px] font-heading font-medium -mt-0.5">Years</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-heading font-bold text-gold-600 uppercase tracking-[0.2em] mb-3 block"
            >Why Choose Us</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight mb-5"
            >
              Cleaning That<br /><span className="text-gold-gradient">Exceeds</span> Expectations
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="text-navy-900/50 text-[15px] leading-relaxed mb-10"
            >
              At Brite Shine, we don't just clean — we elevate. Our expert team combines advanced techniques with genuine care.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="group p-5 rounded-2xl border border-navy-900/5 hover:border-gold-300/30 hover:bg-gold-50/30 transition-all duration-300 card-glow"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-100/80 flex items-center justify-center mb-3 group-hover:bg-gold-500 transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-gold-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-navy-900 mb-1">{f.title}</h4>
                  <p className="text-[13px] text-navy-900/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   PROCESS — Dark section with numbered steps,
   golden connecting line, glassmorphism cards.
═══════════════════════════════════════════════ */
function Process() {
  const steps = [
    { num: '01', title: 'Request a Quote', desc: 'Tell us about your space via our form or a quick call.' },
    { num: '02', title: 'Custom Plan', desc: 'We design a plan tailored to your schedule and needs.' },
    { num: '03', title: 'Expert Clean', desc: 'Our trained pros arrive on time with premium supplies.' },
    { num: '04', title: 'Shine & Enjoy', desc: 'Walk into perfection. Satisfaction guaranteed.' },
  ]

  return (
    <section className="py-28 mesh-dark relative overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[11px] font-heading font-bold text-gold-400/60 uppercase tracking-[0.2em] mb-3 block"
          >Our Process</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white"
          >How It <span className="text-gold-400">Works</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-gold-500/10 via-gold-500/30 to-gold-500/10" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-[68px] h-[68px] rounded-2xl glass-frost mb-6 mx-auto group-hover:border-gold-500/30 transition-colors">
                <span className="font-heading text-lg font-extrabold text-gold-400">{s.num}</span>
              </div>
              <h3 className="font-heading text-[15px] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   STATS — Counter section with blended background
   image and glass overlay cards.
═══════════════════════════════════════════════ */
function Stats() {
  const [r1, c1] = useCounter(800)
  const [r2, c2] = useCounter(180)
  const [r3, c3] = useCounter(50)
  const [r4, c4] = useCounter(99)
  const stats = [
    { ref: r1, count: c1, suffix: '+', label: 'Happy Clients' },
    { ref: r2, count: c2, suffix: '+', label: 'Awards' },
    { ref: r3, count: c3, suffix: '+', label: 'Team Members' },
    { ref: r4, count: c4, suffix: '%', label: 'Satisfaction' },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Vision: Wide shot of a bright, modern commercial space — maybe hotel lobby or modern office — with beautiful natural light */}
      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80"
        alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              ref={s.ref}
              className="glass-frost rounded-2xl p-6 text-center"
            >
              <p className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-1">
                {s.count}<span className="text-gold-400">{s.suffix}</span>
              </p>
              <p className="text-white/40 text-xs font-heading font-semibold uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS — Elegant cards with subtle
   glass effects and star ratings.
═══════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    { name: 'Sarah M.', role: 'Homeowner', text: 'Absolutely incredible service! My home has never looked this clean. The team was professional, thorough, and so respectful of our space.' },
    { name: 'James K.', role: 'Office Manager', text: 'We switched to Brite Shine for our office cleaning and the difference is night and day. Consistent quality every single week.' },
    { name: 'Amanda T.', role: 'Property Manager', text: 'They handle all our move-out cleanings. Fast turnarounds, exceptional results, and always above and beyond.' },
  ]

  return (
    <section className="py-28 mesh-light relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-[11px] font-heading font-bold text-gold-600 uppercase tracking-[0.2em] mb-3 block"
          >Testimonials</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900"
          >What Our Clients <span className="text-gold-gradient">Say</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 border border-navy-900/[0.03]"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-gold-200/40 leading-none select-none">"</div>
              <div className="flex items-center gap-0.5 mb-5">
                {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
              </div>
              <p className="text-navy-900/60 text-[15px] leading-relaxed mb-6 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center text-white text-xs font-heading font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-[11px] text-navy-900/35">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   CTA — Full image background with glass
   overlay and centered action.
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Vision: Grand lobby or wide hallway with golden hour sunlight — warm, inviting, spacious, immaculate */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80"
        alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-900/70" />

      <div className="relative max-w-3xl mx-auto px-5 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-frost mb-8">
            <Sparkles className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Experience the<br /><span className="text-gold-shimmer">Brite Shine</span> Difference
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of satisfied clients. Your first clean is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-heading font-bold text-[15px] hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/25">
              Schedule Your Clean <ArrowRight className="w-4.5 h-4.5" />
            </Link>
            <a href="tel:+263771234567" className="inline-flex items-center justify-center gap-2 glass-frost text-white px-8 py-4 rounded-full font-heading font-bold text-[15px] hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <WhyUs />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
