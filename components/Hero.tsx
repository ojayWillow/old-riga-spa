'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold text-sm tracking-[0.35em] uppercase font-light mb-4"
        >
          Old Town Riga, Latvia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl text-white font-medium leading-tight mb-6"
        >
          Escape.
          <br />
          <span className="italic">Relax.</span>
          <br />
          Restore.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-16 h-px bg-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/80 text-lg font-light tracking-wide mb-10 max-w-xl mx-auto"
        >
          A sanctuary of calm in the heart of historic Old Riga. Surrender to
          timeless treatments crafted for your deepest restoration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="px-10 py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white/60 text-white text-sm tracking-[0.2em] uppercase font-light hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
