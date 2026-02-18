import React from 'react';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Camera } from 'lucide-react'

const CATS = ['All', 'Residential', 'Commercial', 'Before & After', 'Deep Clean']
const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', cat: 'Residential', title: 'Living Room Transformation', tall: true },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cat: 'Commercial', title: 'Corporate Office Deep Clean' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', cat: 'Residential', title: 'Luxury Home Interior' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', cat: 'Deep Clean', title: 'Kitchen Deep Sanitization', tall: true },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', cat: 'Before & After', title: 'Whole-Home Makeover' },
  { src: '/3.jpg', cat: 'Before & After', title: 'Move-Out Clean Result' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', cat: 'Residential', title: 'Bathroom Revival' },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', cat: 'Commercial', title: 'Retail Space Refresh', tall: true },
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', cat: 'Residential', title: 'Minimalist Bedroom' },
  { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80', cat: 'Deep Clean', title: 'Industrial Kitchen Scrub' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', cat: 'Residential', title: 'Open Plan Living' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', cat: 'Commercial', title: 'Conference Room Polish' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = filter === 'All' ? GALLERY : GALLERY.filter(g => g.cat === filter)

  return (
    <>
      <section className="relative bg-mesh-hero pt-36 pb-14 overflow-hidden mesh-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
              <Camera className="w-4 h-4 text-gold-500" />
              <span className="text-[13px] font-heading font-semibold text-gold-700">Our Portfolio</span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="text-navy-900">See Our Work</span><br />
              <span className="text-gold-shimmer">Speak For Itself</span>
            </h1>
            <p className="text-navy-900/50 text-lg max-w-xl mx-auto mb-12">
              Browse transformations that showcase dedication and excellence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {CATS.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-heading font-bold transition-all duration-300 ${
                  filter === cat ? 'bg-navy-900 text-white shadow-lg' : 'bg-white text-navy-900/50 hover:text-navy-900 border border-navy-900/5'
                }`}
              >{cat}</button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div key={item.src} layout
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="break-inside-avoid group cursor-pointer relative rounded-3xl overflow-hidden"
                  onClick={() => setLightbox(item)}
                >
                  <img src={item.src} alt={item.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${item.tall ? 'h-[440px]' : 'h-[300px]'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 glass-frost text-white text-xs font-heading font-bold rounded-full mb-2">{item.cat}</span>
                    <h3 className="text-white font-heading font-bold text-lg">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 glass-frost rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/90 backdrop-blur-xl z-[70] flex items-center justify-center p-4" onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-12 h-12 glass-frost rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full" onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 glass-frost text-gold-300 text-xs font-heading font-bold rounded-full mb-2">{lightbox.cat}</span>
                <h3 className="text-white font-heading text-xl font-bold">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
