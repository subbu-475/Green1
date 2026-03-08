"use client"

import { useEffect, useRef, useState } from "react"

const footprintData = [
  { label: "Residential Dwelling Units", target: 5420 },
  { label: "Commercial Projects", target: 8382 },
  { label: "Transit Infrastructure Projects", target: 342 },
  { label: "Industrial Buildings", target: 1256 },
  { label: "Net Zero Projects", target: 189 },
  { label: "Built Environment Projects", target: 3261 },
]

function CountUp({ target }: { target: number }) {
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
            setCount(Math.floor(current))
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary md:text-5xl">
      {count.toLocaleString()}
      <span className="text-accent">+</span>
    </div>
  )
}

export function NationalFootprint() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            National <span className="text-accent">Footprint</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footprintData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm"
            >
              <CountUp target={item.target} />
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
