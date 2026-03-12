'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '✦',
    title: 'Classic Massage',
    description:
      'A timeless full-body massage using flowing strokes and gentle kneading to release tension and restore circulation.',
    duration: '60 – 90 min',
  },
  {
    icon: '◈',
    title: 'Aromatherapy',
    description:
      'Blended essential oils selected for your mood and needs, combined with therapeutic touch to calm the nervous system.',
    duration: '60 – 90 min',
  },
  {
    icon: '⬡',
    title: 'Hot Stone Therapy',
    description:
      'Smooth basalt stones heated to perfection, placed along energy meridians to melt deep muscular stress and tension.',
    duration: '90 min',
  },
  {
    icon: '❋',
    title: 'Facial Treatment',
    description:
      'A bespoke facial using organic botanical extracts to cleanse, hydrate, and visibly illuminate your complexion.',
    duration: '60 min',
  },
  {
    icon: '◎',
    title: 'Sauna & Steam',
    description:
      'Our private Baltic pine sauna and eucalyptus steam room — a ritual of warmth and purification for body and mind.',
    duration: '45 – 120 min',
  },
  {
    icon: '♡',
    title: 'Couples Retreat',
    description:
      'Share a journey of relaxation in our private suite — includes massage, sauna access, and champagne on arrival.',
    duration: '120 min',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-4">
            Our Treatments
          </h2>
          <div className="gold-divider" />
          <p className="text-charcoal-light font-light max-w-xl mx-auto mt-6 text-lg leading-relaxed">
            Each treatment is a carefully curated experience, designed to
            restore balance and cultivate deep wellbeing.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-warm-white p-8 border border-gold/10 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1.5 transition-all duration-400 cursor-default"
            >
              <div className="text-gold text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-charcoal font-medium mb-3">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-gold/50 mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-charcoal-light font-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-gold text-xs tracking-widest uppercase">
                {service.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
