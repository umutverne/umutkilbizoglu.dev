import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umut Kılbızoğlu | Full Stack Developer",
  description: "Full Stack Developer - Modern web ve mobil uygulamalar geliştiriyorum. React, Next.js, Node.js ve daha fazlası.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Freelance", "Türkiye"],
  authors: [{ name: "Umut Kılbızoğlu" }],
  openGraph: {
    title: "Umut Kılbızoğlu | Full Stack Developer",
    description: "Full Stack Developer - Modern web ve mobil uygulamalar geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umut Kılbızoğlu | Full Stack Developer",
    description: "Full Stack Developer - Modern web ve mobil uygulamalar geliştiriyorum.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
