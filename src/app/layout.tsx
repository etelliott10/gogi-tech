import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gogi Tech | Practical Business Automation",
  description:
    "Gogi Tech helps owner-led companies automate repetitive work, connect outdated systems, and build practical AI-powered tools.",
  openGraph: {
    title: "Gogi Tech | Less busywork. Better business.",
    description:
      "Practical automation, connected systems, and custom tools for owner-led businesses.",
    images: [{ url: "/og.png", width: 1536, height: 911 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gogi Tech | Less busywork. Better business.",
    description:
      "Practical automation, connected systems, and custom tools for owner-led businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
