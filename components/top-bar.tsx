"use client"

import { Phone, Mail, Facebook, Twitter, Linkedin, Youtube, User } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <Link href="tel:+1234567890" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>Call: +1 (234) 567-890</span>
          </Link>
          <Link href="mailto:info@greenbuildcouncil.org" className="hidden items-center gap-1.5 hover:opacity-80 transition-opacity sm:flex">
            <Mail className="h-3.5 w-3.5" />
            <span>info@greenbuildcouncil.org</span>
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
          <Link href="#" className="flex items-center gap-1.5 rounded bg-primary-foreground/10 px-3 py-1 hover:bg-primary-foreground/20 transition-colors">
            <User className="h-3.5 w-3.5" />
            <span>User Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
