"use client"

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Globe,
    Building2,
    Download,
} from "lucide-react"

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
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Mail,
        label: "General Enquiries",
        value: "enquiry@wgbo.org.in",
        href: "mailto:enquiry@wgbo.org.in",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Mail,
        label: "Awards",
        value: "awards@wgbo.org.in",
        href: "mailto:awards@wgbo.org.in",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Globe,
        label: "Website",
        value: "www.wgbo.org.in",
        href: "https://www.wgbo.org.in",
        color: "bg-emerald-100 text-emerald-700",
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

export function ContactContent() {
    return (
        <div className="pt-8">


            {/* ═══ Get In Touch ═══ */}
            <section id="get-in-touch" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Contact
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Get In Touch
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {contactInfo.map((item) => (
                            <div
                                key={item.label}
                                className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                            >
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                                >
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="mt-1 block text-sm font-medium text-gray-900 transition-colors hover:text-emerald-700"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-sm font-medium text-gray-900">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Department Directory ═══ */}
            <section id="departments" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Contact
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Department Directory
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {departments.map((dept) => (
                            <div
                                key={dept.name}
                                className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                            >
                                <h3 className="text-[17px] font-bold text-gray-900 font-heading">{dept.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    {dept.description}
                                </p>
                                <a
                                    href={`mailto:${dept.email}`}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
                                >
                                    <Mail className="h-4 w-4" />
                                    {dept.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Office Location & Map ═══ */}
            <section id="location" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Contact
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Office Location
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-8 grid gap-8 lg:grid-cols-2">
                        {/* Office Details */}
                        <div className="space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                                    <MapPin className="h-6 w-6 text-emerald-700" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Address</p>
                                    <p className="mt-2 leading-relaxed text-gray-900 font-medium">
                                        WGBO-WSO, 715-A, 7th Floor,
                                        <br />
                                        Spencer Plaza Mall, Anna Salai,
                                        <br />
                                        Chennai, Tamil Nadu 600002, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                                    <Clock className="h-6 w-6 text-emerald-700" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Office Hours</p>
                                    <p className="mt-2 text-gray-900 font-medium">
                                        Monday – Saturday: 9:00 AM – 6:00 PM (IST)
                                    </p>
                                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8394!2d80.2663!3d13.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e1f9738b03%3A0x2a5bdc3731e3e0a5!2sSpencer%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "350px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="WGBO Office Location — Spencer Plaza, Chennai"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
