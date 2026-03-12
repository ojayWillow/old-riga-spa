'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    alt: 'Spa massage room',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    alt: 'Candles and relaxation',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    alt: 'Facial treatment',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    alt: 'Spa pool',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80',
    alt: 'Stone therapy',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80',
    alt: 'Aromatherapy oils',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal">
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
            Atmosphere
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">
            The SPA Experience
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${img.span} overflow-hidden cursor-pointer group relative`}
              onClick={() => setActiveImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-serif italic">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActiveImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={() => setActiveImg(null)}
          >
            ✕
          </button>
          <img
            src={activeImg}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
