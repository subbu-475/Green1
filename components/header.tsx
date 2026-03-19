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
 { label:"Home", href:"/" },
 {
 label:"About",
 href:"/about",
 children: [
 { label:"Our History", href:"/about/history" },
 { label:"Our Vision", href:"/about/vision" },
 { label:"WGBO Tools", href:"/about/tools" },
 { label:"WGBO Focus", href:"/about/focus" },
 ],
 },
 {
 label:"Services",
 href:"/services",
 children: [
 { label:"Training & Learning", href:"/services/training" },
 { label:"E-Learning", href:"/services/elearning" },
 { label:"Virtual Learning", href:"/services/virtual" },
 { label:"Campaigns", href:"/services/campaigns" },
 { label:"Dairy / Calendar", href:"/services/calendar" },
 { label:"Publication", href:"/services/publication" },
 ],
 },
 {
 label:"Rating System",
 href:"/rating-system",
 children: [
 { label:"WGBO certification Scheme", href:"/rating-system/scheme" },
 { label:"WGBO Certificates Scheme and Levels", href:"/rating-system/levels" },
 { label:"WGBO Certificates Benefits", href:"/rating-system/benefits" },
 { label:"WGBO Recognition", href:"/rating-system/recognition" },
 { label:"WGBO Lab Partners", href:"/rating-system/lab-partners" },
 { label:"WGBO Certificates Validity", href:"/rating-system/validity" },
 ],
 },
 {
 label:"Membership",
 href:"/membership",
 children: [
 { label:"Benefits of Membership", href:"/membership/benefits" },
 { label:"Professional Membership", href:"/membership/professional" },
 { label:"Student Membership Program", href:"/membership/student" },
 { label:"Associate membership of WGBO (AMWGBO)", href:"/membership/associate" },
 { label:"Affiliate Membership of WGBO (AMWGBO)", href:"/membership/affiliate" },
 { label:"Chartered Member of WGBO (CMWGBO)", href:"/membership/chartered" },
 { label:"Chartered Professional Member of WGBO (CPMWGBO)", href:"/membership/chartered-professional" },
 { label:"Application for WGBO Membership", href:"/membership/application" },
 { label:"Professional Code of Conduct", href:"/membership/conduct" },
 { label:"Membership Fees", href:"/membership/fees" },
 { label:"Quick Downloads", href:"/membership/downloads" },
 ],
 },
 {
 label:"Certification",
 href:"/certification",
 children: [
 { label:"Certification Board", href:"/certification/board" },
 { label:"Professional Qualification Scheme", href:"/certification/scheme" },
 { label:"Professional Certification", href:"/certification/professional" },
 { label:"World Green Building Associate (WGBA)", href:"/certification/wgba" },
 { label:"World Green Building Accredited Professional (WGBAP)", href:"/certification/wgbap" },
 { label:"World Green Building Advanced Accredited Professional (WGBAAP)", href:"/certification/wgbaap" },
 { label:"Accreditation Benefits", href:"/certification/benefits" },
 { label:"Continuing Professional Development (CPD)", href:"/certification/cpd" },
 { label:"WGBO Policies", href:"/certification/policies" },
 { label:"Application for Certification", href:"/certification/application" },
 ],
 },
 {
 label:"Awards",
 href:"/awards",
 children: [
 { label:"Awards", href:"/awards/details" },
 { label:"Sponsorship", href:"/awards/sponsorship" },
 ],
 },
 { label:"Contact", href:"/contact" },
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
 className="rounded px-2 py-2 text-[14px] xl:px-2.5 xl: 2xl:px-4 2xl:text-base font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary whitespace-nowrap"
 >
 {item.label}
 </Link>
 )
 }

 return (
 <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
 <button
 onClick={() => setOpen(!open)}
 className="flex items-center gap-1 rounded px-2 py-2 text-[14px] xl:px-2.5 xl: 2xl:px-4 2xl:text-base font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary whitespace-nowrap"
 >
 {item.label}
 <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ?"rotate-180" :""}`} />
 </button>

 {open && (
 <div
 className={`absolute top-full z-50 mt-1 rounded-xl border border-border/60 bg-background p-2 shadow-xl shadow-black/8 ${item.children.length > 6 ?"right-0 md:-right-10 grid w-[600px] grid-cols-2 gap-x-2" :"left-0 min-w-[250px]"
 }`}
 >
 {item.children.map((child) => (
 <Link
 key={child.label}
 href={child.href}
 className="block rounded-md px-4 py-2.5 leading-snug font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
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
 <div className="flex w-full items-center justify-between px-4 py-2 xl:px-4 2xl:px-8">
 <Link href="/" className="flex items-center gap-4 shrink-0">
 <div className="flex flex-col items-center shrink-0">
 <Image
 src="/images/LOGO.png"
 alt="WGBO Logo"
 width={200}
 height={200}
 className="h-24 w-24 md:h-[130px] md:w-[130px] object-contain"
 priority
 />
 <span className="text-base font-bold text-primary font-heading md:text-xl -mt-2 md:-mt-3 leading-none">WGBO</span>
 </div>

 {/* Desktop */}
 <div className="hidden md:flex flex-col justify-center">
 <span className="text-base md:text-md lg:text-lg font-semibold leading-snug whitespace-nowrap">
 World Green Building Organization
 </span>
 </div>

 {/* Mobile */}
 <div className="flex flex-col justify-center md:hidden">
 <span className="text-sm font-semibold text-muted-foreground leading-tight whitespace-nowrap">
 World Green Building Organization
 </span>
 </div>
 </Link>




 <nav className="hidden items-center gap-0 xl:flex">
 {navItems.map((item) => (
 <DropdownItem key={item.label} item={item} />
 ))}
 </nav>

 <button
 className="rounded-md p-2 text-foreground xl:hidden"
 onClick={() => setMobileOpen(!mobileOpen)}
 aria-label={mobileOpen ?"Close menu" :"Open menu"}
 >
 {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
 </button>
 </div>

 {mobileOpen && (
 <div className="border-t bg-background px-4 pb-4 xl:hidden max-h-[calc(100vh-80px)] overflow-y-auto w-full">
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
