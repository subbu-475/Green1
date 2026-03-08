"use client"

import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"

export function ServicesContent() {
    return (
        <>
            {/* ═══ TRAINING AND LEARNING ═══ */}
            <section id="training" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Training and Learning
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />
                    <p className="mt-5 max-w-4xl text-[16.5px] leading-[1.9] text-gray-600 md:text-[17px]">
                        We provide specialised WGBO in-house training to organisations who want to train large groups of staff.
                    </p>

                    <div className="mt-10 grid gap-10 md:grid-cols-2">
                        {/* Benefits */}
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What are the benefits of in-house training?</h3>
                            <p className="mb-4 text-gray-600">In-house training allows you to:</p>
                            <ul className="space-y-3">
                                {[
                                    "Train large numbers of staff at a significantly lower per head cost",
                                    "Participate in customised training that caters to the needs of your staff and your organisation's business objectives",
                                    "Invite and engage with your key clients, suppliers and contractors to ensure you're working together with the same knowledge and understanding of Green Building.",
                                    "Learn from the most experienced industry professionals – the WGBO Faculty team and WGBO's staff",
                                    "Choose a time and location for training that suits you",
                                    "Demonstrate to your clients and stakeholders your commitment to training in sustainability",
                                    "In-house training fosters a 'team' approach to WGBO providing an opportunity for team building through learning.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-[15px] leading-[1.6] text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What we provide & What you provide */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What do we provide?</h3>
                                <ul className="space-y-3 text-[15px] leading-[1.6] text-gray-600">
                                    <li><strong className="text-gray-900">Presenter:</strong> a member of our highly experienced WGBO Faculty team will be selected, based on their skills, experience and location</li>
                                    <li><strong className="text-gray-900">Training materials:</strong> we will provide any teaching materials required for the training</li>
                                    <li><strong className="text-gray-900">Tailored content:</strong> you will have the opportunity to approach WGBO in advance to discuss your organisational training requirements, to ensure that the training provided meets your organisational objectives</li>
                                    <li><strong className="text-gray-900">CPD points:</strong> any in-house training participant who is involved in WGBO's CPD program will earn WGBO CPD points</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What do you need to provide?</h3>
                                <ul className="space-y-3 text-[15px] leading-[1.6] text-gray-600">
                                    <li><strong className="text-gray-900">Training venue:</strong> this may be your workplace or another appropriate venue as selected by you. Please note when selecting a venue that 'Green Building' venues assist in demonstrating the ethos of green building by providing a practical example of green building design and/or construction.</li>
                                    <li><strong className="text-gray-900">List of attendees</strong></li>
                                    <li><strong className="text-gray-900">Relevant AV equipment</strong></li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6">
                                <h3 className="mb-2 text-lg font-bold text-gray-900 font-heading">How much does it cost?</h3>
                                <p className="text-gray-600">Just mail us to <a href="mailto:enquiry@wgbo.org.in" className="font-medium text-emerald-600 hover:underline">enquiry@wgbo.org.in</a> to get the cost.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ E-LEARNING ═══ */}
            <section id="elearning" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO E-learning
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-gray-600">
                        Traditional methods of learning i.e class room training / coaching have limitations in terms of time and cost involvement. There is little flexibility for a working person to enhance his learning required for career advancement. Whereas, E-learning mode offers an alternative for those who cannot attend classroom training.
                    </p>

                    <p className="mt-6 font-semibold text-gray-900">The E-learning is fast becoming popular as it offers following benefits:</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3 text-center">
                        {[
                            "It is Cost Effective and Time Saving.",
                            "It is easily accessible as per participant's convenience.",
                            "It offers continuous assessment of the progress."
                        ].map((benefit, idx) => (
                            <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-center">
                                <p className="font-medium text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ VIRTUAL LEARNING ═══ */}
            <section id="virtual" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Virtual Learning
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-10 flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <p className="text-[16px] leading-[1.8] text-gray-600">
                                Our on-demand learning courses are recordings of previous live sessions. So even if you missed a webinar you can still access all the insights and information.
                            </p>

                            <h3 className="mt-6 mb-4 text-lg font-bold text-gray-900 font-heading">These courses:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Feature presentations by industry experts",
                                    "Run from 1 to 2 hours",
                                    "Award 1 or 2 World Green Building CPD points* which can be claimed as official CPD points by other institutions and affiliations",
                                    "Are updated regularly and searchable by topics",
                                    "Are categorised by themes including, World Green Buildings, Industry Standards, Social Sustainability, Energy & Carbon, Design, Finance and Case Studies",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-[15px] leading-[1.6] text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                            <div className="rounded-xl bg-emerald-50 p-6 border border-emerald-100">
                                <p className="text-sm leading-relaxed text-gray-700 font-medium">
                                    *You will need to complete the post-course online quiz to release the World Green Building CPD points. On-demand courses that do not earn CPD points are specified.
                                </p>
                            </div>
                            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6 text-center">
                                <p className="text-gray-600">To view our full on-demand course list follow the link here. You will need to sign into your WGBOA account to purchase a course.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CAMPAIGNS ═══ */}
            <section id="campaigns" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Campaigns
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-gray-600">
                        Green building campaigns promote environmentally responsible, resource-efficient, and sustainable construction to combat climate change, reduce energy consumption, and improve occupant health. Major initiatives like World Green Building Week focus on accelerating net-zero, resilient, and sustainable infrastructure to meet global climate goals.
                    </p>
                </div>
            </section>

            {/* ═══ DAIRY / CALENDAR ═══ */}
            <section id="calendar" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Dairy / Calendar
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-gray-600">
                        WGBO is promoting Green Building at the national level by using various means such as Star Rating, conferences, training programmes, publications, posters, yearly calendar, campaigns, etc. from its inception and added new means from time to time.
                    </p>
                </div>
            </section>

            {/* ═══ PUBLICATION ═══ */}
            <section id="publication" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Services
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Publication
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-gray-600">
                        The purpose of the newsletter of Green Building is to present the very best peer-reviewed research for the sustainable built environment at the building, community, neighborhood and urban scale. As such, the newsletter's coverage includes green building design and construction, community and urban planning, green building policy and developmental studies, building engineering and technological innovation, facilities management, building information modeling, occupant behavior and sustainable landscape development.
                    </p>
                </div>
            </section>
        </>
    )
}
