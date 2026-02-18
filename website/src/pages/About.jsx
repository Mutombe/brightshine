import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Target, Eye, Users, Award, Leaf, Shield, ArrowRight, Quote, Sparkles, Zap } from 'lucide-react'
import { useInView, useCounter } from '../hooks/useAnimations'

export default function About() {
  return (<><AboutHero /><StorySection /><ValuesSection /><TeamSection /><TimelineSection /><AboutCTA /></>)
}

function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden">
      {/* Vision: Wide angle shot of the full team in action or modern architectural interior */}
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/90 to-cream/20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-20 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <Heart className="w-4 h-4 text-gold-500" />
            <span className="text-[13px] font-heading font-semibold text-gold-700">About Brite Shine</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6">
            <span className="text-navy-900">A Passion For</span><br />
            <span className="text-gold-shimmer">Spotless Spaces</span>
          </h1>
          <p className="text-navy-900/50 text-lg leading-relaxed max-w-lg">
            Founded in 2015, Brite Shine has grown from a small family operation into the region's most trusted cleaning service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  const [ref, inView] = useInView()
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold-100/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold-200/20 -z-10" />
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
              {/* Vision: Candid team working shot — warm, collaborative, in a bright modern space */}
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" alt="Our story" className="w-full h-[500px] object-cover" loading="lazy" />
            </div>
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white p-6 rounded-2xl max-w-[260px] shadow-xl hidden sm:block"
            >
              <Quote className="w-5 h-5 text-gold-200 mb-2" />
              <p className="text-[15px] italic leading-relaxed">"We don't cut corners, we clean them."</p>
              <p className="text-gold-200/70 text-xs mt-2 font-heading font-semibold">— Our Founding Promise</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-[11px] font-heading font-bold text-gold-600 uppercase tracking-[0.2em] mb-3 block">Our Story</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-heading text-4xl font-extrabold text-navy-900 mb-6 leading-tight"
            >Born From a Simple <span className="text-gold-gradient">Belief</span></motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="space-y-4 text-navy-900/50 text-[15px] leading-relaxed"
            >
              <p>It started with a mop, a bucket, and an unwavering belief that every space deserves to shine. Our founder began Brite Shine in 2015, driven by a vision to elevate professional cleaning standards.</p>
              <p>What began as weekend cleanings for neighbors grew into a full-service operation. Today, we serve over 800 clients with 50+ trained professionals, but our philosophy remains — no job is done until it sparkles.</p>
              <p>Every team member undergoes 80+ hours of training, and we exclusively use eco-certified solutions. Because excellence isn't just a goal — it's our standard.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    { icon: Target, title: 'Excellence', desc: 'We set the highest standards and then exceed them.' },
    { icon: Heart, title: 'Care', desc: 'Every space is treated as if it were our own.' },
    { icon: Shield, title: 'Integrity', desc: 'Honest pricing, reliable service, always.' },
    { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly practices protecting your family.' },
    { icon: Users, title: 'Community', desc: 'Investing in our team and local community.' },
    { icon: Eye, title: 'Detail', desc: 'The spots others miss — that\'s where we shine.' },
  ]
  return (
    <section className="py-28 mesh-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900"
          >Our Core <span className="text-gold-gradient">Values</span></motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group bg-white rounded-3xl p-7 hover:shadow-lg transition-all duration-300 border border-navy-900/[0.03] card-glow"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-100/80 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                <v.icon className="w-5 h-5 text-gold-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-base font-bold text-navy-900 mb-1.5">{v.title}</h3>
              <p className="text-navy-900/40 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { name: 'Grace Moyo', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80' },
    { name: 'Tendai Nkomo', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Rudo Chisango', role: 'Head of Training', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
    { name: 'Farai Dube', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  ]
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900"
          >Meet Our <span className="text-gold-gradient">Leadership</span></motion.h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group">
              <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[3/4]">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-[15px]">{t.name}</h3>
              <p className="text-sm text-gold-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const milestones = [
    { year: '2015', title: 'The Beginning', desc: 'Founded with 3 team members.' },
    { year: '2017', title: '100 Clients', desc: 'First major milestone reached.' },
    { year: '2019', title: 'Commercial Launch', desc: 'Expanded into offices and retail.' },
    { year: '2021', title: 'Green Certified', desc: '100% eco-friendly products.' },
    { year: '2023', title: '500+ Clients', desc: 'Half a thousand trusting us.' },
    { year: '2025', title: '800+ & Growing', desc: 'Awarded "Best Cleaning Service."' },
  ]
  return (
    <section className="py-28 mesh-dark relative grain">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white"
          >Our <span className="text-gold-400">Journey</span></motion.h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gold-500/15 sm:-translate-x-px" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-gold-500 rounded-full -translate-x-1.5 sm:-translate-x-1.5 mt-2 shadow-lg shadow-gold-500/40 z-10" />
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                  <span className="text-gold-400 font-heading text-2xl font-extrabold">{m.year}</span>
                  <h3 className="font-heading text-[15px] font-bold text-white mt-1 mb-1">{m.title}</h3>
                  <p className="text-white/30 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-navy-900/40 text-lg mb-8">Join our growing family of happy clients today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-heading font-bold text-[15px] hover:bg-gold-600 transition-all shadow-xl shadow-navy-900/10">
            Get Started <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
