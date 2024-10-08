import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from '@/components/ui/toaster'
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConferWell",
  description: "A video confernce Website",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
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
        <body className={`${inter.className} bg-black`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
