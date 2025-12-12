'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Palette, Sparkles, Leaf, Heart, Crown, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import damenServiceImage from "/public/images/pexels-markusspiske-112782.jpg"
import colorMagicImage from "/public/images/pexels-john-diez-7388749.jpg"
import herrenStylingImage from "/public/images/pexels-jibarofoto-1453005.jpg"
import bioPflegeImage from "/public/images/pexels-jibarofoto-1453005.jpg"
import cutImage from "/public/images/pexels-cottonbro-cut.jpg"
import washImage from "/public/images/pexels-cottonbro-wash.jpg"
import curlImage from "/public/images/pexels-enginakyurt-curl.jpg"
import extensionImage from "/public/images/pexels-enginakyurt-extension.jpg"
import herrenCutImage from "/public/images/pexels-ryank-12304509.jpg"
import bartTrimImage from "/public/images/pexels-cottonbro-3998427.jpg"
import hotTowelImage from "/public/images/pexels-mostafameraji-3037215.jpg"
import colorTouchupImage from "/public/images/pexels-shkrabaanthony-6599038.jpg"
import doneImage from "/public/images/cu11.jpg"
import treatmentImage from "/public/images/cu2.jpg"
import manServiceImage from "/public/images/pexels-iamluisao-12706272.jpg"

