"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Scissors, Crown, Sparkles, Palette, Gem, Users, Heart, Clock, Euro } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function PricesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const pricingData = {
    damen: [
      { name: "Dauerwelle - kurz", duration: "1 Std. 30 Min.", price: "Ab 60 €" },
      { name: "Dauerwelle - lang", duration: "1 Std. 30 Min.", price: "Ab 100 €" },
      { name: "Dauerwelle - mittel", duration: "1 Std. 30 Min.", price: "Ab 80 €" },
      { name: "Glätten / Locken", duration: "30 Min.", price: "Von 25 € bis 45 €" },
      { name: "Intensivhaarpflege", duration: "15 Min.", price: "Ab 9 €" },
      { name: "Pony schneiden", duration: "10 Min.", price: "Ab 9 €" },
      { name: "Schneiden + Föhnen - lang", duration: "30 Min.", price: "Ab 60 €" },
      { name: "Schneiden + Föhnen - kurz", duration: "30 Min.", price: "Ab 40 €" },
      { name: "Schneiden + Föhnen - mittel", duration: "30 Min.", price: "Ab 50 €" },
      { name: "Trockenhaarschnitt - kurz", duration: "30 Min.", price: "Ab 36 €" },
      { name: "Trockenhaarschnitt - lang", duration: "30 Min.", price: "Ab 52 €" },
      { name: "Trockenhaarschnitt - mittel", duration: "30 Min.", price: "Ab 43 €" },
      { name: "Waschen + Legen / Föhnen - lang", duration: "45 Min.", price: "Ab 39 €" },
      { name: "Waschen + Legen / Föhnen - mittel", duration: "40 Min.", price: "Ab 34 €" },
      { name: "Waschen + Legen / Föhnen - kurz", duration: "45 Min.", price: "Ab 29 €" },
      { name: "Waschen + Schneiden - kurz", duration: "30 Min.", price: "Ab 38 €" },
      { name: "Waschen + Schneiden - lang", duration: "30 Min.", price: "Ab 58 €" },
      { name: "Waschen + Schneiden - mittel", duration: "30 Min.", price: "Ab 48 €" },
      { name: "Waschen + Schneiden + Föhnen - kurz", duration: "30 Min.", price: "Ab 42 €" },
      { name: "Waschen + Schneiden + Föhnen - lang", duration: "30 Min.", price: "Ab 62 €" },
      { name: "Waschen + Schneiden + Föhnen - mittel", duration: "30 Min.", price: "Ab 52 €" },
    ],
    extras: [
      { name: "Hochsteckfrisur", duration: "1 Std.", price: "Ab 95 €" },
      { name: "Brautpaket", duration: "2 Std.", price: "Auf Anfrage", note: "Probemakeup / Probefrisur inklusive" },
      { name: "Flechten", duration: "30 Min.", price: "Ab 25 €" },
      { name: "Make up", duration: "45 Min.", price: "Ab 55 €" },
    ],
    farbeOhneSchnitt: [
      { name: "Ansatz färben + Waschen + Föhnen - kurz", duration: "1 Std. 10 Min.", price: "Ab 49 €" },
      { name: "Ansatz färben + Waschen + Föhnen - lang", duration: "1 Std. 20 Min.", price: "Ab 59 €" },
      { name: "Komplett färben + Waschen + Föhnen - kurz", duration: "1 Std. 30 Min.", price: "Ab 56 €" },
      { name: "Komplett färben + Waschen + Föhnen - mittel", duration: "1 Std. 30 Min.", price: "Ab 66 €" },
      { name: "Komplett färben + Waschen + Föhnen - lang", duration: "2 Std.", price: "Ab 74 €", note: "Aufpreis für je eine andere Farbe" },
      { name: "Foliensträhnen + Waschen + Föhnen - kurz", duration: "1 Std. 45 Min.", price: "Ab 75 €" },
      { name: "Foliensträhnen + Waschen + Föhnen - mittel", duration: "2 Std. 45 Min.", price: "Ab 105 €" },
      { name: "Foliensträhnen + Waschen + Föhnen - lang", duration: "2 Std. 45 Min.", price: "Ab 145 €" },
      { name: "Tönung / Glossiong + Waschen + Föhnen - kurz", duration: "1 Std.", price: "Ab 29 €" },
      { name: "Tönung + Waschen + Föhnen - mittel", duration: "1 Std. 10 Min.", price: "Ab 34 €" },
      { name: "Tönung + Waschen + Föhnen - lang", duration: "1 Std. 10 Min.", price: "Ab 42 €" },
    ],
    farbenMitSchnitt: [
      { name: "Ansatz färben + Waschen + Schneiden + Föhnen", duration: "1 Std. 30 Min.", price: "Ab 91 €" },
      { name: "Komplett färben + Waschen + Schneiden + Föhnen - kurz", duration: "1 Std. 30 Min.", price: "Ab 98 €" },
      { name: "Komplett färben + Waschen + Schneiden + Föhnen - mittel", duration: "1 Std. 45 Min.", price: "Ab 118 €" },
      { name: "Komplett färben + Waschen + Schneiden + Föhnen - lang", duration: "1 Std. 45 Min.", price: "Ab 126 €" },
      { name: "Foliensträhnen + Waschen + Schneiden + Föhnen - kurz", duration: "2 Std. 15 Min.", price: "Ab 117 €" },
      { name: "Foliensträhnen + Waschen + Schneiden + Föhnen - mittel", duration: "3 Std. 30 Min.", price: "Ab 157 €" },
      { name: "Foliensträhnen + Waschen + Schneiden + Föhnen - lang", duration: "4 Std. 30 Min.", price: "Von 207 € bis 350 €" },
      { name: "Tönung / Glossing + Waschen + Schneiden + Föhnen - kurz", duration: "1 Std. 25 Min.", price: "Ab 71 €" },
      { name: "Tönung + Waschen + Schneiden + Föhnen - mittel", duration: "1 Std. 25 Min.", price: "Ab 86 €" },
      { name: "Tönung + Waschen + Schneiden + Föhnen - lang", duration: "1 Std. 40 Min.", price: "Ab 104 €" },
      { name: "Balayage + Waschen + Schneiden + Föhnen + Pflege + Styling", duration: "4 Std. 30 Min.", price: "Von 220 € bis 380 €" },
    ],
    haarverlaengerung: [
      { name: "Beratung Bella Hair / Blond / Balayage / Farbkorrektur", duration: "30 Min.", price: "Ab 30 €", note: "Die Beratung wird bei Durchführung der Behandlung mit dem Gesamtpreis verrechnet" },
      { name: "Haarverdichtung", duration: "1 Std. 30 Min.", price: "Von 950 € bis 1200 €", note: "Haarverdichtung mit Bella Hair Extensions" },
      { name: "Haarverlängerung Bella Hair", duration: "1 Std. 30 Min.", price: "Von 1300 € bis 1600 €", note: "Haarverlängerung mit Bella Hair Extensions" },
    ],
    herren: [
      { name: "Waschen + Schneiden + Föhnen + Kopfmassage mit Haarwasser", duration: "30 Min.", price: "Ab 32 €" },
      { name: "Trockenhaarschnitt", duration: "30 Min.", price: "Ab 26 €" },
      { name: "Maschinenschnitt / nur die Seiten", duration: "20 Min.", price: "Ab 21 €" },
      { name: "Bart Schneiden", duration: "15 Min.", price: "Ab 9 €" },
      { name: "Haarentfernung mit Heißwax Ohren / Nase / Gesicht", duration: "15 Min.", price: "Ab 8 €" },
      { name: "Bart färben", duration: "30 Min.", price: "Ab 15 €" },
      { name: "Haarschnitt incl. Haarwäsche, Kopfmassage mit Haarwasser, Entfernung der Nasen und Ohrenhaare mit Heißwax, Augenbrauen zupfen / säubern und Bartrasur", duration: "1 Std.", price: "63 €" },
      { name: "Haarschnitt incl. Haarwäsche, Kopfmassage mit Haarwasser, Entfernung der Nasen und Ohrenhaare mit Heißwax, Augenbrauen zupfen / säubern OHNE Bartrasur", duration: "45 Min.", price: "53 €" },
    ],
    kinder: [
      { name: "Junge bis 12 Jahre", duration: "30 Min.", price: "Von 18 € bis 20 €" },
      { name: "Mädchen bis 12 Jahre", duration: "30 Min.", price: "Von 18 € bis 20 €" },
    ],
    kosmetik: [
      { name: "Augenbrauen färben", duration: "15 Min.", price: "15 €" },
      { name: "Augenbrauen zupfen mit Faden, Pinzette, kürzen", duration: "15 Min.", price: "15 €" },
      { name: "Augenbrauen zupfen mit Pinzette", duration: "10 Min.", price: "12 €" },
      { name: "Gesichts haarentfernung", duration: "15 Min.", price: "15 €" },
      { name: "Wimpern färben", duration: "15 Min.", price: "15 €" },
    ],
  }

  const tabs = [
    { value: "damen", label: "DAMEN", icon: Crown },
    { value: "herren", label: "HERREN", icon: Scissors },
    { value: "kinder", label: "KINDER", icon: Users },
    { value: "extras", label: "EXTRAS", icon: Sparkles },
    { value: "farbeOhneSchnitt", label: "FARBE OHNE SCHNITT", icon: Palette },
    { value: "farbenMitSchnitt", label: "FARBEN MIT SCHNITT", icon: Gem },
    { value: "haarverlaengerung", label: "HAARVERLÄNGERUNG", icon: Heart },
    { value: "kosmetik", label: "KOSMETIK", icon: Sparkles },
  ]

  const PriceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="bg-[#2d2a32] border-2 border-[#3a3640] hover:border-white transition-all duration-300">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="text-white text-sm sm:text-base md:text-lg font-black mb-1 sm:mb-2 tracking-wide uppercase" 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.03em' }}>
                {service.name}
              </h3>
              {service.note && (
                <p className="text-gray-300 text-xs sm:text-sm mb-2 tracking-wide italic" 
                   style={{ fontFamily: 'var(--font-posterama)', fontWeight: 500 }}>
                  {service.note}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wide" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700 }}>
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Euro className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-white text-xs sm:text-sm md:text-base font-black tracking-wide" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900 }}>
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="bg-[#201d24] text-white hover:bg-[#3a3640] font-black border-2 border-[#3a3640] tracking-wide text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900 }}>
                  TERMIN BUCHEN
                </Button>
              </a>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

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
              PREISE & LEISTUNGEN
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              TRANSPARENTE PREISE FÜR ALLE UNSERE FRISEUR-SERVICES IN BAD LAASPHE
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Tabs Section */}
      <motion.section 
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="damen" className="w-full">
            <div className="overflow-x-auto mb-6 sm:mb-8">
              <TabsList className="bg-[#2d2a32] border-2 border-[#3a3640] p-1.5 sm:p-2 inline-flex h-auto w-full sm:w-auto flex-wrap gap-2 sm:gap-3">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-[#201d24] data-[state=active]:text-white text-gray-300 hover:text-white border-2 border-transparent data-[state=active]:border-[#3a3640] px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-black tracking-wide uppercase transition-all duration-300 flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900 }}
                  >
                    <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-6 sm:mt-8">
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 gap-4 sm:gap-6"
                >
                  {pricingData[tab.value as keyof typeof pricingData].map((service, index) => (
                    <PriceCard key={index} service={service} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2d2a32] to-[#3a3640]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 tracking-wider uppercase text-white" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
            variants={fadeInUp}
          >
            BEREIT FÜR IHREN PERFEKTEN LOOK?
          </motion.h2>
          <motion.p 
            className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 tracking-wide uppercase leading-relaxed" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.04em' }}
            variants={fadeInUp}
          >
            BUCHEN SIE JETZT IHREN TERMIN ONLINE – 24/7 VERFÜGBAR
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto mx-auto"
            >
              <Button
                size="lg"
                className="bg-[#201d24] text-white hover:bg-[#2d2a32] font-black border-2 border-[#3a3640] tracking-widest text-base sm:text-lg md:text-xl uppercase py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-12 w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}
              >
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                TERMIN BUCHEN
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

