import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Globe,
    Send,
    Building2,
    Download,
} from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | World Green Building Organization",
    description:
        "Get in touch with WGBO. Visit our office at Spencer Plaza Mall, Chennai or reach us via phone and email.",
}

const contactInfo = [
    {
        icon: Building2,
        label: "Head Office",
        value: "WGBO-WSO, 715-A, 7th Floor, Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu 600002",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91-7200193771",
        href: "tel:+917200193771",
        color: "bg-sky-100 text-sky-700",
    },
    {
        icon: Mail,
        label: "General Enquiries",
        value: "enquiry@wgbo.org.in",
        href: "mailto:enquiry@wgbo.org.in",
        color: "bg-amber-100 text-amber-700",
    },
    {
        icon: Mail,
        label: "Awards",
        value: "awards@wgbo.org.in",
        href: "mailto:awards@wgbo.org.in",
        color: "bg-violet-100 text-violet-700",
    },
    {
        icon: Globe,
        label: "Website",
        value: "www.wgbo.org.in",
        href: "https://www.wgbo.org.in",
        color: "bg-teal-100 text-teal-700",
    },
]

const departments = [
    {
        name: "Membership & Certification",
        email: "enquiry@wgbo.org.in",
        description: "For membership applications, renewals, and certification enquiries.",
    },
    {
        name: "Training & Education",
        email: "enquiry@wgbo.org.in",
        description: "For training programmes, e-learning, and virtual learning sessions.",
    },
    {
        name: "Awards & Events",
        email: "awards@wgbo.org.in",
        description: "For sponsorship, awards nominations, and event registrations.",
    },
    {
        name: "General Support",
        email: "enquiry@wgbo.org.in",
        description: "For technical support, website issues, and general queries.",
    },
]

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-primary via-primary/90 to-emerald-800 py-20 text-primary-foreground">
                    <div className="absolute inset-0 bg-[url('/images/hero-1-v3.jpg')] bg-cover bg-center opacity-10" />
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                            <Send className="h-10 w-10" />
                        </div>
                        <h1 className="font-serif text-4xl font-bold md:text-5xl">Contact Us</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                            We&apos;d love to hear from you. Reach out to the World Green Building Organization for any enquiries.
                        </p>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                            Get In <span className="text-primary">Touch</span>
                        </h2>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.label}
                                    className="group flex items-start gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
                                >
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Departments */}
                <section className="bg-secondary py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                            Department <span className="text-primary">Directory</span>
                        </h2>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {departments.map((dept) => (
                                <div
                                    key={dept.name}
                                    className="rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                                >
                                    <h3 className="text-base font-bold text-foreground">{dept.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {dept.description}
                                    </p>
                                    <a
                                        href={`mailto:${dept.email}`}
                                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                                    >
                                        <Mail className="h-4 w-4" />
                                        {dept.email}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Office Hours & Map */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Office Details */}
                            <div className="rounded-2xl border border-border bg-background p-8 shadow-lg">
                                <h3 className="mb-6 font-serif text-xl font-bold text-foreground md:text-2xl">
                                    Office <span className="text-primary">Details</span>
                                </h3>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Address</p>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                WGBO-WSO, 715-A, 7th Floor,
                                                <br />
                                                Spencer Plaza Mall, Anna Salai,
                                                <br />
                                                Chennai, Tamil Nadu 600002, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Clock className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Office Hours</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Monday – Saturday: 9:00 AM – 6:00 PM (IST)
                                            </p>
                                            <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Call Us</p>
                                            <a
                                                href="tel:+917200193771"
                                                className="mt-1 block text-sm text-primary hover:underline"
                                            >
                                                +91-7200193771
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8394!2d80.2663!3d13.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e1f9738b03%3A0x2a5bdc3731e3e0a5!2sSpencer%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "400px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="WGBO Office Location — Spencer Plaza, Chennai"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary py-12">
                    <div className="mx-auto max-w-4xl px-4 text-center text-primary-foreground">
                        <h2 className="font-serif text-2xl font-bold md:text-3xl">
                            Ready to Make Go Green a Way of Life . . . Worldwide
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80">
                            Join the World Green Building Organization (WGBO) and be part of the global movement towards sustainable development and contribute to groundbreaking projects and initiatives that advance green building practices.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/images/WGBO Membership Form.docx"
                                download
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow transition-all hover:bg-white/90 hover:shadow-lg"
                            >
                                <Download className="h-4 w-4" />
                                Download Membership Form
                            </a>
                            <a
                                href="mailto:enquiry@wgbo.org.in"
                                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                            >
                                <Mail className="h-4 w-4" />
                                Email Us
                            </a>
                            <a
                                href="tel:+917200193771"
                                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                            >
                                <Phone className="h-4 w-4" />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
