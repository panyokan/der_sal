import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Orbitron } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
  display: "swap",
})

// 🔍 CENTRALIZED METADATA FOR ALL PAGES
export const metadata: Metadata = {
  // 📝 TITLE - CENTRALIZED
  title: "Der Salon Bad Laasphe | Professioneller Friseur & Haarstyling",
  
  // 📝 DESCRIPTION - CENTRALIZED
  description: "Ihr Friseur in Bad Laasphe für Haarschnitte, Coloration & Styling. Erleben Sie Meisterhandwerk mit modernsten Techniken. Termin buchen!",
  
  // 🏷️ KEYWORDS - CENTRALIZED
  keywords: [
    "Friseur Bad Laasphe",
    "Haarschnitt Bad Laasphe", 
    "Haare schneiden Bad Laasphe",
    "Coloration Bad Laasphe",
    "Friseursalon Bad Laasphe",
    "Herrenfriseur Bad Laasphe",
    "Damenfriseur Bad Laasphe",
    "Balayage Bad Laasphe",
    "Ines Scharavin",
    "Sandra Krause",
    "Der Salon Bad Laasphe"
  ],
  
  // 👥 AUTHORS & CREATOR
  authors: [{ name: "Der Salon Bad Laasphe" }],
  creator: "Der Salon Bad Laasphe",
  publisher: "Der Salon Bad Laasphe",
  
  // 🌐 OPEN GRAPH - CENTRALIZED
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Der Salon Bad Laasphe",
    title: "Der Salon Bad Laasphe | Professioneller Friseur & Haarstyling",
    description: "Ihr Friseur in Bad Laasphe für Haarschnitte, Coloration & Styling. Erleben Sie Meisterhandwerk mit modernsten Techniken.",
    url: "https://dersalon-badlaasphe.de",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Der Salon Bad Laasphe - Professioneller Friseur & Haarstyling",
      },
    ],
  },
  
  // 🤖 ROBOTS INDEXING
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 📍 LOCAL BUSINESS INFO
  metadataBase: new URL("https://dersalon-badlaasphe.de"),

  // 🎯 FAVICON & APP ICONS
  icons: {
    icon: [
      { url: '587706645_1621290235699206_2262831370884686475_n.jpg' ,type: 'image/jpg'},
      // { url: '/favicon_16x16.png', type: 'image/png', sizes: '16x16' },
      // { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    // apple: [
    //   { url: '/apple-icon.png' },
    // ],
    // shortcut: ['/shortcut-icon.png']
  },
  
  // 🔍 ADDITIONAL SEO FIELDS
  category: "beauty",
  classification: "hair salon, beauty services",

  // 📱 MANIFEST FOR PWA
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        {/* 🎯 PRELOAD CRITICAL RESOURCES */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* 📱 PWA META TAGS */}
        <meta name="theme-color" content="#201d24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Der Salon Bad Laasphe" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      
      <body className={`${inter.variable} ${playfair.variable} ${orbitron.variable} font-sans antialiased`}>
        {/* 🏷️ JSON-LD STRUCTURED DATA FOR LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Der Salon",
              "description": "Professioneller Friseursalon in Bad Laasphe für Haarschnitte, Coloration und Styling. Meisterhandwerk mit modernsten Techniken.",
              "url": "https://dersalon-badlaasphe.de",
              "telephone": "+49-2752-2029205",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Königsstraße 34",
                "addressLocality": "Bad Laasphe",
                "postalCode": "57334",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.927516870497094",
                "longitude": "8.409153410631175"
              },
              "openingHours": [
                "Tu-Fr 09:00-18:00",
                "Sa 09:00-14:00"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Tuesday",
                    "Wednesday", 
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "€€",
              "image": "/og-image.jpg",
              "areaServed": "Bad Laasphe und Umgebung",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.927516870497094,
                  "longitude": 8.409153410631175
                },
                "geoRadius": "20000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Friseur Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Damen Haarschnitt",
                      "description": "Professioneller Damen Haarschnitt in Bad Laasphe"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Herren Haarschnitt",
                      "description": "Professioneller Herren Haarschnitt in Bad Laasphe"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Coloration",
                      "description": "Professionelle Haarfärbung in Bad Laasphe"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* ADDITIONAL LOCAL BUSINESS STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Der Salon Bad Laasphe",
              "image": "/og-image.jpg",
              "description": "Ihr professioneller Friseur in Bad Laasphe für Haarschnitte, Coloration und Styling",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Königsstraße 34",
                "addressLocality": "Bad Laasphe",
                "addressRegion": "NRW",
                "postalCode": "57334",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.927516870497094",
                "longitude": "8.409153410631175"
              },
              "url": "https://dersalon-badlaasphe.de",
              "telephone": "+4927522029205",
              "priceRange": "€€",
              "openingHours": [
                "Tu-Fr 09:00-18:00",
                "Sa 09:00-14:00"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-2752-2029205",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": ["German"]
              }
            })
          }}
        />

        {/* ORGANIZATION STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Der Salon Bad Laasphe",
              "url": "https://dersalon-badlaasphe.de",
              "logo": "https://dersalon-badlaasphe.de/logo.png",
              "description": "Professioneller Friseursalon in Bad Laasphe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Königsstraße 34",
                "addressLocality": "Bad Laasphe",
                "postalCode": "57334",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-2752-2029205",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": ["de"]
              },
              "sameAs": [
                "https://www.instagram.com/dersalon_inesscharavin/",
                "https://www.facebook.com/dersalonbadlaasphe/"
              ]
            })
          }}
        />
        
        <Navigation />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}