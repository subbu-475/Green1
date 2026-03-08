"use client"

import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"

export function RatingContent() {
    return (
        <div className="pt-8">
            {/* Title Section */}
            <section className="bg-white px-6 pb-4 md:pb-8 pt-4">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-3xl font-extrabold leading-tight text-emerald-700 md:text-5xl font-heading tracking-tight mb-4">
                        Rating System
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">
                        Rating System for building design and construction, operation, fitouts and communities
                    </p>
                </div>
            </section>

            {/* ═══ WGBO certification Scheme ═══ */}
            <section id="scheme" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO certification Scheme
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 space-y-4 max-w-5xl">
                        <p>
                            The WGBO certification Scheme advances the built environment to one that is greener and more carbon-efficient while facilitating sustainable procurement. The certification ensures that sustainability is integrated throughout the design and manufacturing process of products.
                        </p>
                        <p>
                            While the WGBO INDIA is the owner of the WGBO certification Scheme, its wholly owned subsidiary, WGBO is the certification body responsible for the evaluation of WGBO applications. Stakeholders may reach out to WGBO at <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> to request for any of the following information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
                            <li>Information about the WGBO certification scheme, certification procedures and fee structures.</li>
                            <li>Procedures for granting, maintaining, extending or reducing the scope of, suspending, withdrawing or refusing certification.</li>
                            <li>Information related to the requirements, restrictions or limitations on the use of the WGBO mark, and methods to refer to the WGBO certification granted.</li>
                            <li>Information about procedures for handling complaints and appeals, as well as how to submit one.</li>
                        </ul>
                    </div>

                    <div className="mt-8 rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">Key Aspects of World Green Building Organization (WGBO) Certification</h3>
                        <div className="space-y-4 text-[15.5px] leading-[1.7] text-gray-600">
                            <p>
                                <strong className="text-gray-900">Purpose:</strong> To promote sustainable, environmentally friendly, and energy-efficient building practices.
                            </p>
                            <p>
                                <strong className="text-gray-900">Applicability:</strong> Applies to almost all project types, including new construction, interior fit-outs, existing building operations, homes, and neighborhoods.
                            </p>
                            <p>
                                <strong className="text-gray-900">Categories Evaluated:</strong> Projects are assessed on location and transportation, sustainable sites, water efficiency, energy and atmosphere, materials and resources, indoor environmental quality, and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WGBO Certificates Scheme and Levels ═══ */}
            <section id="levels" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Certificates Scheme and Levels
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 space-y-4 max-w-5xl">
                        <p>
                            The WGBO Certification Scheme is a certification for green building product, and evaluates the sustainability performance of these products based on scientific and engineering principles. It is a voluntary certification scheme with a tiered rating system of one of Five levels, where a higher rating indicates better sustainability performance.
                        </p>
                        <p>
                            Based on the number of points earned, projects achieve one of Five levels:
                        </p>

                        <div className="overflow-x-auto my-6 border border-gray-100 rounded-xl rounded-t-xl overflow-hidden shadow-sm">
                            <table className="w-full text-left bg-white text-sm">
                                <thead className="bg-emerald-50 border-b border-emerald-100">
                                    <tr>
                                        <th className="px-5 py-4 font-bold text-emerald-800">Star Rating</th>
                                        <th className="px-5 py-4 font-bold text-emerald-800">Certificate level</th>
                                        <th className="px-5 py-4 font-bold text-emerald-800">Credit Points</th>
                                        <th className="px-5 py-4 font-bold text-emerald-800">Recognition</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3 font-semibold text-gray-900">1</td>
                                        <td className="px-5 py-3">Certificate</td>
                                        <td className="px-5 py-3">30–40</td>
                                        <td className="px-5 py-3">Good Performance</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3 font-semibold text-gray-900">2</td>
                                        <td className="px-5 py-3">Bronze</td>
                                        <td className="px-5 py-3">41–50</td>
                                        <td className="px-5 py-3">Very Good Performance</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3 font-semibold text-gray-900">3</td>
                                        <td className="px-5 py-3">Silver</td>
                                        <td className="px-5 py-3">51–70</td>
                                        <td className="px-5 py-3">Outstanding Performance</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3 font-semibold text-gray-900">4</td>
                                        <td className="px-5 py-3">Gold</td>
                                        <td className="px-5 py-3">71–90</td>
                                        <td className="px-5 py-3">National Excellence</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3 font-semibold text-gray-900">5</td>
                                        <td className="px-5 py-3 text-emerald-700 font-semibold">Platinum</td>
                                        <td className="px-5 py-3">91 -100</td>
                                        <td className="px-5 py-3 text-emerald-700 font-medium">National Leadership</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">WGBO Certificates Process:</h3>
                            <p className="text-gray-700 font-medium mb-3">
                                Invoice Issued and Payment &gt; Submit application &gt; Evaluation &gt; Peer Review &gt; Acknowledgement of points and certificate level &gt; User Agreement &gt; Issuance of Certificate
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                                <li>Project teams must meet mandatory prerequisites and select optional credits to earn points.</li>
                                <li>The time taken to complete the certification process varies and depends on how well-prepared companies are with the required test reports and other documentary evidences.</li>
                            </ul>
                            <p className="mt-4 font-semibold text-gray-800">Our statistics currently indicate the following duration that companies take to compile and submit documents to fulfil certification criteria requirements:</p>
                            <ul className="list-none space-y-1 mt-2 text-gray-700">
                                <li><strong>Average:</strong> 3.00 months</li>
                                <li><strong>Shortest:</strong> 2.0 weeks</li>
                                <li><strong>Longest:</strong> 12.00 months</li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 mt-6">
                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">WGBO Certificates Criteria</h3>
                            <p className="text-gray-700">
                                To ensure that the criteria are kept up to date with the technological advances in the industry and to stay relevant to market needs, WGBO continuously reviews, make improvements and adjustments to the criteria. Please reach out to <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> with information of the representative's name, email address, designation, company name and contact number.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WGBO Certificates Benefits ═══ */}
            <section id="benefits" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Certificates Benefits
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-5xl">
                        <p className="mb-6">
                            Once a product is certified, WGBO will issue the product a certificate. Only certified products will be listed on the WGBO Certification Directory, which is maintained on the World Green Building Organization's (WGBO) website. This Interactive Directory is actively used by building industry professionals such as consultants, contractors, building developers and owners. Stakeholders can demand that products/ materials used for a building are WGBO certified. Certified products can gain credits under various green building rating tools.
                        </p>
                        <p className="mb-6 font-semibold text-emerald-700 text-lg">
                            Lower operating costs, reduced carbon footprints, enhanced health for occupants, and higher property values.
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                            {[
                                "Analysis of your product's sustainability performance by experts and certification by a credible source",
                                "Opportunity and insight into how to further develop your products to be more sustainable",
                                "Greater awareness of your product for use in our current and future buildings",
                                "An overview of products that are certified sustainable",
                                "An understanding of how a product stacks up against others in terms of their sustainability performance",
                                "Easier decision-making when choosing more sustainable products",
                                "Data around the environmental properties of the products you use",
                                "A unique selling point for your building projects",
                                "An understanding of how sustainable the spaces you live and work in are"
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

            {/* ═══ WGBO Recognition ═══ */}
            <section id="recognition" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        World Green Building Organization (WGBO) Recognition
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-4xl space-y-4">
                        <p>
                            The WGBO certification scheme is one of the key standards and benchmarks for green building products in the building and construction industry. Products and materials certified by the WGBO are highly recognised in national.
                        </p>
                        <p>
                            WGBO Certification Scheme is also widely accepted by green building rating tools for its coverage of product's sustainability performance.
                        </p>
                        <p className="font-semibold text-gray-900 border-l-4 border-emerald-500 pl-4 py-1">
                            World Green Building Organization (WGBO) Certification serves as a nationally recognized symbol of sustainability achievement and leadership in the construction industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ WGBO Lab Partners ═══ */}
            <section id="lab-partners" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Lab Partners
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-5xl space-y-6">
                        <p>
                            As part of the World Green Building Organization (WGBO) certification process, applicants will need to have their product(s) independently tested and assessed by an accredited third-party testing laboratory. To reduce time and effort in identifying appropriate laboratories, WGBO works with a number of such testing laboratories that can provide the necessary testing and calibration services.
                        </p>

                        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm mt-6">
                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Join us a WGBO Lab Partner</h3>
                            <p className="mb-4">
                                If you are a testing laboratory that can provide a range of product testing services not limited to Product U-Value, Acoustic Testing, Noise Emission Testing, Thermal Insulation Testing, etc., join us as a WGBO Lab Partner.
                            </p>
                            <p className="mb-4">
                                Once onboard, WGBO will direct Certification Applicants to WGBO Lab Partners to perform the necessary testing for their certifying product(s).
                            </p>

                            <h4 className="font-semibold text-gray-900 mb-2">To be a WGBO Lab Partner, you need to:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span>Be a Corporate Member of WGBO</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span>Share with WGBO your available testing and related services</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span>Actively participate in WGBO Technical Work Groups</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WGBO Certificates Validity ═══ */}
            <section id="validity" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Rating System
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        WGBO Certificates Validity
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                    <div className="mt-6 bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 max-w-3xl flex items-start gap-4">
                        <Clock className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                        <p className="text-[16px] leading-[1.8] text-gray-700 font-medium">
                            WGBO certificates are valid for one (1) year from the date of issuance and may be renewed for a period of one (1) year thereafter. Further there is no extension of validity period.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
