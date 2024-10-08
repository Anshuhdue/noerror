import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

// Updated Metadata with colorScheme removed
export const metadata: Metadata = {
  title: "Anshu Gupta — Full-Stack Developer",
  description:
    "Full-Stack Developer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Kolkata, India.",
  generator: "Next.js",
  applicationName: "Anshu Gupta",
  keywords: [
    "freelance",
    "developer",
    "Full-Stack Developer",
    "Full-Stack",
    "react",
    "Full-Stack Developer",
    "Full-Stack Developer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "Full-Stack Developer portfolio",
    "creative developer portfolio",
  ],
  openGraph: {
    title: "Anshu Gupta — Full-Stack Developer",
    description:
      "Full-Stack Developer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Kolkata, India.",
    url: "developeranshu.online",
    siteName: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Anshu Gupta — Full-Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshu Gupta — Full-Stack Developer",
    description:
      "Full-Stack Developer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Kolkata, India.",
    creator: "",
    creatorId: "1243720976552144897",
    images: [
      "",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// Added viewport export with colorScheme
export const viewport = {
  colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
