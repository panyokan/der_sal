"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, Scissors, Clock, Smile, Award } from "lucide-react"
import Image from "next/image"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import InesImage from "@/public/images/owner1.png"
import SandraImage from "@/public/images/owner2.png"
import { motion } from "framer-motion"

export default function TeamPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const teamMembers = [
    {
      name: "INES SCHARAVIN",
      image: InesImage,
      objectPosition: "center 20%",
      specialties: ["BALAYAGE & STRÄHNEN", "BLOND-EXPERTISE", "HAARVERLÄNGERUNGEN", "HERREN- UND BARBER-CUTS"],
      experience: "Seit 2018 Friseurin",
      achievements: [ "4. PLATZ BEI DER ","Berufsschul‑Primus"],
      funFact: "SCHON WÄHREND MEINER AUSBILDUNG WAR ICH KLASSENBESTE IN DER BERUFSSCHULE – EIN ERFOLG, DER MIR GEZEIGT HAT, WIE SEHR PRÄZISION, KREATIVITÄT UND DURCHHALTEVERMÖGEN MEINEN WEG PRÄGEN.",
      bio: "SEIT 2018 ARBEITE ICH MIT LEIDENSCHAFT ALS FRISEURIN, 2022 HABE ICH MEINEN MEISTERTITEL IM CRASHKURS ERFOLGREICH ABGESCHLOSSEN. MEIN FACHGEBIET SIND FARB- UND BLONDTECHNIKEN, BALAYAGE, STRÄHNEN, HAARVERLÄNGERUNGEN SOWIE PRÄZISES HERREN- UND BARBER-STYLING. FÜR MICH ZÄHLT NICHT NUR EIN PERFEKTES ERGEBNIS, SONDERN AUCH, DASS JEDER KUNDE MIT EINEM LOOK NACH HAUSE GEHT, DER ZU SEINER PERSÖNLICHKEIT PASST UND SICH IM ALLTAG GENAU SO GUT ANFÜHLT WIE AUF FOTOS.",
    },
    {
      name: "SANDRA KRAUSE",
      image: SandraImage,
      objectPosition: "80% 6%",
      specialties: ["DAUERWELLE", "DAMENKURZHAAR", "KLASSISCHE HERRENFRISUREN"],
      experience: "23 Jahre Erfahrung",
      achievements: ["SALONLEITUNG","INTERNATIONALE ERFAHRUNG"],
      funFact: "DURCH MEINE ZEIT ALS SALONLEITERIN IN DER SCHWEIZ KONNTE ICH NICHT NUR MEINE FACHLICHEN KOMPETENZEN VERTIEFEN, SONDERN AUCH WERTVOLLE ERFAHRUNG IN BERATUNG, ORGANISATION UND IM UMGANG MIT EINEM INTERNATIONALEN KUNDENKREIS SAMMELN.",
      bio: "MIT ÜBER 23 JAHREN BERUFSERFAHRUNG BRINGE ICH HANDWERK, ROUTINE UND LEIDENSCHAFT IN JEDES DETAIL. BESONDERS DAMENKURZHAARFRISUREN, DAUERWELLEN UND KLASSISCHE HERRENFRISUREN GEHÖREN ZU MEINEN STÄRKEN – PRÄZISE, TYPGERECHT UND MIT DEM BLICK FÜR DAS GEWISSE ETWAS. MEIN ANSPRUCH: KLASSISCHE TECHNIKEN MODERN INTERPRETIEREN – FÜR LOOKS, DIE ZEITLOS, GEPFLEGT UND INDIVIDUELL SIND.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#201d24] font-posterama text-white mt-8">
      {/* Hero Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest px-2 sm:px-3 md:px-4 uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              UNSER FRISEUR TEAM IN BAD LAASPHE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-3xl sm:max-w-4xl mx-auto px-3 sm:px-4 md:px-0 tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              INES SCHARAVIN & SANDRA KRAUSE - ERFAHRENE FRISEUR-EXPERTINNEN MIT LEIDENSCHAFT FÜR PERFEKTE HAARE IN BAD LAASPHE
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Members */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid gap-8 sm:gap-12 md:gap-16" variants={staggerContainer}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.25 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 shadow-xl sm:shadow-2xl border-2 border-[#3a3640]">
                      <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
                        <Image
                          src={member.image}
                          alt={`Friseur ${member.name} - in Bad Laasphe`}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          style={{ objectPosition: member.objectPosition }}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 md:space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-widest uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.08em' }}>
                    {member.name}
                  </h2>

                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.035em' }}>
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4 flex items-center tracking-wider uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                        <Scissors className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                        SPEZIALGEBIETE
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                        {member.specialties.map((specialty, specIndex) => (
                          <motion.li 
                            key={specIndex} 
                            className="flex items-center"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-2 sm:mr-3 flex-shrink-0" />
                            <p className="text-white text-sm sm:text-base md:text-lg tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>{specialty}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Updated: Heart icon before Kompetenz */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4 flex items-center tracking-wider uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                        KOMPETENZ
                      </h3>
                      
                      <motion.div 
                        className="flex items-center mb-3 sm:mb-4"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
                      >
                                                    <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-2 sm:mr-3 flex-shrink-0" />

                        <p className="text-white text-sm sm:text-base md:text-lg tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>{member.experience}</p>
                      </motion.div>
                      
                      <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
                        {member.achievements.map((achievement, achieveIndex) => (
                          <motion.div 
                            key={achieveIndex} 
                            className="flex items-center"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
                          >
                            <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-2 sm:mr-3 flex-shrink-0" />
                            <p className="text-white text-xs sm:text-sm md:text-base tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.025em' }}>{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="bg-[#2d2a32] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-[#3a3640]"
                    whileHover={{ scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 flex items-center tracking-wider uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                      PERSÖNLICHER FAKT
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg italic tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>{member.funFact}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
                  >
                    <Button className="bg-[#2d2a32] text-white hover:bg-[#3a3640] font-black px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl w-full sm:w-auto tracking-widest uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                      TERMIN BEI {member.name.split(" ")[0]} BUCHEN
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Stats */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#2d2a32]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-5 md:mb-6 px-2 sm:px-3 md:px-4 tracking-widest uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              UNSER FRISEUR TEAM IN BAD LAASPHE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-3 sm:px-4 md:px-0 tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              ERFAHRUNG UND LEIDENSCHAFT FÜR PERFEKTE HAARE IN BAD LAASPHE
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10"
            variants={staggerContainer}
          >
            {[
              { number: "8+", label: "JAHRE ERFAHRUNG", icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" /> },
              { number: "500+", label: "ZUFRIEDENE KUNDEN", icon: <Smile className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" /> },
              { number: "10+", label: "ZERTIFIKATE", icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" /> },
              { number: "100%", label: "Leidenschaft", icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" /> },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.25 }}>
                <Card className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 text-center hover:shadow-xl transition-all duration-200 border-2 border-[#3a3640] hover:border-white bg-[#201d24] hover:-translate-y-1 flex items-center justify-center h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 md:gap-4">
                    <motion.div
                      className="text-white flex justify-center"
                      whileHover={{ rotate: 360, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>

                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white tracking-widest" style={{ fontFamily: "var(--font-posterama)", fontWeight: 900, letterSpacing: "0.08em" }}>
                      {stat.number}
                    </div>

                    <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-black tracking-wider uppercase text-center px-1" style={{ fontFamily: "var(--font-posterama)", fontWeight: 800, letterSpacing: "0.04em" }}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-30px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl sm:max-w-5xl mx-auto text-center">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 text-white px-2 sm:px-3 md:px-4 tracking-widest uppercase leading-tight" variants={fadeInUp} style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
            FRISEUR TERMIN IN BAD LAASPHE BUCHEN
          </motion.h2>
          <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4 md:px-0 tracking-wider uppercase leading-relaxed" variants={fadeInUp} style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
            UNSER EXPERTINNEN-TEAM IN BAD LAASPHE FREUT SICH DARAUF, SIE PERSÖNLICH KENNENZULERNEN UND IHREN PERFEKTEN STYLE ZU KREIEREN
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, duration: 0.15 }}
          >
            <Button
              size="lg"
              className="bg-[#2d2a32] text-white hover:bg-[#3a3640] font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-lg sm:text-xl md:text-2xl tracking-widest uppercase w-full sm:w-auto" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}
            >
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <Scissors className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 text-white" />
              </motion.div>
              BERATUNGSTERMIN BUCHEN
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}