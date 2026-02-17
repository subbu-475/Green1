"use client"

import { Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <Link href="tel:+917200193771" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>Call: +91-7200193771</span>
          </Link>
          <Link href="mailto:info@wgbo.org.in" className="hidden items-center gap-1.5 hover:opacity-80 transition-opacity sm:flex">
            <Mail className="h-3.5 w-3.5" />
            <span>info@wgbo.org.in</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 sm:flex">
            <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
