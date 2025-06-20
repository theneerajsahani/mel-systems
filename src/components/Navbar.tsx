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
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"

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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" role="navigation" aria-label="Main navigation">
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
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 px-4 py-2 rounded-lg"
                  )}>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={cn(
                "absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
              )}
              aria-hidden="true" 
            />
            <X 
              className={cn(
                "absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300",
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
          "md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg z-40 transition-all duration-300 ease-out",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-4 space-y-2 bg-gradient-to-b from-white to-gray-50">
          {NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]",
                "border border-transparent hover:border-blue-100"
              )}
              onClick={closeMobileMenu}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}