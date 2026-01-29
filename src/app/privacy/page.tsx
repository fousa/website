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
                            I collect minimal information about your visit to understand how people use my website:
                        </p>
                        <ul className="list-disc list-inside text-foreground-secondary space-y-2 mb-4">
                            <li>Pages you visit and time spent on each page</li>
                            <li>Your approximate location (country/city level)</li>
                            <li>Device type and browser information</li>
                            <li>Referring website (where you came from)</li>
                        </ul>
                        <p className="text-foreground-secondary leading-relaxed">
                            I do <strong>not</strong> collect personally identifiable information such as your name, email address,
                            or precise location unless you explicitly provide it (e.g., through a contact form).
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Cookies and Tracking
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I use Google Analytics to understand how visitors interact with my website. Google Analytics uses cookies
                            to collect anonymous information about your visit.
                        </p>
                        <div className="bg-background-secondary border border-border rounded-lg p-6 mb-4">
                            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                                What are cookies?
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                Cookies are small text files stored on your device that help websites remember information about your visit.
                                They do not contain personal information and cannot harm your device.
                            </p>
                        </div>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            <strong>You have full control:</strong> You can accept or decline cookies through the cookie consent banner.
                            If you decline, no tracking cookies will be set, and Google Analytics will not be loaded.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            How I Use Your Information
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            The information collected through Google Analytics is used solely to:
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
                                Google Analytics
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed mb-2">
                                Google Analytics is a web analytics service provided by Google LLC. It helps me understand how visitors
                                use my website.
                            </p>
                            <p className="text-foreground-secondary leading-relaxed">
                                Learn more: <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-accent-hover underline"
                                >
                                    Google Privacy Policy
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
                            <li><strong>Right to withdraw consent:</strong> You can change your cookie preferences at any time</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Data Retention
                        </h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            Google Analytics data is retained for 26 months by default. After this period, the data is automatically deleted.
                            You can clear your cookie consent at any time by clearing your browser&apos;s local storage.
                        </p>
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
