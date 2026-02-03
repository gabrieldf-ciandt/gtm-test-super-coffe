import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/GoogleTagManager"; // Import it

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Coffee - Analytics Lab",
  description: "GTM Training Ground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // REPLACE 'GTM-YOURID' with your actual ID
  const GTM_ID = 'GTM-KVSJZ7F4'; 

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId={GTM_ID} />
        {children}
      </body>
    </html>
  );
}