"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const tabs = [
  {
    id: "about",
    label: "About Us",
    content: {
      text: "World Green Building Organization (WGBO) is the premier certification body for sustainable construction, headquartered in Chennai, India. WGBO actively participates in global discussions on sustainability at COP and similar international platforms, driving the green building movement worldwide.",
      points: [
        "18,850+ projects with green footprint of over 15.52 Billion sq.ft.",
        "7,370 projects are certified & fully operational.",
      ],
    },
  },
  {
    id: "mission",
    label: "Our Mission",
    content: {
      text: "World Green Building Organization (WGBO), one of the Centres of Excellence, was conceived and designed to offer a one-stop solution on various aspects of environmental management to industry, facilitating emergence as one of the global leaders in green business.",
      points: [
        "In 2004, our headquarters earned the distinction of becoming the first platinum rated green building in the country.",
        "The Centre was inaugurated by the President, marking a historic milestone in green construction.",
      ],
    },
  },
  {
    id: "vision",
    label: "Our Vision",
    content: {
      text: "The vision of WGBO is to facilitate a sustainable built environment for all and become one of the global leaders in the sustainable built environment by 2030. In the last 2 decades, through a multi-pronged approach, WGBO has brought a paradigm shift in how buildings are conceived and designed.",
      points: [
        "Launched 32 Green and Net Zero Rating Systems for Buildings and Built Environment addressing various typologies.",
        "Representing at global forum among 90+ country councils as founding member of WorldGBC since 2004.",
      ],
    },
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("about")
  const activeContent = tabs.find((t) => t.id === activeTab)!

  return (
    <section id="about" className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            The Premier Certification Body for Greening of Projects
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div>
            {/* Tabs */}
            <div className="mb-6 flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {activeContent.content.text}
            </p>

            <ul className="space-y-3">
              {activeContent.content.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-building-v3.jpg"
                alt="Green certified headquarters building"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary p-4 text-primary-foreground shadow-lg">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
