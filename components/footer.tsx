"use client"

import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  "Rating Systems": [
    { label: "Green Residential", href: "#" },
    { label: "Green Commercial", href: "#" },
    { label: "Green Industrial", href: "#" },
    { label: "Green Built Environment", href: "#" },
    { label: "Net Zero Projects", href: "#" },
    { label: "Other Typologies", href: "#" },
  ],
  Resources: [
    { label: "Training Programmes", href: "#" },
    { label: "Accreditations", href: "#" },
    { label: "Publications", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Research Papers", href: "#" },
  ],
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Membership", href: "#" },
    { label: "Events", href: "#events" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-primary">GreenBuild</span>
                <span className="text-xs font-medium leading-tight text-background/60">Council</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              GreenBuild Council is the premier certification body for sustainable construction, working towards enabling a sustainable built environment for all.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Green Business Centre, 123 Sustainability Ave</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@greenbuildcouncil.org</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
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
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-background/50 md:flex-row">
          <p>2025 GreenBuild Council. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
