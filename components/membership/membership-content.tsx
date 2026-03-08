"use client"

import {
    Award,
    Briefcase,
    GraduationCap,
    Users,
    BadgeCheck,
    Star,
    FileSignature,
    Scale,
    CreditCard,
    Download,
    CheckCircle2
} from "lucide-react"

export function MembershipContent() {
    return (
        <div className="pt-8">


            {/* ═══ Benefits of Membership ═══ */}
            <section id="benefits" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Benefits of Membership
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 space-y-4 max-w-6xl">
                        <p>
                            The World Green Building Organization (WGBO) provides a network system to its members whereby professional assistance may be requested by an individual, organization, state, or country on a personal basis. Members needing assistance may write directly to the World Green Building Organization (WGBO) with a specific request, and we will try to link the requester with a person, organization, or resource which may be of assistance.
                        </p>
                        <p>
                            Becoming a member of World Green Building Organization (WGBO) is an exciting opportunity for organisations to showcase their commitment to sustainability and gain recognition as leaders in the green building industry.
                            By joining the World Green Building Organization (WGBO), organisations can network with like-minded professionals, collaborate on sustainability initiatives, and contribute to shaping the future of sustainable building practices.
                        </p>
                        <p>
                            We welcome organisations of any size and sector that want to make our buildings, cities and communities better places to live, work and play.
                        </p>

                        <div className="pt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                            {[
                                "Provides all members with a membership certificate for display on their office wall and an identification card.",
                                "Awards a Certificate of Honorary Membership to the corporations, companies, and other entities paying the membership and/or certification fees for their employees.",
                                "Active members receive News-Letters, Tech-Letters, and other membership publications.",
                                "Members receive a discount on the subscription for the semi-annual publication of the World Green Building Organization Journal.",
                                "Entitled to reduced fees at seminars, conferences, and classes given by the WGBO (local, regional, and international programs). When Continuing Education Units are applicable, an appropriate certificate is issued.",
                                "Members who attend conferences, seminars, and classes receive a Certificate of Attendance. For individuals attending sponsored courses, a Certificate of Completion is issued upon completion."
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md hover:border-emerald-200">
                                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                    <span className="text-[14.5px] leading-[1.5] text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Professional Membership ═══ */}
            <section id="professional" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Professional Membership
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl space-y-4">
                        <p className="font-semibold text-gray-900">
                            Become a World Green Building Organization (WGBO) Professional Member
                        </p>
                        <p>
                            Being acknowledged as a Professional Member of a Sustainability and Environment organization based upon one's education, years of knowledge, and experience in the Sustainability and Environment field is a goal for many to achieve. Not everyone has the college or university degree that is sometimes required to compete for an advanced level Sustainability and Environment Professionals Certification. Not everyone enjoys the environment of classroom training and potentially taking the computer-type exam, which doesn't always show one's true abilities in Sustainability and Environment management and/or practice.
                        </p>
                        <p>
                            There are many Sustainability and Environment Directors, Sustainability and Environment Coordinators, and Sustainability and Environment Specialists in the Sustainability and Environment arena who have many years of experience but lack the mathematical expertise to pass a specific Sustainability and Environment certification exam. However, by a submission of one's work/career credentials, résumé, professional references, Sustainability and Environment seminar certificates, Sustainability and Environment education, and several testimonies from peers showing his/her elite level, Sustainability and Environment practitioners and professionals can become a World Green Building Organization (WGBO) Professional Member upon verification and approval.
                        </p>

                        <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 my-6">
                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-emerald-600" />
                                Candidate Evaluation Form
                            </h3>
                            <p className="mb-4">
                                This membership level gives one a great opportunity to continue to gain knowledge as a member of the World Green Building Organization (WGBO), network with and learn from other members, and attend our annual Symposium featuring world-class Sustainability and Environment professionals from around the world presenting various types of Sustainability and Environment modules.
                            </p>
                            <p className="mb-4">
                                The World Green Building Organization (WGBO) Professional Members are Sustainability and Environment professionals performing full-time activities in these fields. Along with the Professional Membership Application, current résumé, and World Green Building Organization (WGBO) Code of Conduct, the following documentation is to be submitted:
                            </p>
                            <ul className="list-decimal pl-6 space-y-2 mb-4">
                                <li>Two Letters of Recommendations as to one's Sustainability and Environment abilities on the job</li>
                                <li>Two Candidate Evaluations from colleagues, associates, or peers who know of one's abilities and successes</li>
                                <li>Supporting documentation to include professional memberships, industry certifications and registrations, educational transcripts, etc.</li>
                            </ul>
                            <p>
                                Degrees should be in Sustainability, Environment, engineering, Sustainability and Environment management or other curricula acceptable to the World Green Building Organization (WGBO) Approval Board. Degrees are to be from approved and accredited colleges or universities.
                            </p>
                        </div>
                        <p>
                            To request more information and the appropriate forms for application for the World Green Building Organization (WGBO) Professional membership:
                        </p>
                        <p>
                            Membership in the World Green Building Organization (WGBO) is open to all individuals and entities involved in the Sustainability or Environment field, regardless of race, color, creed, ideology, religion, social status, sex, or political beliefs. All applicants accept that World Green Building Organization (WGBO) will conduct independent verification of employer, education, credentials, etc.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Student Membership Program ═══ */}
            <section id="student" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Student Membership Program
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl">
                        <div className="flex items-center gap-2 mb-4 text-emerald-700 font-medium">
                            <GraduationCap className="h-5 w-5" />
                            <span>Who is it for?</span>
                        </div>
                        <p className="mb-4">
                            Starting your career in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability? Student membership gives you everything you need to succeed.
                        </p>
                        <p>
                            Join if you're studying in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability or in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability apprentice.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Associate Membership ═══ */}
            <section id="associate" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Associate membership of WGBO (AMWGBO)
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl">
                        <div className="flex items-center gap-2 mb-4 text-emerald-700 font-medium">
                            <Users className="h-5 w-5" />
                            <span>Who is it for?</span>
                        </div>
                        <p className="mb-4">
                            Interested in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability but not sure where to start? Associate membership gives you everything you need to explore the profession and build your career.
                        </p>
                        <p>
                            You can join if you're interested in WGBO but don't yet have the qualifications or experience for Affiliate membership. This is your starting point if you're changing careers, working in a related role, or building experience before progressing to higher grades.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Affiliate Membership ═══ */}
            <section id="affiliate" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Affiliate Membership of WGBO (AMWGBO)
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl">
                        <div className="flex items-center gap-2 mb-4 text-emerald-700 font-medium">
                            <BadgeCheck className="h-5 w-5" />
                            <span>Who is it for?</span>
                        </div>
                        <p className="mb-4">
                            Ready to lead Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability in your organisation?
                        </p>
                        <p>
                            You can apply if you have a degree in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability and at least two years of professional experience. You'll also need to show your continuing professional development (CPD).
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Chartered Member ═══ */}
            <section id="chartered" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Chartered Member of WGBO (CMWGBO)
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl">
                        <p className="mb-4">
                            <strong>CMWGBO</strong> stands for Chartered Member of World Green Building Organization. It shows you meet professional standards in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability that are recognised internationally.
                        </p>
                        <p className="mb-4">
                            Chartered membership is for experienced professionals with at least three years in senior roles. You'll need to demonstrate professional competence and hold relevant qualifications.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 border border-emerald-100 rounded-md">
                            <Star className="h-5 w-5 text-emerald-500" />
                            <span className="font-semibold text-emerald-800">When you achieve Chartered status, you can use the CMWGBO post-nominal letters.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Chartered Professional Member ═══ */}
            <section id="chartered-professional" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                        Chartered Professional Member of WGBO (CPMWGBO)
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl">
                        <p className="mb-4">
                            <strong>CPMWGBO</strong> stands for Chartered Professional of WGBO. It's the profession's highest grade, recognising exceptional contribution and leadership in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability.
                        </p>
                        <p className="mb-4">
                            Chartered Professional status is for established leaders who have made outstanding contributions to the profession. You'll need at least five years as a Chartered Member and be able to show thought leadership, professional influence and sustained impact beyond your own organisation.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 border border-emerald-100 rounded-md">
                            <Star className="h-5 w-5 text-emerald-500" fill="currentColor" />
                            <span className="font-semibold text-emerald-800">When you achieve Chartered Professional status, you can use the CPMWGBO post-nominal letters.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Application for WGBO Membership ═══ */}
            <section id="application" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Application for WGBO Membership
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl space-y-4">
                        <p>
                            World Green Building Organization (WGBO) can assist you in an application process. You can contact <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> for further assistance.
                        </p>
                        <p>
                            Please note that ONLY full-time practitioners in the Sustainability and Environment and allied fields are eligible for the World Green Building Organization (WGBO) Affiliate Membership. Please briefly describe your present employment or enclose your resume for evaluation.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 bg-gray-900 px-5 py-3 rounded-lg border border-gray-800 text-white">
                            <FileSignature className="h-5 w-5 text-emerald-400" />
                            <span>
                                <strong className="font-semibold">Apply for membership:</strong> Just mail us at <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-300 hover:text-emerald-200 transition-colors">enquiry@wgbo.org.in</a> to get the application form and fee details.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Professional Code of Conduct ═══ */}
            <section id="conduct" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Professional Code of Conduct
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl space-y-4">
                        <p className="font-medium text-gray-800">
                            Download, print, and sign the World Green Building Organization (WGBO) Code of Conduct, and submit with your Application for Membership.
                        </p>
                        <p>
                            Members of the World Green Building Organization (WGBO), by virtue of their acceptance of membership in the World Green Building Organization (WGBO), are bound to the following Code of Ethics regarding their activities associated with the World Green Building Organization (WGBO).
                        </p>

                        <div className="mt-6 space-y-3">
                            {[
                                "Members must be responsible for ethical and professional conduct in relationships with clients, employers, associates, and the public.",
                                "Members must be responsible for professional competence in performance of all their professional activities.",
                                "Members must be responsible for the protection of professional interest, reputation, and good name of any deserving World Green Building Organization (WGBO) member or member of other professional organization involved in Sustainability and Environment or associated disciplines.",
                                "Members must be dedicated to professional development of new members in the Sustainability and Environment profession and associated disciplines.",
                                "Members must be responsible for their complete sincerity in professional service to the world.",
                                "Members must be responsible for continuing improvement and development of professional competencies in Sustainability and Environment and associated disciplines."
                            ].map((code, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <Scale className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                    <span>{code}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 mt-6 border-t border-gray-200">
                            <p className="font-medium text-gray-800">
                                Members must be responsible for their professional efforts to support the World Green Building Organization (WGBO) motto:
                            </p>
                            <p className="mt-3 text-xl font-bold font-heading text-emerald-700 italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50">
                                "Making Go Green a Way of Life . . . Worldwide"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Membership Fees ═══ */}
            <section id="fees" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Membership
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Membership Fees
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-6xl space-y-4">
                        <p>
                            All successful admission to a membership class, you may be eligible for prestigious titles such as Associate /Affiliate Member of WGBO (AMWGBO), Chartered Member of WGBO (CMWGBO) and Professional Member of WGBO (PMWGBO) after meeting additional criteria and paying the requisite fees.
                        </p>

                        <div className="inline-flex items-center gap-3 bg-emerald-50 px-5 py-4 border border-emerald-100 rounded-lg">
                            <CreditCard className="w-6 h-6 text-emerald-600 shrink-0" />
                            <span className="text-gray-800">
                                Annual Membership fees please contact World Green Building Organization (WGBO) for more details: <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> to get the latest discounted fee.
                            </span>
                        </div>

                        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                            {[
                                "Student Member of WGBO (SMWGBO)",
                                "Associate Member of WGBO (AMWGBO)",
                                "Affiliate Member of WGBO (AMWGBO)",
                                "Chartered Member of WGBO (CMWGBO)",
                                "Chartered Professional Member of WGBO (CPMWGBO)",
                                "Institutional Member",
                                "Industry / Company Member"
                            ].map((level, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span className="text-[14.5px] font-medium text-gray-800">{level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Quick Downloads ═══ */}
            <section id="downloads" className="scroll-mt-32 bg-gray-900 px-6 py-12 md:py-16 text-center">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-extrabold leading-[1.15] text-white md:text-4xl font-heading tracking-tight mb-8">
                        Quick Downloads
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                        <a href="/images/WGBO Membership Form.docx" download className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <Download className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Membership Application</span>
                        </a>
                        <a href="/images/WGBO Code-of-Conduct.docx" download className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <Download className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Code of Conduct</span>
                        </a>
                        <a href="mailto:enquiry@wgbo.org.in" className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <FileSignature className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Certification</span>
                        </a>
                    </div>

                    <p className="mt-10 text-gray-400">
                        For any further questions, you can contact our <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-400 hover:text-emerald-300 transition-colors underline">enquiry@wgbo.org.in</a>
                    </p>
                </div>
            </section>
        </div>
    )
}
