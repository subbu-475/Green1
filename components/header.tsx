"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our History", href: "/about#history" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "WGBO Tools", href: "/about#tools" },
      { label: "WGBO Focus", href: "/about#focus" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Training & Learning", href: "/services#training" },
      { label: "E-Learning", href: "/services#elearning" },
      { label: "Virtual Learning", href: "/services#virtual" },
      { label: "Campaigns", href: "/services#campaigns" },
      { label: "Dairy / Calendar", href: "/services#calendar" },
      { label: "Publication", href: "/services#publication" },
    ],
  },
  {
    label: "Rating System",
    href: "/rating-system",
    children: [
      { label: "WGBO certification Scheme", href: "/rating-system#scheme" },
      { label: "WGBO Certificates Scheme and Levels", href: "/rating-system#levels" },
      { label: "WGBO Certificates Benefits", href: "/rating-system#benefits" },
      { label: "WGBO Recognition", href: "/rating-system#recognition" },
      { label: "WGBO Lab Partners", href: "/rating-system#lab-partners" },
      { label: "WGBO Certificates Validity", href: "/rating-system#validity" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Benefits of Membership", href: "/membership#benefits" },
      { label: "Professional Membership", href: "/membership#professional" },
      { label: "Student Membership Program", href: "/membership#student" },
      { label: "Associate membership of WGBO (AMWGBO)", href: "/membership#associate" },
      { label: "Affiliate Membership of WGBO (AMWGBO)", href: "/membership#affiliate" },
      { label: "Chartered Member of WGBO (CMWGBO)", href: "/membership#chartered" },
      { label: "Chartered Professional Member of WGBO (CPMWGBO)", href: "/membership#chartered-professional" },
      { label: "Application for WGBO Membership", href: "/membership#application" },
      { label: "Professional Code of Conduct", href: "/membership#conduct" },
      { label: "Membership Fees", href: "/membership#fees" },
      { label: "Quick Downloads", href: "/membership#downloads" },
    ],
  },
  {
    label: "Certification",
    href: "/certification",
    children: [
      { label: "Certification Board", href: "/certification#board" },
      { label: "Professional Qualification Scheme", href: "/certification#scheme" },
      { label: "Professional Certification", href: "/certification#professional" },
      { label: "World Green Building Associate (WGBA)", href: "/certification#wgba" },
      { label: "World Green Building Accredited Professional (WGBAP)", href: "/certification#wgbap" },
      { label: "World Green Building Advanced Accredited Professional (WGBAAP)", href: "/certification#wgbaap" },
      { label: "Accreditation Benefits", href: "/certification#benefits" },
      { label: "Continuing Professional Development (CPD)", href: "/certification#cpd" },
      { label: "WGBO Policies", href: "/certification#policies" },
      { label: "Application for Certification", href: "/certification#application" },
    ],
  },
  {
    label: "Awards",
    href: "/awards",
    children: [
      { label: "Awards", href: "/awards#awards" },
      { label: "Sponsorship", href: "/awards#sponsorship" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
]

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded px-3 py-2 text-base font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary lg:px-4"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded px-3 py-2 text-base font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary lg:px-4"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute top-full z-50 mt-1 rounded-xl border border-border/60 bg-background p-2 shadow-xl shadow-black/8 ${item.children.length > 6 ? "right-0 md:-right-10 grid w-[600px] grid-cols-2 gap-x-2" : "left-0 min-w-[250px]"
            }`}
        >
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block rounded-md px-4 py-2.5 text-[15px] leading-snug font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/LOGO.png"
            alt="WGBO Logo"
            width={128}
            height={128}
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-tight text-primary font-heading md:text-3xl">WGBO</span>
            {/* <span className="text-xs font-semibold leading-tight text-muted-foreground md:text-sm">World Green Building Organization</span> */}
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <DropdownItem key={item.label} item={item} />
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block border-b border-border/50 py-3 text-sm font-semibold text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block border-b border-border/30 py-2.5 text-sm text-muted-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
