import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softsouls.ai – Software Solutions powered by AI",
  description: "Chatbots, AI call agents, customer service agents, receptionists, appointment bookers, and tailored workflows for real business outcomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
          strategy="afterInteractive"
        />
        <ChatbotLauncher />
      </body>
    </html>
  );
}
