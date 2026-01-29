"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
        // Reload to initialize analytics
        window.location.reload();
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-6xl mx-auto bg-background border border-border rounded-2xl shadow-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
                                    Cookie Consent
                                </h3>
                                <p className="font-body text-sm md:text-base text-foreground-secondary leading-relaxed">
                                    We use cookies to analyze site traffic and improve your experience.
                                    By accepting, you agree to our use of cookies for analytics.{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-accent hover:text-accent-hover underline transition-colors"
                                    >
                                        Learn more
                                    </Link>
                                </p>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 md:flex-none px-6 py-2.5 rounded-lg font-medium text-sm border border-border bg-background-secondary hover:bg-background-tertiary text-foreground-secondary transition-colors"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 md:flex-none px-6 py-2.5 rounded-lg font-medium text-sm bg-accent hover:bg-accent-hover text-white transition-colors"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
