import React from 'react';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, ChevronDown, ArrowRight, Heart, GraduationCap, DollarSign, Users, Sparkles, Shield } from 'lucide-react'

const JOBS = [
  { title: 'Senior Cleaning Technician', dept: 'Operations', location: 'Harare', type: 'Full-time',
    desc: 'Lead cleaning teams on residential and commercial projects. 3+ years experience required.',
    resp: ['Lead a team of 3-5 cleaners', 'Quality inspection and sign-off', 'Client communication', 'Training new members'] },
  { title: 'Residential Cleaning Specialist', dept: 'Residential', location: 'Harare', type: 'Full-time',
    desc: 'Deliver exceptional home cleaning. Training provided. Must be reliable and detail-oriented.',
    resp: ['Perform residential cleaning', 'Follow Brite Shine protocols', 'Maintain equipment', 'Excellent customer service'] },
  { title: 'Commercial Cleaning Operative', dept: 'Commercial', location: 'Harare', type: 'Full/Part-time',
    desc: 'Clean offices, retail spaces, and commercial buildings. Flexible shifts available.',
    resp: ['Clean commercial spaces', 'Operate industrial equipment', 'Follow H&S protocols', 'Report issues'] },
  { title: 'Client Relations Coordinator', dept: 'Customer Service', location: 'Harare (Office)', type: 'Full-time',
    desc: 'Handle bookings, respond to inquiries, and ensure world-class client experience.',
    resp: ['Manage booking system', 'Handle inquiries & complaints', 'Coordinate with teams', 'Maintain client database'] },
  { title: 'Marketing Manager', dept: 'Marketing', location: 'Harare (Hybrid)', type: 'Full-time',
    desc: 'Drive brand awareness through creative digital campaigns and social media management.',
    resp: ['Manage social media', 'Create content', 'Run ad campaigns', 'Analyze metrics'] },
]

const PERKS = [
  { icon: DollarSign, title: 'Competitive Pay', desc: 'Above-market salary with performance bonuses.' },
  { icon: GraduationCap, title: 'Paid Training', desc: '80+ hours of professional development.' },
  { icon: Heart, title: 'Health Benefits', desc: 'Medical aid contribution and wellness program.' },
  { icon: Shield, title: 'Equipment Provided', desc: 'All tools, uniforms, and supplies included.' },
  { icon: Users, title: 'Team Culture', desc: 'Monthly events and a family atmosphere.' },
  { icon: Sparkles, title: 'Growth Path', desc: 'Clear promotion pathways within the company.' },
]

export default function Careers() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      {/* Hero with full-bleed image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Vision: Diverse team of professionals working together — warm, collaborative, energetic */}
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-frost mb-6">
              <Briefcase className="w-4 h-4 text-gold-400" />
              <span className="text-[13px] font-heading font-semibold text-gold-300">Careers</span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Build Your Career<br /><span className="text-gold-400">With Purpose</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Join a team that takes pride in transforming spaces. We invest in our people because great teams create great results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading text-4xl font-extrabold text-navy-900"
            >Why Work <span className="text-gold-gradient">With Us</span></motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex gap-4 p-6 rounded-2xl border border-navy-900/[0.04] hover:border-gold-200/50 hover:bg-gold-50/30 transition-all card-glow"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-100/80 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-navy-900 mb-1">{p.title}</h3>
                  <p className="text-[13px] text-navy-900/40 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 mesh-light">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading text-4xl font-extrabold text-navy-900"
            >Open <span className="text-gold-gradient">Positions</span></motion.h2>
            <p className="text-navy-900/40 mt-3 text-lg">{JOBS.length} positions available</p>
          </div>
          <div className="space-y-3">
            {JOBS.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="bg-white rounded-2xl border border-navy-900/[0.04] overflow-hidden hover:shadow-md transition-shadow"
              >
                <button onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
                >
                  <div>
                    <h3 className="font-heading font-bold text-navy-900 text-[15px]">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      {[
                        [Briefcase, job.dept],
                        [MapPin, job.location],
                        [Clock, job.type],
                      ].map(([Icon, text], j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs text-navy-900/40">
                          <Icon className="w-3 h-3" /> {text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <div className="px-6 pb-6 border-t border-navy-900/[0.03] pt-4">
                        <p className="text-navy-900/50 text-sm leading-relaxed mb-4">{job.desc}</p>
                        <h4 className="font-heading font-bold text-navy-900 text-sm mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-2 mb-6">
                          {job.resp.map((r, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-navy-900/50">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />{r}
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3 rounded-xl text-sm font-heading font-bold hover:bg-gold-400 transition-colors">
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 mesh-dark grain">
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-white/40 text-lg mb-8">Send us your CV and we'll keep you in mind.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-heading font-bold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20">
              Send Your CV <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
