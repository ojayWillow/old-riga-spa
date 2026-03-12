'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight group">
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            Old Riga
          </span>
          <span
            className={`text-xs tracking-[0.25em] uppercase font-light transition-colors duration-300 ${
              scrolled ? 'text-gold' : 'text-gold'
            }`}
          >
            SPA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wider uppercase font-light transition-all duration-300 hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? 'text-charcoal-light' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="ml-2 px-5 py-2 border border-gold text-gold text-sm tracking-wider uppercase font-light hover:bg-gold hover:text-white transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-charcoal' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cream/98 border-t border-gold/20 px-6 py-6"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-charcoal text-sm tracking-widest uppercase font-light hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="inline-block mt-2 px-5 py-2 border border-gold text-gold text-sm tracking-wider uppercase font-light hover:bg-gold hover:text-white transition-all duration-300"
              >
                Book Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
