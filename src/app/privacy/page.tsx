import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy - Jelle Vandebeeck",
    description: "Privacy policy and cookie usage information",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back to Home</span>
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-foreground-secondary text-lg">
                        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Introduction
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            This privacy policy explains how I collect, use, and protect your personal information when you visit my website.
                            I am committed to ensuring that your privacy is protected and that I comply with applicable data protection laws,
                            including the General Data Protection Regulation (GDPR).
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Information I Collect
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I collect minimal, anonymous information about your visit to understand how people use my website:
                        </p>
                        <ul className="list-disc list-inside text-foreground-secondary space-y-2 mb-4">
                            <li>Pages you visit</li>
                            <li>Your approximate location (country level)</li>
                            <li>Device type and browser information</li>
                            <li>Referring website (where you came from)</li>
                        </ul>
                        <p className="text-foreground-secondary leading-relaxed">
                            I do <strong>not</strong> collect personally identifiable information such as your name, email address,
                            or precise location unless you explicitly provide it.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Analytics
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            This website uses Vercel Analytics to collect anonymous usage data. Vercel Analytics is a privacy-friendly
                            analytics service that does not use cookies and does not track visitors across websites.
                        </p>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            No cookies are set by this website for analytics purposes, and no personally identifiable information is collected.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            How I Use Your Information
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            The anonymous information collected is used solely to:
                        </p>
                        <ul className="list-disc list-inside text-foreground-secondary space-y-2">
                            <li>Understand which pages are most popular</li>
                            <li>Improve the website&apos;s content and user experience</li>
                            <li>Identify technical issues</li>
                            <li>Track overall visitor trends (e.g., daily/monthly visitors)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Third-Party Services
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I use the following third-party service:
                        </p>
                        <div className="bg-background-secondary border border-border rounded-lg p-6">
                            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                                Vercel Analytics
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed mb-2">
                                Vercel Analytics is a privacy-friendly web analytics service provided by Vercel Inc. It collects anonymous
                                usage data without using cookies or tracking visitors across websites.
                            </p>
                            <p className="text-foreground-secondary leading-relaxed">
                                Learn more: <a
                                    href="https://vercel.com/docs/analytics/privacy-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-accent-hover underline"
                                >
                                    Vercel Analytics Privacy Policy
                                </a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Your Rights (GDPR)
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            Under GDPR, you have the following rights:
                        </p>
                        <ul className="list-disc list-inside text-foreground-secondary space-y-2">
                            <li><strong>Right to access:</strong> You can request information about the data I hold about you</li>
                            <li><strong>Right to erasure:</strong> You can request that I delete your data</li>
                            <li><strong>Right to object:</strong> You can object to the processing of your data</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Changes to This Policy
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I may update this privacy policy from time to time. Any changes will be posted on this page with an updated
                            &quot;Last updated&quot; date.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Contact
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            If you have any questions about this privacy policy or how your data is handled, please feel free to contact me
                            through the contact information on my website.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
