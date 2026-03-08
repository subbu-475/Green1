"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const tabs = [
  {
    id: "history",
    label: "History",
    content: {
      heading: "WSO",
      text: "In 1975 the WSO was incorporated as a not-for-profit, non-governmental, non-religious, civic entity in the Philippines, and started to work with safety professionals around the world on the promotion of the organization, development of programs, etc. Conferences, seminars, congresses, and small classes/courses were given through the years in the Pacific Rim Countries. The purpose of the organization was to protect people, property, resources, and the environment; to promote safety; and, of course, to work toward the goal to \"Make Safety a Way of Life.\"",
      points: [],
    },
  },
  {
    id: "objectives",
    label: "Objectives",
    content: {
      heading: "",
      text: "The WSO's overall theme of \"Making Safety a Way of Life . . . Worldwide.\"",
      points: [
        "To encourage the effective exchange of information and experiences between members of the WSO.",
        "Collaborate with other international organizations in areas of mutual concern.",
        "Promote the continuous advancement of safety and accident prevention technology.",
        "Strive for a universal level of professionalism and competence among its members and all professionals and practitioners in the multi-discipline of occupational and environmental safety, health, and accident prevention.",
      ],
    },
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("history")
  const activeContent = tabs.find((t) => t.id === activeTab)!

  return (
    <section id="about" className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            About Us
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div>
            {/* Tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
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

            {activeContent.content.heading && (
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                {activeContent.content.heading}
              </h3>
            )}

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {activeContent.content.text}
            </p>

            {activeContent.content.points.length > 0 && (
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
            )}

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
              <p className="text-3xl font-bold">WSO</p>
              <p className="text-sm font-medium">Est. 1975</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
