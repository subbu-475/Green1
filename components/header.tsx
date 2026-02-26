"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Rating Systems", href: "/rating-system" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/#events" },
  { label: "Awards", href: "/awards" },
  { label: "Contact Us", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/wgbo_logo.jpg"
            alt="WGBO Logo"
            width={128}
            height={128}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary">WGBO</span>
            <span className="text-[10px] font-medium leading-tight text-muted-foreground">World Green Building Organization</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block border-b border-border/50 py-3 text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

