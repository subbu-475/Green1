"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    image: "/images/event-congress-v3.jpg",
    date: "27",
    month: "NOV",
    type: "OFFLINE",
    title: "Green Building Congress 2025",
    description: "The Flagship Conference and Expo on Green Built Environment",
    location: "International Convention Center",
    dateRange: "27-11-2025 to 29-11-2025",
    featured: true,
  },
  {
    image: "/images/project-2-v3.jpg",
    date: "13",
    month: "NOV",
    type: "OFFLINE",
    title: "Green Education Conclave 2024",
    description: "Bringing together educators and industry leaders for sustainable education initiatives.",
    location: "National Conference Hall",
    dateRange: "13-11-2024",
    featured: false,
  },
  {
    image: "/images/project-3-v3.jpg",
    date: "05",
    month: "OCT",
    type: "ONLINE",
    title: "Fellow Award 2025",
    description: "Recognizing outstanding contributions to the green building movement.",
    location: "Online Event",
    dateRange: "Application Deadline: 05-10-2025",
    featured: false,
  },
]

export function EventsSection() {
  return (
    <section id="events" className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            WGBO <span className="text-primary">Events</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <Link
              key={index}
              href="#"
              className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded bg-primary px-3 py-1.5 text-center text-primary-foreground">
                  <p className="text-xl font-bold leading-none">{event.date}</p>
                  <p className="text-xs font-medium">{event.month}</p>
                </div>
                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${event.type === "ONLINE"
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground"
                    }`}
                >
                  {event.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {event.dateRange}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
