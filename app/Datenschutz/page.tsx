'use client'

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Trash2, Cookie, Server, Mail, Phone, AlertTriangle, CheckCircle, User, Scissors } from "lucide-react"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DatenschutzPage() {
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
              DATENSCHUTZERKLÄRUNG
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              SCHUTZ IHRER PERSÖNLICHEN DATEN - DER SALON BAD LAASPHE
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Datenschutz Content */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Verantwortlicher */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Verantwortlicher für die Datenverarbeitung
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6 md:p-8">
                  <div className="space-y-4 sm:space-y-5">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Der Salon - Ines Scharavin
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Server className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Königsstraße 34<br/>
                          57334 Bad Laasphe
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Telefon: 02752 / 2029205
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          E-Mail: info@dersalon-scharavin.de
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Inhaberin: Ines Scharavin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Allgemeine Datenschutzhinweise */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Allgemeine Datenschutzhinweise
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                  </p>
                  
                  <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Bei Terminbuchungen und Kundenanfragen erheben wir nur die für die Dienstleistungserbringung notwendigen Daten. Diese werden ausschließlich für die Terminvereinbarung, Kundenverwaltung und zur Verbesserung unserer Friseurdienstleistungen verwendet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ihre Rechte */}
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Ihre Rechte nach der DSGVO
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                        Recht auf Auskunft
                      </h4>
                      <p className="text-white text-sm sm:text-base tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende personenbezogene Daten verarbeitet werden.
                      </p>
                    </div>
                    
                    <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                        Recht auf Berichtigung
                      </h4>
                      <p className="text-white text-sm sm:text-base tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Sie können unrichtige personenbezogene Daten (z.B. Name, Telefonnummer) berichtigen lassen.
                      </p>
                    </div>
                    
                    <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                        Recht auf Löschung
                      </h4>
                      <p className="text-white text-sm sm:text-base tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Sie können unter bestimmten Voraussetzungen die Löschung Ihrer Kundendaten verlangen.
                      </p>
                    </div>
                    
                    <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                        Recht auf Widerspruch
                      </h4>
                      <p className="text-white text-sm sm:text-base tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Sie können der Verarbeitung Ihrer Daten für Werbezwecke jederzeit widersprechen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminbuchung & Kundenbezogene Daten */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Scissors className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Terminbuchung & Kundenbezogene Daten
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                    Welche Daten erfassen wir?
                  </h3>
                  
                  <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        "Vor- und Nachname für die Terminvereinbarung",
                        "Telefonnummer für Terminerinnerungen",
                        "E-Mail-Adresse für Bestätigungen",
                        "Terminwünsche und Dienstleistungspräferenzen",
                        "Allergien oder Unverträglichkeiten bei Farbbehandlungen",
                        "Frühere Haarschnitte für kontinuierliche Beratung"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-4 h-4 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                            <CheckCircle className="w-2 h-2 text-white" />
                          </div>
                          <span className="text-white text-sm sm:text-base tracking-wide uppercase" 
                                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Diese Daten werden ausschließlich für die Terminverwaltung, individuelle Beratung und zur Erbringung unserer Friseurdienstleistungen verwendet. Eine Weitergabe an Dritte erfolgt nicht.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-3 sm:mr-4">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Speicherdauer
                    </h3>
                  </div>
                  
                  <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Kundendaten werden nach Beendigung der Geschäftsbeziehung für die gesetzlich vorgeschriebene Aufbewahrungsfrist von 10 Jahren aufbewahrt und anschließend gelöscht. Auf Wunsch können wir Ihre Daten auch früher löschen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookies & Technische Daten */}
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640] mr-4 sm:mr-6">
                  <Cookie className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wider md:tracking-widest uppercase leading-tight" 
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                  Cookies & Technische Daten
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Unsere Website verwendet Cookies, um Ihnen den bestmöglichen Service zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                  </p>
                  
                  <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-3 sm:mb-4 tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                      Wir verwenden folgende Arten von Cookies:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-sm sm:text-base tracking-wide uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Notwendige Cookies
                        </span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-sm sm:text-base tracking-wide uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Präferenz-Cookies
                        </span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-sm sm:text-base tracking-wide uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Statistiken
                        </span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] mr-2 sm:mr-3 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-sm sm:text-base tracking-wide uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                          Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Sie können Ihre Einwilligung zur Verwendung von Cookies jederzeit widerrufen oder Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#2d2a32] border-2 border-[#3a3640] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                FRAGEN ZUM DATENSCHUTZ?
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 tracking-wide uppercase leading-relaxed" 
                 style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
                WIR STEHEN IHNEN GERNE FÜR DATENSCHUTZANFRAGEN ZUR VERFÜGUNG
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="bg-[#201d24] border-2 border-[#3a3640] rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 tracking-wide uppercase" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                    Verantwortliche für den Datenschutz
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase" 
                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    Ines Scharavin<br/>
                    Der Salon<br/>
                    Königsstraße 34<br/>
                    57334 Bad Laasphe
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                <motion.a
               
                  className="bg-[#201d24] hover:bg-[#3a3640] text-white font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl tracking-wide md:tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center"
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                  DATENSCHUTZ ANFRAGE: 02752 / 2029205
                </motion.a>
                <motion.a
                  href="mailto:info@dersalon-scharavin.de?subject=Datenschutzanfrage"
                  className="bg-[#201d24] hover:bg-[#3a3640] text-white font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl tracking-wide md:tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center"
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                  E-MAIL AN UNS
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}