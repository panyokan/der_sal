"use client"

import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Star,
  Heart,
  Sparkles,
  Award,
  Users,
  Palette,
  Shield,
  Gem,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import stylist1 from "@/public/images/Owner.jpg";
import stylist2 from "@/public/images/member2.jpg";
import cu1 from "@/public/images/cu1.jpg";
import cu2 from "@/public/images/cu2.jpg";
import cu3 from "@/public/images/cu3.jpg";
import cu4 from "@/public/images/cu4.jpg";
// import cu5 from "@/public/images/cu5.jpg";
import cu6 from "@/public/images/cu6.jpg";
import cu7 from "@/public/images/cu7.jpg";
import cu8 from "@/public/images/cu8.jpg";
import cu9 from "@/public/images/cu9.jpg";
import cu10 from "@/public/images/cu10.jpg";
import cu11 from "@/public/images/cu11.jpg";
import cu12 from "@/public/images/cu12.jpg";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 300);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + 300);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    if (isClient) {
      updateScrollButtons();
      window.addEventListener('resize', updateScrollButtons);
      return () => window.removeEventListener('resize', updateScrollButtons);
    }
  }, [isClient]);

  const teamMembers = [
    {
      name: "INES SCHARAVIN",
      // role: "FRISEURMEISTERIN · COLORISTIN · BLONDEXPERTIN",
      specialties: ["BALAYAGE", "MODERNE FARBTECHNIKEN", "HERRENSTYLINGS"],
      bio: "SPEZIALISIERT AUF BALAYAGE, MODERNE FARBTECHNIKEN UND HERRENSTYLINGS. MIT LEIDENSCHAFT FÜR PRÄZISES HANDWERK UND INDIVIDUELLE LOOKS.",
      image: stylist1,
      rating: 5.0,
      reviews: 156,
    },
    {
      name: "SANDRA KRAUSE",
      // role: "SPEZIALISTIN FÜR DAMENKURZHAAR & DAUERWELLE",
      specialties: ["DAMENKURZHAAR", "DAUERWELLE", "KLASSISCHE DAMENSCHNITTE"],
      bio: "EXPERTIN FÜR KLASSISCHE DAMENSCHNITTE UND TYPGERECHTE STYLINGS. IHRE STÄRKE: PRÄZISION, ERFAHRUNG UND EIN FEINES GESPÜR FÜR DETAILS.",
      image: stylist2,
      rating: 5,
      reviews: 127,
    },
  ];

  const galleryImages = [
    cu1,
    cu2,
    cu3,
    cu4,
    // cu5,
    cu6,
    cu7,
    cu8,
    cu9,
    cu10,
    cu11,
    cu12,
  ];

  // Get card dimensions based on screen size - safe for SSR
  const getCardDimensions = () => {
    if (!isClient) {
      // Default dimensions for SSR
      return { width: '280px', height: '350px' };
    }

    const width = window.innerWidth;
    if (width >= 1024) {
      return { width: '450px', height: '560px' };
    } else if (width >= 768) {
      return { width: '400px', height: '500px' };
    } else if (width >= 640) {
      return { width: '350px', height: '440px' };
    } else {
      return { width: '280px', height: '350px' };
    }
  };

  const cardDimensions = getCardDimensions();

  return (
    <div className={`min-h-screen bg-[#201d24] font-posterama text-white`}>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest px-2 sm:px-3 md:px-4 uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              FRISEUR SERVICES IN BAD LAASPHE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-3xl sm:max-w-4xl mx-auto tracking-wider px-3 sm:px-4 md:px-0 uppercase text-white leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              PROFESSIONELLE HAARSCHNITTE, COLORATION UND STYLING IN BAD LAASPHE - IHR FRISEUR FÜR PERFEKTE ERGEBNISSE
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-3 md:px-0"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "DAMEN-STYLING",
                icon: Scissors,
                desc: "PRÄZISIONSSCHNITT-TECHNIKEN FÜR MODERNE FRAUEN IN BAD LAASPHE",
              },
              {
                title: "FARB-SERVICES",
                icon: Palette,
                desc: "EXPERTEN-FÄRBUNG VON NATÜRLICHEN TÖNEN BIS ZU MODETÖNEN",
              },
              {
                title: "HERREN-PFLEGE",
                icon: Shield,
                desc: "KLASSISCHE UND ZEITGENÖSSISCHE BARBIER-SERVICES",
              },
              {
                title: "HAAR-BEHANDLUNGEN",
                icon: Gem,
                desc: "LUXUS-BEHANDLUNGEN FÜR GESUNDES, SCHÖNES HAAR",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex">
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 border-2 border-[#2d2a32] bg-[#201d24] backdrop-blur-sm h-full flex flex-col w-full min-h-[320px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[420px]">
                  <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 text-center flex flex-col flex-grow items-center justify-center">
                    <motion.div
                      className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#2d2a32] rounded-full flex items-center justify-center mx-auto border-2 border-[#3a3640]">
                        <service.icon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
                      </div>
                    </motion.div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.08em' }}>
                      {service.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg tracking-widest uppercase leading-relaxed text-center px-1 sm:px-2" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.04em' }}>
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Preview */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest px-2 sm:px-3 md:px-4 uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              UNSER FRISEUR TEAM IN BAD LAASPHE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl tracking-widest px-3 sm:px-4 md:px-0 uppercase text-white leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              ERFAHRENE FRISEURMEISTER IN BAD LAASPHE MIT LEIDENSCHAFT FÜR HAAR-EXZELLENZ
            </p>
          </motion.div>

          <motion.div
            className="bg-[#2d2a32] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-12 md:mb-16 text-center border-2 border-[#3a3640] shadow-xl sm:shadow-2xl mx-2 sm:mx-3 md:mx-0"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#201d24] rounded-full flex items-center justify-center mx-auto border-2 border-[#3a3640] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
            </motion.div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.08em' }}>
              WARUM UNSER FRISEURSALON IN BAD LAASPHE?
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
              variants={staggerContainer}
            >
              {[
                { icon: Heart, text: "HANDWERKLICHE PERFEKTION" },
                { icon: Star, text: "AUSGEZEICHNETES TEAM" },
                { icon: Users, text: "PERSÖNLICHE BERATUNG" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640]">
                    <item.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider uppercase leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl sm:max-w-6xl mx-auto px-2 sm:px-3 md:px-0"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex">
                <Card className="group hover:shadow-xl transition-all duration-300 bg-[#2d2a32] border-2 border-[#3a3640] backdrop-blur-sm flex flex-col w-full">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center flex flex-col flex-grow">
                    {/* Responsive image size */}
                    <motion.div
                      className="relative mb-4 sm:mb-5 md:mb-6 flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden border-2 border-white shadow-lg">
                        <Image
                          src={member.image}
                          alt={`Friseur ${member.name} -  in Bad Laasphe`}
                          width={176}
                          height={176}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Responsive text sizes */}
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 md:mb-4 tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.08em' }}>
                      {member.name}
                    </h3>
                    
                    {/* Responsive bio text */}
                    <p className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 tracking-widest uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.035em' }}>
                      {member.bio}
                    </p>
                    
                    {/* Responsive specialties */}
                    <p className="text-white text-sm sm:text-base mb-3 sm:mb-4 md:mb-6 tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.035em' }}>
                      {member.specialties.join(" • ")}
                    </p>
                    
                    {/* Star rating */}
                    <div className="flex items-center justify-center space-x-1 mb-2 sm:mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
                            i < Math.floor(member.rating)
                              ? "text-white fill-current"
                              : "text-white/50"
                          }`}
                        />
                      ))}
                      <span className="text-white text-sm sm:text-base md:text-base ml-1 sm:ml-2 tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.025em' }}>
                        ({member.reviews})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Description */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 max-w-4xl sm:max-w-5xl mx-auto text-center px-3 sm:px-4 md:px-0"
            variants={fadeInUp}
          >
            <p className="text-white text-lg sm:text-xl md:text-2xl tracking-widest uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.04em' }}>
              👉 GEMEINSAM STEHEN WIR FÜR PROFESSIONALITÄT, KREATIVITÄT UND
              PERSÖNLICHE BERATUNG – DAMIT JEDER BESUCH BEI UNSEREM FRISEURSALON IN BAD LAASPHE EIN ERLEBNIS
              WIRD.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Preview - Updated with Scroll Buttons on Cards */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest px-2 sm:px-3 md:px-4 uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              FRISEUR ARBEITEN AUS BAD LAASPHE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider px-3 sm:px-4 md:px-0 uppercase text-white leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              EXZELLENZ IN HAARSTYLING UND VERWANDLUNG - IHR FRISEUR IN BAD LAASPHE
            </p>
          </motion.div>

          {/* Gallery Container with Scroll Buttons on Images */}
          <div className="relative">
            {/* Left Scroll Button - Positioned on Image Card */}
            {isClient && showLeftButton && (
              <motion.button
                onClick={scrollLeft}
                className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 md:p-5 rounded-full bg-[#201d24]/90 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-[#2d2a32] hover:border-white transition-all duration-300 shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.15, backgroundColor: "#3a3640" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </motion.button>
            )}

            {/* Right Scroll Button - Positioned on Image Card */}
            {isClient && showRightButton && (
              <motion.button
                onClick={scrollRight}
                className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 md:p-5 rounded-full bg-[#201d24]/90 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-[#2d2a32] hover:border-white transition-all duration-300 shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.15, backgroundColor: "#3a3640" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </motion.button>
            )}

            {/* Scroll Container */}
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4 sm:pb-6 md:pb-8 lg:pb-10 px-1 sm:px-2 md:px-3 lg:px-4"
              style={{ scrollBehavior: 'smooth' }}
              onScroll={updateScrollButtons}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {galleryImages.map((imageSrc, index) => (
                <motion.div
                  key={index}
                  className="group flex-shrink-0 relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-white hover:border-white/70 transition-all duration-300"
                  variants={fadeInUp}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ 
                    width: cardDimensions.width, 
                    height: cardDimensions.height
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSrc}
                      alt={`Friseur Bad Laasphe - Haarstyling Beispiel ${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-500"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                      priority={index < 2}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201d24]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 sm:p-5 md:p-6 lg:p-8 w-full">
                      <p className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                        STYLE #{index + 1}
                      </p>
                      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.035em' }}>
                        PROFESSIONELLE HAARVERWANDLUNG IN BAD LAASPHE
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient fade effects on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-[#201d24] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-l from-[#201d24] to-transparent pointer-events-none" />
          </div>

          {/* Gallery Counter */}
          <motion.div
            className="text-center mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/60 text-sm sm:text-base md:text-lg tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 600, letterSpacing: '0.03em' }}>
              {galleryImages.length} BILDER VON UNSEREN FRISEURARBEITEN
            </p>
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Optional: Add button here if needed */}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & Location */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest px-2 sm:px-3 md:px-4 uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.1em' }}>
              IHR FRISEUR IN BAD LAASPHE - DER SALON
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider px-3 sm:px-4 md:px-0 uppercase text-white leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.05em' }}>
              BESUCHEN SIE UNSEREN FRISEURSALON IN DER KÖNIGSSTRASSE 34, BAD LAASPHE FÜR PROFESSIONELLE HAARBERATUNG
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start">
            <motion.div
              className="space-y-6 sm:space-y-8 md:space-y-10 px-1 sm:px-2 md:px-0"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  title: "ADRESSE",
                  desc: "KÖNIGSSTRASSE 34 · 57334 BAD LAASPHE",
                },
                {
                  icon: Phone,
                  title: "TELEFON",
                  desc: "02752 / 2029205",
                },
                {
                  icon: Mail,
                  title: "E-MAIL",
                  desc: "INFO@DERSALON-SCHARAVIN.DE",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#2d2a32] rounded-full flex items-center justify-center border-2 border-[#3a3640] flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                      {item.title}
                    </h3>
                    <p className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.04em' }}>
                      <span className="break-words whitespace-normal max-w-full inline-block">{item.desc}</span>
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div className="pt-4 sm:pt-5 md:pt-6" variants={fadeInUp}>
                <p className="text-white text-lg sm:text-xl md:text-xl lg:text-xl tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.04em' }}>
                  SCHREIBEN SIE UNS, RUFEN SIE UNS AN ODER BUCHEN SIE DIREKT IHREN TERMIN – WIR SIND FÜR SIE DA
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-[#2d2a32] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#3a3640] backdrop-blur-sm mx-1 sm:mx-2 md:mx-0"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-5 md:mb-6 tracking-widest uppercase text-white leading-tight" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}>
                FRISEUR TERMIN IN BAD LAASPHE BUCHEN
              </h3>
              <p className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 tracking-wider uppercase leading-relaxed" style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.04em' }}>
                ERLEBEN SIE PROFESSIONELLE HAARPFLEGE IN UNSEREM ELEGANTEN, MODERNEN SALONAMBIENTE IN BAD LAASPHE.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-[#201d24] text-white hover:bg-[#2d2a32] font-black border-2 border-[#3a3640] tracking-widest text-lg sm:text-xl md:text-2xl uppercase py-4 sm:py-5 md:py-6"
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.06em' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Scissors className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3 text-white" />
                  </motion.div>
                  TERMIN BUCHEN
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}