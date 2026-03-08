"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero-1-v3.jpg",
    subtitle: "Powering the Nation's Green Future",
    title: "WGBO Leadership in Sustainable Construction",
    description:
      "Driving the green building movement through strategic partnerships with government bodies and industry leaders for a sustainable tomorrow.",
    cta: "Know More",
    href: "/about",
  },
  {
    image: "/images/hero-2-v3.jpg",
    subtitle: "Green Metro Systems",
    title: "Shaping Sustainable Urban Mobility",
    description:
      "Transforming urban transit infrastructure with green-certified metro systems that reduce carbon emissions and promote eco-friendly commuting.",
    cta: "Know More",
    href: "/services",
  },
  {
    image: "/images/hero-3-v3.jpg",
    subtitle: "23rd Edition",
    title: "Green Building Congress 2025",
    description:
      "International Conference and Green Expo to accelerate the green and net-zero building movement, offering a platform for discussions and showcasing solutions.",
    cta: "Know More",
    href: "/awards",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px] lg:h-[650px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
            <div
              className={`max-w-xl transition-all duration-700 ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                {slide.subtitle}
              </p>
              <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
                {slide.title}
              </h1>
              <p className="mb-6 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                {slide.description}
              </p>
              <a
                href={slide.href}
                className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {slide.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === current ? "w-8 bg-primary" : "w-2.5 bg-primary-foreground/50"
              }`}
          />
        ))}
      </div>
    </section>
  )
}
