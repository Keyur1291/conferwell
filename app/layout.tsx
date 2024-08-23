import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConferWell",
  description: "A video confernce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          layout: {
            logoImageUrl: '/icons/logo.svg',
            unsafe_disableDevelopmentModeWarnings: true,
          },
          variables: {
            colorInputText: '#FFFFFF',
            colorInputBackground: '#8E60F010',
            colorPrimary: '#8E60F0', 
            colorBackground: '#1C1F2E',
            colorTextOnPrimaryBackground: '#FFFFFF',
            colorText: '#FFFFFF',
            colorTextSecondary: '#FFFFFF90',
            colorSuccess: '#8E60F0',
            colorNeutral: '#8E60F0',
            colorShimmer: '#8E60F010',
            borderRadius: '0.4rem'
          }
        }}
      >
        <body className={`${inter.className} bg-black`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
