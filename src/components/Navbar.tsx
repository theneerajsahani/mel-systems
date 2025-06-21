"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"

// Navigation items for better maintainability
const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Handle scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    
    // Show navbar when at top or scrolling up, hide when scrolling down
    if (latest < previous || latest < 100) {
      setIsVisible(true)
    } else if (latest > previous && latest > 100) {
      setIsVisible(false)
      // Close mobile menu when hiding navbar
      setIsMobileMenuOpen(false)
    }
  })

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg" 
      role="navigation" 
      aria-label="Main navigation"
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="flex flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105" aria-label="Mel Systems - Home">
          <Image 
            src="/Mel-systems-logo.png" 
            alt="Mel Systems" 
            width={140}
            height={45}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-200",
                  isActive 
                    ? "text-[#4A90E2]" 
                    : "text-gray-500 hover:text-[#4A90E2] opacity-70 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={cn(
                "absolute inset-0 w-6 h-6 text-gray-900 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
              )}
              aria-hidden="true" 
            />
            <X 
              className={cn(
                "absolute inset-0 w-6 h-6 text-gray-900 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
              )}
              aria-hidden="true" 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 transition-all duration-300 ease-out",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-4 space-y-4 bg-white">
          {NAVIGATION_ITEMS.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-base font-medium transition-all duration-200",
                  isActive 
                    ? "text-[#4A90E2]" 
                    : "text-gray-500 hover:text-[#4A90E2] opacity-70 hover:opacity-100"
                )}
                onClick={closeMobileMenu}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}