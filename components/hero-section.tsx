"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import homepageImage from "@/public/images/homepageC.jpg";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${homepageImage.src})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-20 relative w-full">
        <motion.div
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center text-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Card-like centered content with soft shadow and glass effect */}
          <motion.div
            className="relative bg-white/6 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mx-2 sm:mx-4 md:mx-0"
            variants={fadeInUp}
          >
            {/* Accent gradient */}
            <div className="pointer-events-none absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-60 blur-sm sm:blur-lg" />

            <div className="relative z-10">
              <motion.h1
                className="font-posterama text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-7 px-2 sm:px-3 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-posterama)" }}
                variants={fadeInUp}
              >
                Professionelle Haarpflege &{" "}
                <span className="block sm:inline mt-2 sm:mt-0">Style Expertise</span>
                <br className="hidden sm:block" />
                in Bad Laasphe
              </motion.h1>

              {/* Optional subtitle - uncomment if needed */}
              {/* <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-posterama px-2 sm:px-3 md:px-4 font-black tracking-wider uppercase"
                style={{ fontFamily: "var(--font-posterama)" }}
                variants={fadeInUp}
              >
                Ihr Salon für außergewöhnliche Frisuren und persönliche Beratung
              </motion.p> */}

              {/* CTA Buttons - Responsive sizing */}
              {/* <motion.div 
                className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6" 
                variants={fadeInUp}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full xs:w-auto"
                >
                  <Button
                    size="lg"
                    className="bg-yellow-500/25 text-yellow-400 hover:bg-yellow-500/35 font-black text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-lg transition-all duration-300 group border border-yellow-500/30 font-posterama w-full xs:w-auto tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-posterama)" }}
                  >
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-yellow-400" />
                    Termin Buchen
                  </Button>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full xs:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 backdrop-blur-sm font-black text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-300 font-posterama w-full xs:w-auto tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-posterama)" }}
                  >
                    Unsere Arbeiten
                  </Button>
                </motion.div>
              </motion.div> */}

              {/* Stats - modern pill style - Responsive grid */}
              {/* <motion.div 
                className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3 md:gap-4 items-stretch" 
                variants={fadeInUp}
              >
                {[
                  { number: "500+", text: "Zufriedene Kunden" },
                  { number: "5★", text: "Google Bewertungen" },
                  { number: "8+", text: "Jahre Erfahrung" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center bg-white/4 border border-white/8 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-sm sm:shadow-md"
                    whileHover={{ translateY: -2 }}
                    transition={{ type: "spring", stiffness: 280 }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider" style={{ fontFamily: 'var(--font-posterama)' }}>
                      {stat.number}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-white mt-0.5 sm:mt-1 font-black tracking-wide uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>
                      {stat.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div> */}

              {/* Mobile tip */}
              <motion.div className="mt-6 sm:mt-7 md:mt-8 lg:hidden" variants={fadeInUp}>
                <p className="text-sm sm:text-base text-white/90 font-posterama max-w-sm mx-auto font-black tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)' }}>
                  Scrollen Sie nach unten, um mehr über unsere Services zu erfahren
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, shown on larger screens */}
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-1.5 sm:h-2 md:h-3 bg-white rounded-full mt-1 sm:mt-1.5 md:mt-2"
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Mobile scroll indicator */}
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 lg:hidden"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-0.5 sm:space-y-1">
          <motion.div 
            className="w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div 
            className="w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;