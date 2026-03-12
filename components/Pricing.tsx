'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: 'Relax',
    duration: '60 min',
    price: '€75',
    description: 'A focused restoration for body and mind.',
    features: [
      'Choice of Classic or Aromatherapy Massage',
      'Welcome herbal tea ceremony',
      'Access to relaxation lounge',
      'Organic product application',
    ],
    highlighted: false,
    cta: 'Book Relax',
  },
  {
    name: 'Restore',
    duration: '90 min',
    price: '€115',
    description: 'A deeper journey into balance and renewal.',
    features: [
      'Full-body massage of your choice',
      'Express facial or scalp treatment',
      'Sauna & steam room access',
      'Welcome herbal tea + seasonal refreshment',
      'Personalised essential oil blend',
    ],
    highlighted: true,
    cta: 'Book Restore',
  },
  {
    name: 'Retreat',
    duration: '120 min',
    price: '€165',
    description: 'The full Old Riga SPA experience, without compromise.',
    features: [
      'Signature full-body massage',
      'Complete facial treatment',
      'Hot stone therapy add-on',
      'Sauna, steam & cold plunge access',
      'Welcome champagne & seasonal fruits',
      'Complimentary robe & slippers',
    ],
    highlighted: false,
    cta: 'Book Retreat',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-warm-white">
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
            Investment in Yourself
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-4">
            Packages & Pricing
          </h2>
          <div className="gold-divider" />
          <p className="text-charcoal-light font-light max-w-xl mx-auto mt-6 text-lg leading-relaxed">
            Three tiers of experience, each one a considered gift to yourself.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col p-8 border transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? 'bg-charcoal border-gold shadow-xl shadow-charcoal/20'
                  : 'bg-cream border-gold/20 hover:border-gold/50 hover:shadow-lg'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold px-5 py-1.5">
                  <span className="text-white text-xs tracking-widest uppercase font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs tracking-[0.3em] uppercase font-light mb-2 ${
                    tier.highlighted ? 'text-gold' : 'text-gold'
                  }`}
                >
                  {tier.duration}
                </p>
                <h3
                  className={`font-serif text-3xl font-medium mb-3 ${
                    tier.highlighted ? 'text-white' : 'text-charcoal'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm font-light leading-relaxed ${
                    tier.highlighted ? 'text-white/70' : 'text-charcoal-light'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div
                className={`text-5xl font-serif font-medium mb-8 ${
                  tier.highlighted ? 'text-gold' : 'text-charcoal'
                }`}
              >
                {tier.price}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm font-light ${
                      tier.highlighted ? 'text-white/80' : 'text-charcoal-light'
                    }`}
                  >
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gold text-white hover:bg-gold-dark'
                    : 'border border-gold text-gold hover:bg-gold hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-charcoal-light text-sm font-light mt-10"
        >
          All packages include complimentary use of our relaxation lounge.
          Gift vouchers available — contact us for bespoke packages.
        </motion.p>
      </div>
    </section>
  );
}
