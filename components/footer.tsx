"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Phone, Mail, MapPin, Shield, FileText } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.footer
      className="bg-[#201d24] text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 border-t border-[#3a3640] font-posterama"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10"
          variants={staggerContainer}
        >

          {/* CONTACT */}
          <motion.div
            className="text-left col-span-1 xs:col-span-2 lg:col-span-1"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 tracking-wider uppercase">
              Kontakt
            </h3>

            <div className="flex flex-col space-y-5">

              {/* Address */}
              <div className="flex items-center space-x-3 flex-nowrap">
                <div className="w-9 h-9 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base font-black tracking-wider uppercase whitespace-nowrap">
                  Königsstraße 34 · 57334 Bad Laasphe
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base font-black tracking-wider uppercase">
                  02752 / 2029205
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base font-black tracking-wider uppercase break-all">
                  info@dersalon-scharavin.de
                </span>
              </div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 tracking-wider uppercase">
              Folgen Sie uns
            </h3>

            <div className="flex justify-center space-x-6">
              {[
                {
                  name: "instagram",
                  icon: Instagram,
                  href: "https://www.instagram.com/dersalon_inesscharavin"
                },
                {
                  name: "facebook",
                  icon: Facebook,
                  href: "https://www.facebook.com"
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640]"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* HOURS */}
          <motion.div
            className="text-center xs:text-right col-span-1 xs:col-span-2 lg:col-span-1"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 tracking-wider uppercase">
              Öffnungszeiten
            </h3>

            <div className="space-y-3 max-w-xs mx-auto xs:ml-auto">
              <div className="flex justify-between">
                <span className="font-black uppercase">Di – Fr:</span>
                <span className="font-black uppercase">9:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-black uppercase">Samstag:</span>
                <span className="font-black uppercase">9:00 – 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-black uppercase">Montag:</span>
                <span className="font-black uppercase">Geschlossen</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* LEGAL LINKS */}
        <motion.div 
          className="border-t border-[#3a3640] pt-8 pb-6 text-center"
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12">
            {/* Updated Datenschutz Link */}
            <Link href="/Datenschutz">
              <motion.div
                className="flex items-center space-x-2 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] group-hover:border-white transition-colors duration-200">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <span className="font-black uppercase tracking-wider text-sm sm:text-base group-hover:text-white transition-colors duration-200">
                  Datenschutz
                </span>
              </motion.div>
            </Link>

            {/* Updated Impressum Link */}
            <Link href="/impressum">
              <motion.div
                className="flex items-center space-x-2 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] group-hover:border-white transition-colors duration-200">
                  <FileText className="w-3 h-3 text-white" />
                </div>
                <span className="font-black uppercase tracking-wider text-sm sm:text-base group-hover:text-white transition-colors duration-200">
                  Impressum
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div 
          className="border-t border-[#3a3640] pt-6 text-center"
          variants={fadeInUp}
        >
          <p className="font-black uppercase mb-3">
            Bleiben Sie wild. Bleiben Sie schön. Der Salon.
          </p>
          <p className="font-black uppercase text-sm">
            © {currentYear} Der Salon. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}