export default function ServicesPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const serviceCategories = [
    {
      title: "DAMEN-SERVICES",
      icon: Crown,
      color: "from-[#2d2a32] to-[#3a3640]",
      image: damenServiceImage,
      services: [
        {
          name: "PRÄZISIONSSCHNITT & STYLING",
          description: "EXPERTENSCHNITTE, ANGEPASST AN IHRE GESICHTSFORM UND IHREN LEBENSSTIL",
          image: cutImage,
        },
        {
          name: "WASCHEN & FÖHNEN",
          description: "KOMPLETTES STYLING-ERLEBNIS MIT PREMIUM-PRODUKTEN",
          image: washImage,
        },
        {
          name: "FESTLICHES STYLING",
          description: "ELEGANTE HOCHSTECKFRISUREN UND EVENT-FRISUREN",
          image: curlImage,
        },
        {
          name: "HAARVERLÄNGERUNGEN",
          description: "LÄNGE UND VOLUMEN MIT NATÜRLICH AUSSEHENDEN EXTENSIONS",
          image: extensionImage,
        },
      ],
    },
    {
      title: "HERREN-STYLING",
      icon: Scissors,
      color: "from-[#2d2a32] to-[#3a3640]",
      image: herrenStylingImage,
      services: [
        {
          name: "KLASSISCHER HERRENSCHNITT",
          description: "ZEITLOSE SCHNITTE MIT MODERNER PRÄZISION",
          image: herrenCutImage,
        },
        {
          name: "BART TRIMMEN & STYLEN",
          description: "PROFESSIONELLE BARTFORMUNG UND -PFLEGE",
          image: bartTrimImage,
        },
        {
          name: "HEISSES HANDTUCH RASUR",
          description: "TRADITIONELLES BARBIER-ERLEBNIS",
          image: hotTowelImage,
        },
        {
          name: "HERREN FARB-TOUCH-UP",
          description: "GRAUABDECKUNG UND FARBVERBESSERUNG",
          image: colorTouchupImage,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#201d24] font-posterama text-white mt-8">
      {/* Hero Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="mb-8 sm:mb-12 md:mb-16"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-wider md:tracking-widest px-2 sm:px-0 uppercase text-white leading-tight" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FRISEUR SERVICES IN BAD LAASPHE
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              PROFESSIONELLE HAARSCHNITTE, COLORATION & STYLING IN BAD LAASPHE
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section 
        className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 flex items-center tracking-wider md:tracking-widest uppercase leading-tight" 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 text-white flex-shrink-0" />
                DAMEN-STYLING BAD LAASPHE
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed tracking-wide uppercase" 
                 style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
                PRÄZISE SCHNITTE UND MODERNES STYLING FÜR DAMEN IN BAD LAASPHE
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 flex items-center tracking-wider md:tracking-widest uppercase leading-tight" 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>
                <Scissors className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 text-white flex-shrink-0" />
                HERREN-STYLING BAD LAASPHE
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed tracking-wide uppercase" 
                 style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
                PRÄZISE HERRENSCHNITTE UND BARTPFLEGE IN BAD LAASPHE
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8 sm:mt-12 md:mt-16"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 flex items-center tracking-wider md:tracking-widest uppercase leading-tight" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3 text-white flex-shrink-0" />
              HAAR-BEHANDLUNGEN
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed tracking-wide uppercase" 
               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
              HOCHWERTIGE PFLEGE FÜR GESUNDES, GLÄNZENDES HAAR
            </p>
          </motion.div>

          {/* Team Description */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-10 bg-[#2d2a32] rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-[#3a3640]"
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>IHR FRISEUR IN BAD LAASPHE</h2>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 tracking-wide uppercase" 
               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
              UNSER FRISEUR-TEAM IN BAD LAASPHE STEHT FÜR PROFESSIONALITÄT, KREATIVITÄT UND LEIDENSCHAFT FÜR PERFEKTE HAARE. 
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-black tracking-wide uppercase leading-relaxed" 
               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.04em' }}>
              👉 JETZT FRISEUR TERMIN IN BAD LAASPHE SICHERN
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-12 sm:gap-16 md:gap-20"
            variants={staggerContainer}
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="space-y-6 sm:space-y-8 md:space-y-12"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-30px" }}
              >
                {/* Special styling for first category */}
                {categoryIndex === 0 ? (
                  <motion.div 
                    className="text-center relative"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 md:mb-8 bg-[#2d2a32] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#3a3640]"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <category.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                    </motion.div>
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {category.title} IN BAD LAASPHE
                    </motion.h2>
                    <motion.p 
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
                      variants={fadeInUp}
                    >
                      PREMIUM FRISEUR SERVICES FÜR ANSPRUCHSVOLLE DAMEN IN BAD LAASPHE
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-center"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 md:mb-6 bg-[#2d2a32] rounded-full flex items-center justify-center shadow-xl border-2 border-[#3a3640]`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <category.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                    </motion.div>
                    <motion.h2 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 tracking-wider md:tracking-widest uppercase leading-tight" 
                      style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {category.title} BAD LAASPHE
                    </motion.h2>
                  </motion.div>
                )}

                {/* Category Hero Image */}
                <motion.div 
                  className={`relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-6 sm:mb-8 md:mb-12 ${
                    categoryIndex === 0 ? 'h-48 sm:h-64 md:h-80 lg:h-96' : 'h-40 sm:h-56 md:h-64 lg:h-80'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={category.image}
                    alt={`${category.title} FRISEUR SERVICE IN BAD LAASPHE`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: '80% 6%' }}
                    priority={categoryIndex < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <motion.div 
                      className="p-4 sm:p-6 md:p-8 lg:p-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h3 className={`${categoryIndex === 0 ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'} font-black text-white tracking-wider md:tracking-widest uppercase leading-tight`} 
                          style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}>
                        {category.title} BAD LAASPHE
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wide uppercase leading-relaxed" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.03em' }}>
                        PROFESSIONELLE FRISEUR SERVICES IN BAD LAASPHE
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-30px" }}
                >
                  {category.services.map((service, serviceIndex) => (
                    <motion.div 
                      key={serviceIndex} 
                      variants={fadeInUp}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="h-full"
                    >
                      <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 border-2 overflow-hidden bg-[#2d2a32] h-full flex flex-col ${
                        categoryIndex === 0 
                          ? 'border-[#3a3640] hover:border-white shadow-lg' 
                          : 'border-[#3a3640] hover:border-white'
                      }`}>
                        <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden flex-shrink-0">
                          <Image
                            src={service.image}
                            alt={`${service.name} FRISEUR SERVICE BAD LAASPHE`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                          />
                          <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
                            <Badge className={`bg-[#201d24] text-white transition-transform duration-200 hover:scale-105 border-2 ${
                              categoryIndex === 0 ? 'border-[#3a3640]' : 'border-[#3a3640]'
                            } text-xs sm:text-sm md:text-base tracking-wide uppercase`} 
                            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}>
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2 sm:pb-3 md:pb-4 flex-shrink-0 px-4 sm:px-6 md:px-8">
                          <CardTitle className="text-base sm:text-lg md:text-xl font-black text-white tracking-wide md:tracking-wider uppercase leading-tight" 
                                     style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                          <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed" 
                             style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.025em' }}>
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Special Packages - Increased image height */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2a32]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 md:mb-8 bg-[#201d24] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#3a3640]"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              FRISEUR PAKETE BAD LAASPHE
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
            >
              KOMPLETTE VERWANDLUNGEN ZU SONDERPREISEN IN BAD LAASPHE
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-30px" }}
          >
            {[
              {
                name: "DAS PREMIUM MAKEOVER",
                description: "KOMPLETTES PREMIUM-PAKET FÜR IHRE PERFEKTE VERWANDLUNG IN BAD LAASPHE",
                includes: ["SCHNITT & STYLE", "VOLLFARBE", "TIEFENBEHANDLUNG", "STYLING"],
                popular: false,
                image: doneImage,
              },
              {
                name: "KOMPLETT-AUFFRISCHUNG",
                description: "FRISCHE UND GLANZ FÜR IHREN LOOK IN BAD LAASPHE",
                includes: ["SCHNITT & STYLE", "HIGHLIGHTS", "FÖHNEN", "HAARMASKE"],
                popular: false,
                image: treatmentImage,
              },
              {
                name: "URBAN GENTLEMAN",
                description: "MODERNES STYLING FÜR DEN ZEITGENÖSSISCHEN MANN IN BAD LAASPHE",
                includes: ["HERRENSCHNITT", "BART TRIMMEN", "HEISSES HANDTUCH", "STYLING"],
                popular: false,
                image: manServiceImage,
              },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex">
                <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 border-2 overflow-hidden bg-[#201d24] flex flex-col h-full w-full ${
                  pkg.popular 
                    ? 'border-[#3a3640] hover:border-white shadow-lg' 
                    : 'border-[#3a3640] hover:border-white'
                }`}>
                  {/* Increased image height from h-40 to h-48, sm:h-48 to sm:h-56, md:h-56 to md:h-64 */}
                  <div className="relative h-48 sm:h-56 md:h-94 overflow-hidden flex-shrink-0">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.name} FRISEUR PAKET BAD LAASPHE`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2 sm:pb-3 md:pb-4 flex-shrink-0 px-4 sm:px-6 md:px-8">
                    <CardTitle className="text-base sm:text-lg md:text-xl font-black text-white tracking-wide md:tracking-wider uppercase leading-tight" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>
                      {pkg.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                    <p className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 tracking-wide uppercase leading-relaxed" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.025em' }}>
                      {pkg.description}
                    </p>
                    <motion.ul 
                      className="space-y-1 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {pkg.includes.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-center"
                          variants={fadeInUp}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-white text-xs sm:text-sm md:text-base tracking-wide uppercase" 
                                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                      <span className="text-sm md:text-base text-white line-through tracking-wide" 
                            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                        {/* {pkg.original} */}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full text-xs sm:text-sm md:text-base py-2 sm:py-3 md:py-4 tracking-wide md:tracking-widest uppercase ${
                          pkg.popular 
                            ? "bg-[#2d2a32] hover:bg-[#3a3640] text-white border-2 border-[#3a3640]" 
                            : "bg-[#2d2a32] hover:bg-[#3a3640] text-white border-2 border-[#3a3640]"
                        }`} 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
                      >
                        FRISEUR PAKET BUCHEN
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            FRISEUR TERMIN IN BAD LAASPHE BUCHEN
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
            variants={fadeInUp}
          >
            ERLEBEN SIE PROFESSIONELLE FRISEUR SERVICES IN BAD LAASPHE
          </motion.p>
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full xs:w-auto"
            >
              <Button
                size="lg"
                className="bg-[#2d2a32] text-white hover:bg-[#3a3640] font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl w-full xs:w-auto tracking-wide md:tracking-widest uppercase" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
              >
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                FRISEUR TERMIN VEREINBAREN
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full xs:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#3a3640] text-white hover:bg-[#3a3640] hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 bg-transparent text-base sm:text-lg md:text-xl w-full xs:w-auto tracking-wide md:tracking-widest uppercase" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
              >
                JETZT ANRUFEN
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}