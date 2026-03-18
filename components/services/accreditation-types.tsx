"use client"

import { useState } from "react"
import { Check, Users, GraduationCap, Clock, Mail } from "lucide-react"

const types = [
 {
 id:"wgsa",
 badge:"WGSA",
 title:"World Green Star Associate",
 level:"Foundation Level",
 desc:"A foundation-level accreditation for new industry entrants or non-technical built environment related professionals seeking to pursue a career in the greening of the built environment or to demonstrate competence in the fundamentals of green building.",
 suitableFor: [
"Built Environment Professionals",
"Property Managers",
"Interior Designers",
"Corporate Real Estate / Sustainability Exclusive",
"Construction Professionals",
"Sustainability-related Professionals in non-BE sectors",
"Real Estate Agents",
"Professionals and Graduates looking for career conversion",
 ],
 qualification:"Any Engineering Degree",
 experience:"Experience in Any Industry",
 course:"Attend and pass the Certification Course for World Green Star Associate (WGSA).",
 color:"from-cyan-500 to-blue-500",
 },
 {
 id:"wgsap",
 badge:"WGSAP",
 title:"World Green Star Accredited Professional",
 level:"Central",
 desc:"The central accreditation for experienced technical professionals in the built environment industry with 3-5 years' experience in World Green Star projects. Possesses a deep understanding of national environmental sustainability legislative framework and green building performance standards.",
 suitableFor: [
"Built Environment Professionals",
"Sustainability Exclusive",
"Sustainability-related Professionals",
"Green Building certified World Green Star Associate (WGSA)",
 ],
 qualification:"Building engineering or building-related degree/diploma recognised locally",
 experience:"At least 5 years relevant experience (3 years for degree holders)",
 course:"Attend and pass the Certification Course for World Green Star Associate (WGSA).",
 profiles: [
"Has more than 3 years of relevant work experience and local industry practice",
"Possesses technical proficiency in the World Green Star scheme",
"Takes the lead in integration of multi-disciplinary requirements to meet certification standards",
"Serves as the Responsible Person for submission of project applications",
"Well versed with green building, built environment sustainability trends and developments",
 ],
 color:"from-emerald-500 to-teal-500",
 },
 {
 id:"wgsaap",
 badge:"WGSAAP",
 title:"World Green Star Advanced Accredited Professional",
 level:"Top Tier",
 desc:"The top-tier accreditation for technical professionals in the built environment industry with more than 5 years of experience in WGBO projects. Possesses deep technical expertise and is able to carry out detailed design, prediction and enhancement of building performance.",
 suitableFor: [
"Built Environment Professionals",
"Sustainability Exclusive",
"Sustainability-related Professionals",
"Green Building certified World Green Star Accredited Professional (WGSAP)",
 ],
 qualification:"Building engineering or building-related degree/diploma recognised locally",
 experience:"At least 5 years relevant experience (3 years for degree holders)",
 course:"Attended and pass the Certification Course for World Green Star Accredited Professional (WGSAP).",
 profiles: [
"Has more than 5 years of relevant work experience and local industry practice",
"Has in-depth knowledge of the World Green Star scheme",
"Possesses technical expertise in various aspects of building performance analysis, including simulation tools",
"Takes the lead in integration to enhance building performance for advanced certification goals",
"Serves as the Responsible Person for submission of project applications",
"Well versed with green building, built environment sustainability trends and developments",
 ],
 color:"from-amber-500 to-orange-500",
 },
]

export function AccreditationTypes() {
 const [activeTab, setActiveTab] = useState("wgsa")
 const active = types.find((t) => t.id === activeTab)!

 return (
 <section id="accreditation" className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
 <div className="relative mx-auto max-w-7xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Accreditation
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 Accreditation Types
 </h2>
 </div>

 {/* Tabs */}
 <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
 {types.map((t) => (
 <button
 key={t.id}
 onClick={() => setActiveTab(t.id)}
 className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${activeTab === t.id
 ?"bg-primary text-white shadow-lg"
 :"bg-background text-foreground hover:bg-primary/10"
 }`}
 >
 {t.badge} — {t.level}
 </button>
 ))}
 </div>

 {/* Active Content */}
 <div className="grid gap-8 lg:grid-cols-2">
 {/* Left — Overview */}
 <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm">
 <div className="mb-4 flex items-center gap-3">
 <span className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${active.color} px-4 py-2 text-sm font-bold text-white`}>
 {active.badge}
 </span>
 <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
 {active.level}
 </span>
 </div>

 <h3 className="mb-3 text-xl font-bold text-foreground">{active.title}</h3>
 <p className="mb-6 text-sm text-muted-foreground">{active.desc}</p>

 {/* Qualifying Criteria */}
 <div className="space-y-3">
 <div className="rounded-lg bg-secondary/60 p-4">
 <p className="text-xs font-bold uppercase tracking-wider text-primary">Academic Qualification</p>
 <p className="mt-1 text-sm text-foreground">{active.qualification}</p>
 </div>
 <div className="rounded-lg bg-secondary/60 p-4">
 <p className="text-xs font-bold uppercase tracking-wider text-primary">Career History</p>
 <p className="mt-1 text-sm text-foreground">{active.experience}</p>
 </div>
 <div className="rounded-lg bg-secondary/60 p-4">
 <p className="text-xs font-bold uppercase tracking-wider text-primary">Course Requirement</p>
 <p className="mt-1 text-sm text-foreground">{active.course}</p>
 </div>
 </div>

 <a
 href="mailto:enquiry@wgbo.org.in"
 className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
 >
 <Mail className="h-4 w-4" /> enquiry@wgbo.org.in
 </a>
 </div>

 {/* Right — Who & Profiles */}
 <div className="space-y-6">
 {/* Who */}
 <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
 <h4 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
 <Users className="h-5 w-5 text-primary" /> Who is it for?
 </h4>
 <ul className="space-y-2">
 {active.suitableFor.map((s) => (
 <li key={s} className="flex items-start gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <Check className="h-3 w-3 text-primary" />
 </div>
 <span className="text-sm text-foreground">{s}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Professional Profile */}
 {active.profiles && (
 <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
 <h4 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
 <GraduationCap className="h-5 w-5 text-primary" /> Professional Profile
 </h4>
 <ul className="space-y-2">
 {active.profiles.map((p) => (
 <li key={p} className="flex items-start gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <Check className="h-3 w-3 text-primary" />
 </div>
 <span className="text-xs leading-relaxed text-muted-foreground">{p}</span>
 </li>
 ))}
 </ul>
 </div>
 )}

 {/* Project requirement (WGSAP & WGSAAP) */}
 {active.id !=="wgsa" && (
 <div className="rounded-xl bg-amber-500/5 border border-amber-400/20 p-5">
 <h4 className="mb-2 text-sm font-bold text-foreground">WGBO Project Evidence Required</h4>
 <ul className="space-y-1.5 text-xs text-muted-foreground">
 <li>• Details of involvement in WGBO project(s) with significant contribution</li>
 <li>• WGBO Project Letter of Award (within 5 years from application date)</li>
 <li>• Letter of endorsement from Developer / Building Owner on letterhead</li>
 </ul>
 </div>
 )}
 </div>
 </div>
 </div>
 </section>
 )
}
