import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Fazmi Dev",
  description:
    "Portofolio for Muhammad Fahrul Azmi Husni, Frontend Developer and Next JS Specialist",
  other: {
    "theme-color": "#fffff",
    "color-scheme": "light only",
    "twitter:image": "https://i.ibb.co/YLMNKW7/homepage-thumbnai-fazmi-dev.png",
    "twitter:card": "summary_large_image",
    "og:url": "fazmi.id",
    "og:image": "https://i.ibb.co/YLMNKW7/homepage-thumbnai-fazmi-dev.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-dm-sans antialiased",
          dmsans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
