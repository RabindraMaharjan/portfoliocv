import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://rabindramaharjan.com.np'),
  title: {
    default: 'Rabindra Maharjan — QA Engineer',
    template: '%s | Rabindra Maharjan',
  },
  description: 'Quality Assurance Engineer with 4+ years of experience in software testing, automation, and quality processes. Specializing in Cypress, Selenium, and enterprise software testing.',
  keywords: [
    'Rabindra Maharjan',
    'QA Engineer',
    'Quality Assurance',
    'Software Testing',
    'Automation Testing',
    'Cypress',
    'Selenium',
    'JMeter',
    'Postman',
    'Nepal QA Engineer',
    'Software Development Life Cycle',
    'SDLC',
    'STLC',
  ],
  authors: [{ name: 'Rabindra Maharjan', url: 'https://rabindramaharjan.com.np' }],
  creator: 'Rabindra Maharjan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rabindramaharjan.com.np',
    title: 'Rabindra Maharjan — QA Engineer',
    description: 'Quality Assurance Engineer specializing in automation and enterprise software testing.',
    siteName: 'Rabindra Maharjan Portfolio',
    images: [
      {
        url: '/og-image.png', // You should create this image
        width: 1200,
        height: 630,
        alt: 'Rabindra Maharjan — QA Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabindra Maharjan — QA Engineer',
    description: 'Quality Assurance Engineer specializing in automation and enterprise software testing.',
    creator: '@your_twitter_handle', // Add your handle
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rabindramaharjan.com.np',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rabindra Maharjan',
    url: 'https://rabindramaharjan.com.np',
    jobTitle: 'Quality Assurance Engineer',
    sameAs: [
      'https://github.com/RabindraMaharjan',
      'https://linkedin.com/in/rabindra-maharjan',
      // Add other social links
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Wealthlane Financial Inc',
    },
    description: 'Quality Assurance Engineer with 4+ years of experience in software testing and automation.',
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-foreground selection:text-background">
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
