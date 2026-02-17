"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Awards", href: "/awards" },
  { label: "Contact Us", href: "/contact" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/wgbo_logo.jpg"
                alt="WGBO Logo"
                width={128}
                height={128}
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-primary">WGBO</span>
                <span className="text-[10px] font-medium leading-tight text-background/60">World Green Building Organization</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              World Green Building Organization (WGBO) is the premier certification body for sustainable construction, working towards enabling a sustainable built environment for all.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>WGBO-WSO, 715-A, 7th Floor, Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu 600002</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+917200193771" className="transition-colors hover:text-primary">+91-7200193771</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@wgbo.org.in" className="transition-colors hover:text-primary">info@wgbo.org.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-background/50">
          <p>© 2025 World Green Building Organization (WGBO). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

