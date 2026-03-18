"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Users, FileCheck, Ruler } from "lucide-react"

const stats = [
 {
 icon: Users,
 value: 2380,
 suffix:"+",
 label:"Organisational Members",
 },
 {
 icon: Building2,
 value: 261,
 suffix:"+",
 label:"Founding Members",
 },
 {
 icon: FileCheck,
 value: 18850,
 suffix:"+",
 label:"Registered Projects",
 },
 {
 icon: Ruler,
 value: 15.52,
 suffix:" Billion sq.ft.",
 label:"Green Building Footprint",
 decimal: true,
 },
]

function AnimatedCounter({
 target,
 decimal,
 suffix,
}: {
 target: number
 decimal?: boolean
 suffix: string
}) {
 const [count, setCount] = useState(0)
 const ref = useRef<HTMLDivElement>(null)
 const hasAnimated = useRef(false)

 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !hasAnimated.current) {
 hasAnimated.current = true
 const duration = 2000
 const steps = 60
 const increment = target / steps
 let current = 0
 const timer = setInterval(() => {
 current += increment
 if (current >= target) {
 current = target
 clearInterval(timer)
 }
 setCount(current)
 }, duration / steps)
 }
 },
 { threshold: 0.5 }
 )

 if (ref.current) observer.observe(ref.current)
 return () => observer.disconnect()
 }, [target])

 return (
 <div ref={ref} className="text-2xl font-bold text-primary-foreground md:text-3xl">
 {decimal ? count.toFixed(2) : Math.floor(count).toLocaleString()}
 {suffix}
 </div>
 )
}

export function StatsBar() {
 return (
 <section className="bg-primary py-8">
 <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
 {stats.map((stat) => (
 <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
 <stat.icon className="h-8 w-8 text-accent" />
 <AnimatedCounter
 target={stat.value}
 decimal={stat.decimal}
 suffix={stat.suffix}
 />
 <p className="text-sm font-medium text-primary-foreground/80">{stat.label}</p>
 </div>
 ))}
 </div>
 </section>
 )
}
