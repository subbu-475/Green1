"use client"

const initiatives = [
  "Net Zero Carbon Buildings",
  "Green Schools Initiative",
  "Sustainable Cities Program",
  "Green Factory Movement",
  "World WGBO Partnership",
  "ESG Net Zero Program",
  "Green Education Conclave",
  "Green Township Standards",
  "Green Healthcare Initiative",
  "Green Resort Certification",
  "Green Transit Systems",
  "Affordable Housing Green Standards",
]

export function InitiativesMarquee() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            WGBO Initiatives <span className="text-primary">Catalyzing the Movement</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
            {[...initiatives, ...initiatives].map((item, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center rounded-lg border border-border bg-background px-6 py-3 shadow-sm"
              >
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
