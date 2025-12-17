'use client'

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Shield, FileText, User, Building } from "lucide-react"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ImpressumPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#201d24] font-posterama text-white mt-8">
      {/* Hero Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="mb-8 sm:mb-12 md:mb-16"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-wider md:tracking-widest px-2 sm:px-0 uppercase text-white leading-tight" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              IMPRESSUM & DATENSCHUTZ
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              RECHTLICHE INFORMATIONEN & DATENSCHUTZHINWEISE
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Impressum Content */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Card */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Impressum
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Verantwortliche Person
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Ines Scharavin
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Adresse
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Königsstraße 34 · 57334 Bad Laasphe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Telefon
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      02752 / 2029205
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      E-Mail
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      info@dersalon-scharavin.de
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Datenschutz Information */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Datenschutzinformation
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                    Verantwortlicher für die Datenverarbeitung
                  </h3>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                      </p>
                      
                      <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6 md:p-8 mt-3 sm:mt-4">
                        <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-3 sm:mb-4 tracking-wide uppercase" 
                            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                          Verantwortliche Personen:
                        </h4>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                              <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                              Ines Scharavin
                            </p>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                              Königsstraße 34 · 57334 Bad Laasphe
                            </p>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                              02752 / 2029205
                            </p>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                              info@dersalon-scharavin.de
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                    Allgemeine Datenschutzhinweise
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                    </p>
                    
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                HABEN SIE FRAGEN ZUM DATENSCHUTZ?
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 tracking-wide uppercase leading-relaxed" 
                 style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
                KONTAKTIEREN SIE UNS JEDERZEIT GERNE PERSÖNLICH
              </p>
             
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}