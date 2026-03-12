'use client';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <p className="font-serif text-2xl text-white font-medium tracking-wide">Old Riga</p>
              <p className="text-gold text-xs tracking-[0.3em] uppercase">SPA</p>
            </div>
            <div className="w-10 h-px bg-gold/50 mb-5" />
            <p className="font-light text-sm leading-relaxed max-w-xs">
              A sanctuary of calm and luxury in the heart of historic Old Town
              Riga. Where ancient cobblestones meet modern wellness.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Book Now', href: '#booking' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">Address</p>
                <p>Jāņa sēta 3</p>
                <p>Old Town, Rīga LV-1050</p>
                <p>Latvia</p>
              </li>
              <li>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">Phone</p>
                <a href="tel:+37122345678" className="hover:text-gold transition-colors">
                  +371 2234 5678
                </a>
              </li>
              <li>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:hello@oldrigaspa.lv" className="hover:text-gold transition-colors">
                  hello@oldrigaspa.lv
                </a>
              </li>
              <li>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">Hours</p>
                <p>Mon – Sun: 9:00 – 21:00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Old Riga SPA. All rights reserved.
          </p>
          <p className="text-xs font-light">
            Old Town Riga, Latvia
          </p>
        </div>
      </div>
    </footer>
  );
}
