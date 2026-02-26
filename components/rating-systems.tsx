"use client"

import { Home, Building2, Factory, TreePine, Zap, School, ArrowRight } from "lucide-react"
import Link from "next/link"

const ratings = [
  {
    icon: Home,
    title: "WGBO GREEN Residential",
    count: "4 Ratings",
    href: "/rating-system",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Building2,
    title: "WGBO GREEN Commercial",
    count: "8 Ratings",
    href: "/rating-system",
    color: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-100",
  },
  {
    icon: Factory,
    title: "WGBO GREEN Industrial",
    count: "2 Ratings",
    href: "/rating-system",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: TreePine,
    title: "WGBO GREEN Built Environment",
    count: "10 Ratings",
    href: "/rating-system",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    iconBg: "bg-teal-100",
  },
  {
    icon: Zap,
    title: "WGBO NET ZERO Projects",
    count: "4 Ratings",
    href: "/rating-system",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: School,
    title: "Other Building Typologies",
    count: "5 Ratings",
    href: "/rating-system",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-100",
  },
]

export function RatingSystems() {
  return (
    <section id="ratings" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            WGBO Rating Systems
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The WGBO certification scheme advances the built environment to one that is greener and more carbon-efficient while facilitating sustainable procurement. The certification ensures that sustainability is integrated throughout the design and manufacturing process of products.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ratings.map((rating) => (
            <Link
              key={rating.title}
              href={rating.href}
              className={`group flex items-center gap-4 rounded-xl border p-5 transition-all hover:shadow-lg hover:-translate-y-1 ${rating.color}`}
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${rating.iconBg}`}>
                <rating.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-base font-bold">{rating.title}</h3>
                <p className="mt-1 text-sm opacity-80">{rating.count}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/rating-system"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Rating System <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
