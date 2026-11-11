import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "K-SOLUTIONS provides professionally managed vehicle transactions, nationwide vehicle searches, inspection reports, transparent pricing and end-to-end transaction support.";

export const metadata: Metadata = {
  title: {
    default: "K-SOLUTIONS | Vehicle Transaction Platform",
    template: "%s | K-SOLUTIONS",
  },
  description: siteDescription,
  applicationName: "K-SOLUTIONS",
  keywords: [
    "K-SOLUTIONS",
    "vehicle transactions",
    "vehicle inspection",
    "vehicle auction",
    "vehicle procurement",
    "Japan vehicle trading",
  ],
  openGraph: {
    type: "website",
    title: "K-SOLUTIONS | Vehicle Transaction Platform",
    description: siteDescription,
    siteName: "K-SOLUTIONS",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
  },
  twitter: {
    card: "summary_large_image",
    title: "K-SOLUTIONS | Vehicle Transaction Platform",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f9ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#dbe1ff] selection:text-[#00174b]">
        {children}
      </body>
    </html>
  );
}
