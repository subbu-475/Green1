"use client"

import { Zap, Droplets, Wind, Trash2 } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Energy Savings",
    stat: "66.4 Billion Units",
    description: "of Energy savings per annum",
  },
  {
    icon: Droplets,
    title: "Water Savings",
    stat: "199.3 Billion Litres",
    description: "of Water savings per annum",
  },
  {
    icon: Wind,
    title: "CO2 Reduction",
    stat: "53.1 Million Tonnes",
    description: "Reduced CO2 emissions per annum",
  },
  {
    icon: Trash2,
    title: "Waste Reduction",
    stat: "2.5 Million Tonnes",
    description: "of construction waste diverted from landfill every year",
  },
]

export function NationalBenefits() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            National <span className="text-primary">Benefits</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{benefit.title}</h3>
              <p className="text-2xl font-bold text-primary">{benefit.stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
