"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    image: "/images/project-1-v3.jpg",
    title: "Solaris Manufacturing Plant",
    certification: "WGBO Green Factory Platinum",
  },
  {
    image: "/images/project-2-v3.jpg",
    title: "Horizon Foundation School",
    certification: "WGBO Green School Gold",
  },
  {
    image: "/images/project-3-v3.jpg",
    title: "Meridian State Secretariat",
    certification: "WGBO Green New Building Gold",
  },
  {
    image: "/images/project-4-v3.jpg",
    title: "Skyline City Township",
    certification: "WGBO Green Cities Platinum",
  },
  {
    image: "/images/project-1-v3.jpg",
    title: "Apex Bank Heritage Branch",
    certification: "WGBO Green Interiors Gold",
  },
  {
    image: "/images/project-2-v3.jpg",
    title: "Greenfield Housing Colony",
    certification: "WGBO Green Residential Societies Platinum",
  },
  {
    image: "/images/project-3-v3.jpg",
    title: "Olympic Sports Arena",
    certification: "WGBO Platinum",
  },
  {
    image: "/images/project-4-v3.jpg",
    title: "Wellness Village Resort",
    certification: "WGBO Green Resort Platinum",
  },
]

export function CertifiedProjects() {
  const [start, setStart] = useState(0)
  const visible = 4

  const handleNext = () => {
    setStart((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setStart((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const visibleProjects = Array.from({ length: visible }, (_, i) => projects[(start + i) % projects.length])

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            WGBO Recent <span className="text-primary">Certified Projects</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground">{project.title}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{project.certification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
