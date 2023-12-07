import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { CLIENT_RENEG_LIMIT } from 'tls'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Toaster } from 'sonner'
import { ModalProvider } from '@/components/providers/model-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'creative , learning and daily management tool',
  icons:{
    icon: {
      url:"/logo.svg",
      href:"/logo.svg",
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jotion-theme-2"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
