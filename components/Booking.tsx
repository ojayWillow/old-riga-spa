'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  'Classic Massage',
  'Aromatherapy',
  'Hot Stone Therapy',
  'Facial Treatment',
  'Sauna & Steam',
  'Couples Retreat',
  'Relax Package (60 min)',
  'Restore Package (90 min)',
  'Retreat Package (120 min)',
];

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
              Reserve Your Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-6">
              Book Your
              <br />
              <span className="italic text-gold">Visit</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-charcoal-light font-light leading-relaxed mb-10 text-lg">
              We invite you to begin your journey with us. Reach out to reserve
              your preferred treatment and we will confirm your appointment
              within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  label: 'Address',
                  value: 'Jāņa sēta 3, Old Town, Rīga, LV-1050',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+371 2234 5678',
                },
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'hello@oldrigaspa.lv',
                },
                {
                  icon: '⏰',
                  label: 'Hours',
                  value: 'Mon–Sun: 9:00 – 21:00',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-gold text-xs tracking-widest uppercase mb-1 font-light">
                      {item.label}
                    </p>
                    <p className="text-charcoal font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-warm-white border border-gold/30 p-12 text-center"
              >
                <div className="text-gold text-4xl mb-6">✦</div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">
                  Thank You, {form.name.split(' ')[0]}
                </h3>
                <p className="text-charcoal-light font-light leading-relaxed">
                  Your booking request has been received. We will confirm your
                  appointment at <span className="text-charcoal">{form.email}</span> within
                  24 hours. We look forward to welcoming you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/30 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/30 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+371 ..."
                      className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/30 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                    Treatment / Package *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-2 font-light">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any special requests or notes..."
                    className="w-full bg-warm-white border border-gold/20 px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/30 resize-none transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 mt-2"
                >
                  Request Booking
                </button>

                <p className="text-center text-charcoal-light text-xs font-light tracking-wide">
                  We will confirm your appointment within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
