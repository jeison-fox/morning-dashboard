import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "@/_styles/main.css";

const siraSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morning Dashboard",
  description: "A personalized dashboard to start your day with the information that matters most to you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${siraSans.className}`}>{children}</body>
    </html>
  );
}
