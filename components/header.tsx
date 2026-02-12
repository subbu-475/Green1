"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Leaf } from "lucide-react"

const navItems = [
  { label: "Home", href: "#" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Our Team", href: "#" },
      { label: "Our Mission", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    label: "Rating Systems",
    href: "#ratings",
    children: [
      {
        group: "Green Residential",
        items: [
          { label: "Green Homes", href: "#" },
          { label: "Green Societies", href: "#" },
          { label: "Green Affordable Housing", href: "#" },
        ],
      },
      {
        group: "Green Commercial",
        items: [
          { label: "Green New Buildings", href: "#" },
          { label: "Green Existing Buildings", href: "#" },
          { label: "Green Interiors", href: "#" },
          { label: "Green Healthcare", href: "#" },
        ],
      },
      {
        group: "Green Industrial",
        items: [
          { label: "Green Factory Buildings", href: "#" },
          { label: "Green Logistics Parks", href: "#" },
        ],
      },
      {
        group: "Green Built Environment",
        items: [
          { label: "Green Townships", href: "#" },
          { label: "Green Cities", href: "#" },
          { label: "Green Landscapes", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Net Zero",
    href: "#",
    children: [
      { label: "Net Zero Mission", href: "#" },
      { label: "Net Zero Energy", href: "#" },
      { label: "Net Zero Water", href: "#" },
      { label: "Net Zero Waste", href: "#" },
      { label: "Net Zero Carbon", href: "#" },
    ],
  },
  {
    label: "Membership",
    href: "#",
    children: [
      { label: "Individual Membership", href: "#" },
      { label: "Organisational Membership", href: "#" },
      { label: "Chapters", href: "#" },
    ],
  },
  {
    label: "Education",
    href: "#",
    children: [
      { label: "Training Programmes", href: "#" },
      { label: "Students", href: "#" },
      { label: "Professionals", href: "#" },
      { label: "Faculty", href: "#" },
    ],
  },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary">GreenBuild</span>
            <span className="text-xs font-medium leading-tight text-muted-foreground">Council</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && activeDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-md border bg-background p-2 shadow-lg">
                  {Array.isArray(item.children) && item.children[0] && "group" in item.children[0] ? (
                    <div className="grid grid-cols-2 gap-4 p-2" style={{ minWidth: "480px" }}>
                      {(item.children as { group: string; items: { label: string; href: string }[] }[]).map((group) => (
                        <div key={group.group}>
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-primary">
                            {group.group}
                          </p>
                          {group.items.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    (item.children as { label: string; href: string }[]).map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
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
            <div key={item.label}>
              <Link
                href={item.href}
                className="block border-b border-border/50 py-3 text-sm font-medium text-foreground"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
