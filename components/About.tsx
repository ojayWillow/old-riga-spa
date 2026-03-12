'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                alt="Old Riga SPA interior"
                className="w-full h-[500px] object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-white px-6 py-5 hidden md:block">
              <p className="font-serif text-3xl font-medium">15+</p>
              <p className="text-xs tracking-widest uppercase mt-1">Years of Luxury</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-6">
              A Haven in the
              <br />
              <span className="italic text-gold">Heart of Riga</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />

            <p className="text-charcoal-light font-light leading-relaxed mb-6 text-lg">
              Nestled within the cobblestone streets of Old Town Riga, Old Riga
              SPA is a refuge from the pulse of the city. Our historic building,
              dating to the 19th century, has been lovingly transformed into a
              modern sanctuary of wellness.
            </p>
            <p className="text-charcoal-light font-light leading-relaxed mb-8">
              We believe that true luxury lies in stillness — in the deliberate
              art of slowing down. Each treatment is an invitation to reconnect
              with yourself, guided by therapists trained in the world's finest
              wellness traditions.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Authenticity', desc: 'Rooted in Baltic wellness traditions' },
                { title: 'Craftsmanship', desc: 'Expert therapists, premium products' },
                { title: 'Serenity', desc: 'A quiet escape from city life' },
                { title: 'Personalisation', desc: 'Every visit tailored to you' },
              ].map((v) => (
                <div key={v.title} className="border-l-2 border-gold/40 pl-4">
                  <p className="font-serif text-charcoal font-medium mb-1">{v.title}</p>
                  <p className="text-charcoal-light text-sm font-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
