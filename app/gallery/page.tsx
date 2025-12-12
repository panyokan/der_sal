'use client'
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter, Instagram, Heart, Share2, Eye } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { videos } from "@/lib/videos"
import { motion } from "framer-motion"

import cu1 from "@/public/images/cu1.jpg"
import cu2 from "@/public/images/cu2.jpg"
import cu3 from "@/public/images/cu3.jpg"
import cu4 from "@/public/images/cu4.jpg"
import cu5 from "@/public/images/cu5.jpg"
import cu6 from "@/public/images/cu6.jpg"
import cu7 from "@/public/images/cu7.jpg"
import cu8 from "@/public/images/cu8.jpg"
import cu9 from "@/public/images/cu9.jpg"
import cu10 from "@/public/images/cu10.jpg"
import cu11 from "@/public/images/cu11.jpg"
import cu12 from "@/public/images/cu12.jpg"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})

  // Fast animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const handleVideoClick = (videoId: number, videoElement: HTMLVideoElement) => {
    const isPlaying = playingVideos[videoId]
    
    if (isPlaying) {
      videoElement.pause()
      setPlayingVideos(prev => ({ ...prev, [videoId]: false }))
    } else {
      videoElement.play()
      setPlayingVideos(prev => ({ ...prev, [videoId]: true }))
    }
  }

  const filters = [
    { id: "all", label: "ALLE STYLES", count: 24 },
    { id: "color", label: "FARB-ZAUBER", count: 8 },
    { id: "cuts", label: "PRÄZISIONS-SCHNITTE", count: 10 },
    { id: "events", label: "BESONDERE ANLÄSSE", count: 6 },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "color",
      title: "SONNENUNTERGANG BALAYAGE",
      description: "WARME GOLDENE TÖNE MIT NATÜRLICHEN HIGHLIGHTS",
      likes: 127,
      stylist: "INES",
      image: cu1,
    },
    {
      id: 2,
      category: "cuts",
      title: "MODERNER BOB",
      description: "ELEGANTER PRÄZISIONSSCHNITT MIT SUBTILEN STUFEN",
      likes: 89,
      stylist: "INES",
      image: cu2,
    },
    {
      id: 3,
      category: "events",
      title: "BRAUT-HOCHSTECKFRISUR",
      description: "ELEGANTE HOCHZEITSFRISUR MIT BOTANISCHEN AKZENTEN",
      likes: 156,
      stylist: "INES",
      image: cu3,
    },
    {
      id: 4,
      category: "color",
      title: "BLOND OMBRÉ",
      description: "Natürliches Blond-Ombré mit fließendem Übergang und hellen Spitzen",
      likes: 203,
      stylist: "INES",
      image: cu4,
    },
    {
      id: 6,
      category: "events",
      title: "ABSCHLUSSBALL-GLAMOUR",
      description: "HOLLYWOOD-WELLEN MIT GOLDENEN HIGHLIGHTS",
      likes: 178,
      stylist: "INES",
      image: cu6,
    },
    {
      id: 7,
      category: "color",
      title: "KUPPER-HIGHLIGHTS",
      description: "SATTE KUPPERTÖNE MIT DIMENSIONALER TIEFE",
      likes: 112,
      stylist: "INES",
      image: cu7,
    },
    {
      id: 8,
      category: "cuts",
      title: "PIXIE-PERFEKTION",
      description: "KANTIGER KURZHAARSCHNITT MIT TEXTURIERTEM STYLING",
      likes: 145,
      stylist: "INES",
      image: cu8,
    },
    {
      id: 9,
      category: "events",
      title: "FESTIVAL-ZÖPFE",
      description: "BOHO-FLECHTFRISUR MIT FARBIGEN AKZENTEN",
      likes: 167,
      stylist: "INES",
      image: cu9,
    },
    {
      id: 10,
      category: "color",
      title: "PLATINBLOND",
      description: "EISBLONDE VERWANDLUNG MIT TONER",
      likes: 189,
      stylist: "INES",
      image: cu10,
    },
    {
      id: 11,
      category: "cuts",
      title: "SHAG-REVIVAL",
      description: "70ER-INSPIRIERTER SHAG MIT MODERNEM TWIST",
      likes: 134,
      stylist: "INES",
      image: cu11,
    },
    {
      id: 12,
      category: "events",
      title: "ROTER TEPPICH BEREIT",
      description: "ELEGANTE HOCHSTECKFRISUR FÜR BESONDERE ANLÄSSE",
      likes: 198,
      stylist: "INES",
      image: cu12,
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const instagramReels = [
    {
      id: 1,
      title: "HAAR-VERWANDLUNG",
      views: "12.5K",
      videoSrc: videos.hairTransformation1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "STYLING-PROZESS",
      views: "8.9K",
      videoSrc: videos.stylingProcess1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "VORHER & NACHHER",
      views: "15.2K",
      videoSrc: videos.beforeAfter1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "HAAR-STYLING ZAUBER",
      views: "6.7K",
      videoSrc: videos.stylingMagic1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
  ]

  const instagramReels1 = [
    {
      id: 1,
      title: "HAAR-VERWANDLUNG",
      views: "12.5K",
      videoSrc: videos.hairTransformation2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "STYLING-PROZESS",
      views: "8.9K",
      videoSrc: videos.stylingProcess2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "VORHER & NACHHER",
      views: "15.2K",
      videoSrc: videos.beforeAfter2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "HAAR-STYLING ZAUBER",
      views: "6.7K",
      videoSrc: videos.stylingMagic2,
      thumbnail: "/placeholder.svg?height=300&width=200",
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
        transition={{ duration: 0.4, ease: "easeOut" }}
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
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              HAAR GALERIE BAD LAASPHE
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white max-w-4xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              BEFORE/AFTER GALERIE UNSERER FRISEUR-ARBEITEN AUS BAD LAASPHE
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* First Instagram Reels Section */}
      <motion.section 
        className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#2d2a32]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640]"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
            >
              SCHAUEN SIE UNSEREN FRISEUR-EXPERTEN IN BAD LAASPHE DABEI ZU
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-30px" }}
          >
            {instagramReels1.map((reel) => (
              <motion.div 
                key={reel.id} 
                variants={fadeInUp}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer bg-[#201d24] border-2 border-[#3a3640] hover:border-white"
                >
                  <div 
                    className="relative aspect-[9/16] overflow-hidden"
                    onClick={(e) => {
                      const video = e.currentTarget.querySelector('video') as HTMLVideoElement
                      if (video) {
                        handleVideoClick(reel.id, video)
                      }
                    }}
                  >
                    <video
                      src={reel.videoSrc}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: true }))}
                      onPause={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: false }))}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-200 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-80'}`}>
                          <div className="w-0 h-0 border-l-[6px] sm:border-l-[7px] md:border-l-[10px] border-l-[#201d24] border-t-[4px] sm:border-t-[5px] md:border-t-[8px] border-t-transparent border-b-[4px] sm:border-b-[5px] md:border-b-[8px] border-b-transparent ml-0.5 sm:ml-1 md:ml-1.5"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                        <p className="text-white text-sm sm:text-base md:text-lg font-black mb-1 sm:mb-2 tracking-wide md:tracking-wider uppercase leading-tight" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>{reel.title}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-1 sm:mr-2" />
                            <span className="text-white text-xs sm:text-sm md:text-base tracking-wide uppercase" 
                                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>{reel.views} AUFRUFE</span>
                          </div>
                          <div className="text-white text-xs sm:text-sm hidden xs:block tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                            {playingVideos[reel.id] ? 'LÄUFT' : 'AUTOPLAY'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-8 sm:mt-12 md:mt-16"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-[#2d2a32] hover:bg-[#3a3640] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl tracking-wide md:tracking-widest uppercase w-full xs:w-auto" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                FOLGEN SIE @DERSALONBADLAASPHE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Tabs */}
      {/* <motion.section 
        className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#201d24] border-b-2 border-[#3a3640]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
            variants={staggerContainer}
          >
            {filters.map((filter) => (
              <motion.div
                key={filter.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="mb-2"
              >
                <Button
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`text-xs sm:text-sm md:text-base ${
                    activeFilter === filter.id
                      ? "bg-[#2d2a32] text-white border-2 border-white"
                      : "border-2 border-[#3a3640] text-white hover:bg-[#2d2a32]"
                  } px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-200 tracking-wide md:tracking-wider uppercase`} 
                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-white" />
                  {filter.label}
                  <Badge className="ml-1 sm:ml-2 md:ml-3 bg-[#3a3640] text-white text-xs sm:text-sm tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                    {filter.count}
                  </Badge>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      {/* Gallery Grid */}
      <motion.section 
        className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-30px" }}
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                variants={fadeInUp}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 border-2 border-[#3a3640] hover:border-white bg-[#2d2a32] h-full flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={`${item.title} - FRISEUR ARBEIT BAD LAASPHE`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                            <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                            <span className="text-xs sm:text-sm md:text-base tracking-wide uppercase" 
                                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>{item.likes}</span>
                          </div>
                          <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
                            <Button size="sm" variant="ghost" className="text-white hover:text-gray-300 p-1 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:text-gray-300 p-1 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
                              <Share2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-[#201d24] text-white text-xs sm:text-sm tracking-wide uppercase border-2 border-[#3a3640]" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}>
                      VON INES
                    </Badge>
                  </div>
                  <CardContent className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide md:tracking-wider uppercase leading-tight flex-shrink-0" 
                        style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>{item.title}</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg tracking-wide uppercase leading-relaxed flex-grow" 
                       style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.025em' }}>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Second Instagram Reels Section */}
      <motion.section 
        className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2a32]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6 bg-[#201d24] rounded-full flex items-center justify-center border-2 border-[#3a3640]"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
            </motion.div>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 tracking-wider md:tracking-widest uppercase leading-tight" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
            >
              FRISEUR VIDEOS AUS BAD LAASPHE
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
            >
              SCHAUEN SIE UNSEREN FRISEUR-EXPERTEN IN BAD LAASPHE DABEI ZU
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-30px" }}
          >
            {instagramReels.map((reel) => (
              <motion.div 
                key={reel.id} 
                variants={fadeInUp}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer bg-[#201d24] border-2 border-[#3a3640] hover:border-white"
                >
                  <div 
                    className="relative aspect-[9/16] overflow-hidden"
                    onClick={(e) => {
                      const video = e.currentTarget.querySelector('video') as HTMLVideoElement
                      if (video) {
                        handleVideoClick(reel.id, video)
                      }
                    }}
                  >
                    <video
                      src={reel.videoSrc}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: true }))}
                      onPause={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: false }))}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-200 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-80'}`}>
                          <div className="w-0 h-0 border-l-[6px] sm:border-l-[7px] md:border-l-[10px] border-l-[#201d24] border-t-[4px] sm:border-t-[5px] md:border-t-[8px] border-t-transparent border-b-[4px] sm:border-b-[5px] md:border-b-[8px] border-b-transparent ml-0.5 sm:ml-1 md:ml-1.5"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                        <p className="text-white text-sm sm:text-base md:text-lg font-black mb-1 sm:mb-2 tracking-wide md:tracking-wider uppercase leading-tight" 
                           style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}>{reel.title}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-1 sm:mr-2" />
                            <span className="text-white text-xs sm:text-sm md:text-base tracking-wide uppercase" 
                                  style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>{reel.views} AUFRUFE</span>
                          </div>
                          <div className="text-white text-xs sm:text-sm hidden xs:block tracking-wide uppercase" 
                               style={{ fontFamily: 'var(--font-posterama)', fontWeight: 700, letterSpacing: '0.02em' }}>
                            {playingVideos[reel.id] ? 'LÄUFT' : 'AUTOPLAY'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-8 sm:mt-12 md:mt-16"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-[#2d2a32] hover:bg-[#3a3640] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl tracking-wide md:tracking-widest uppercase w-full xs:w-auto" 
                style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
                FOLGEN SIE @DERSALONBADLAASPHE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#201d24]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-wider md:tracking-widest uppercase leading-tight" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.05em' }}
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            FRISEUR TERMIN IN BAD LAASPHE BUCHEN
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase leading-relaxed" 
            style={{ fontFamily: 'var(--font-posterama)', fontWeight: 800, letterSpacing: '0.03em' }}
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            LASSEN SIE UNS IHRE NÄCHSTE ATEMBERAUBENDE HAAR-VERWANDLUNG SCHAFFEN!
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="bg-[#2d2a32] hover:bg-[#3a3640] text-white font-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-2 border-[#3a3640] text-base sm:text-lg md:text-xl tracking-wide md:tracking-widest uppercase w-full xs:w-auto" 
              style={{ fontFamily: 'var(--font-posterama)', fontWeight: 900, letterSpacing: '0.04em' }}
            >
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-white" />
              FRISEUR TERMIN VEREINBAREN
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}