import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meghan Kulkarni — Portfolio",
  description: "Long- & short-form content creator · Video editor · Videographer",
  openGraph: {
    title: "Meghan Kulkarni — Portfolio",
    description: "Long- & short-form content creator · Video editor · Videographer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
