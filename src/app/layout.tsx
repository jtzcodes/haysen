import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://haysen.cl'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Silica Gel",
    "Desecantes",
    "Humedad",
    "Chile",
    "Silica Gel Azul",
    "Silica Gel Naranja",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/logo/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon/favicon.ico", sizes: "any" },
    ],
    apple: "/logo/favicon/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/logo/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/logo/favicon/android-chrome-512x512.png" },
    ],
  },
  manifest: "/logo/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
