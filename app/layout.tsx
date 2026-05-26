import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://rabindramaharjan.com.np'), // Replace with your actual domain
  title: 'Rabindra Maharjan — QA Engineer',
  description: 'Quality Assurance Engineer with 4+ years of experience in software testing, automation, and quality processes. Specializing in Cypress, Selenium, and enterprise software testing.',
  keywords: ['QA Engineer', 'Quality Assurance', 'Software Testing', 'Cypress', 'Selenium', 'Automation Testing', 'Rabindra Maharjan'],
  authors: [{ name: 'Rabindra Maharjan' }],
  openGraph: {
    title: 'Rabindra Maharjan — QA Engineer',
    description: 'Quality Assurance Engineer with 4+ years of experience in software testing, automation, and quality processes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabindra Maharjan — QA Engineer',
    description: 'Quality Assurance Engineer with 4+ years of experience in software testing, automation, and quality processes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased selection:bg-primary/30 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
