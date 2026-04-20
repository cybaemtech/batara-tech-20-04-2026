import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const LocationSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-accent overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-12 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-8 h-0.5 bg-white" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">Find Us</span>
            <div className="w-8 h-0.5 bg-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            OUR LOCATION
          </h2>
          <p className="text-primary-foreground/60 text-[14px] mt-3 max-w-xl mx-auto">
            Visit our engineering hub in the heart of Bengaluru — where precision meets innovation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex-1 min-h-[340px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-lg"
          >
            <iframe
              title="Batara Techno Solutions Location"
              src="https://maps.google.com/maps?q=80+Feet+Road+Chandra+Layout+Bengaluru+Karnataka+560040+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Address + Contact — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:w-[380px] flex flex-col gap-5"
          >
            {/* Address card */}
            <div className="flex-1 rounded-2xl border border-primary-foreground/10 bg-background/15 p-7 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1.5">Office Address</p>
                  <p className="font-bold text-primary-foreground text-[15px] leading-snug mb-1">
                    BATARA TECHNOSOLUTIONS PVT LTD
                  </p>
                  <p className="text-primary-foreground/70 text-[13px] leading-relaxed">
                    No.1443/1444, 4th Floor<br />
                    80 Feet Road, Chandra Layout<br />
                    Bengaluru North, Karnataka<br />
                    India — 560025
                  </p>
                </div>
              </div>

              <div className="h-px bg-primary-foreground/10" />

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1.5">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/918105111599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground text-[14px] font-medium hover:text-white transition-colors"
                  >
                    +91 81051 11599
                  </a>
                </div>
              </div>

              <div className="h-px bg-primary-foreground/10" />

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1.5">Email</p>
                  <a
                    href="mailto:info@bataratechno.com"
                    className="text-primary-foreground text-[14px] font-medium hover:text-white transition-colors"
                  >
                    info@bataratechno.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps CTA */}
            <a
              href="https://maps.google.com/?q=80+Feet+Road+Chandra+Layout+Bengaluru+Karnataka+560040+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[13px] font-semibold tracking-wide transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
