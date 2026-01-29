"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
    const [consent, setConsent] = useState<boolean | null>(null);
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const isDevelopment = process.env.NODE_ENV === "development";

    useEffect(() => {
        // Check if user has given consent
        const consentValue = localStorage.getItem("cookie-consent");
        setConsent(consentValue === "accepted");
    }, []);

    // Don't render anything if:
    // - Running in development mode (localhost)
    // - No consent given
    // - No measurement ID configured
    if (isDevelopment || !consent || !GA_MEASUREMENT_ID) {
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}
