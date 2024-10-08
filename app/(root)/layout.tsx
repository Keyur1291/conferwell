import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React, { Children, ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ConferWell",
  description: "A video confernce Website",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ( {children}: { children: ReactNode } ) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
