"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activePath, setActivePath] = useState("/")

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/team", label: "Über uns" },
    { href: "/services", label: "Leistungen" },
    { href: "/prices", label: "Preise" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Kontakt" },
  ]

  useEffect(() => {
    // Set active path based on current URL
    setActivePath(window.location.pathname)
  }, [])

  const handleNavClick = (path: string) => {
    setActivePath(path)
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[#201d24] backdrop-blur-md shadow-lg border-b border-gray-800 transition-all duration-1000 ease-in-out"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 font-posteramaBold">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight flex items-center text-white"
              whileHover={{ scale: 1.05 }}
            >
              <p className="pr-0.5 sm:pr-1">DE</p>
              <p>R SALON</p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="transition-colors duration-300 ease-in-out font-black relative tracking-wide"
                >
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative text-sm lg:text-base ${
                      activePath === item.href ? "text-white" : "text-gray-200 hover:text-gray-300"
                    }`}
                  >
                    {item.label}
                    {activePath === item.href && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                        layoutId="activeIndicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <a
                href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gray-800 text-white hover:bg-gray-700 font-black border border-gray-600 tracking-wide text-xs sm:text-sm w-full px-3 sm:px-4 py-1.5 sm:py-2">
                    Termin buchen
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Tablet Navigation - Reduced spacing for tablets */}
          <div className="hidden sm:flex md:hidden items-center space-x-4">
            {navItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="transition-colors duration-300 ease-in-out font-black relative tracking-wide"
                >
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative text-xs ${
                      activePath === item.href ? "text-white" : "text-gray-200 hover:text-gray-300"
                    }`}
                  >
                    {item.label}
                    {activePath === item.href && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                        layoutId="activeIndicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <a
                href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gray-800 text-white hover:bg-gray-700 font-black border border-gray-600 tracking-wide text-xs w-full px-2 py-1.5">
                    Termin
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="hover:text-gray-300 text-white w-8 h-8">
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 border-gray-800 w-full xs:w-80">
              <motion.div className="flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`transition-colors duration-200 text-base sm:text-lg font-black block tracking-wide relative ${
                        activePath === item.href ? "text-white" : "text-gray-200 hover:text-gray-300"
                      }`}
                    >
                      <motion.span whileHover={{ scale: 1.05, x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                        {item.label}
                      </motion.span>
                      {activePath === item.href && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.3 }}>
                  <a
                    href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gray-800 text-white hover:bg-gray-700 font-black mt-2 sm:mt-4 border border-gray-600 tracking-wide text-sm sm:text-base w-full py-2 sm:py-3">
                        Termin buchen
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>

          {/* Tablet Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="hidden sm:flex md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="hover:text-gray-300 text-white w-9 h-9">
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 border-gray-800 w-full sm:w-96">
              <motion.div className="flex flex-col space-y-6 mt-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`transition-colors duration-200 text-lg font-black block tracking-wide relative ${
                        activePath === item.href ? "text-white" : "text-gray-200 hover:text-gray-300"
                      }`}
                    >
                      <motion.span whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                        {item.label}
                      </motion.span>
                      {activePath === item.href && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.3 }}>
                  <a
                    href="https://www.planity.com/de-DE/der-salon-57334-bad-laasphe"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gray-800 text-white hover:bg-gray-700 font-black mt-4 border border-gray-600 tracking-wide text-base w-full py-3">
                        Termin buchen
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}