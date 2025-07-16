import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/ThemeProvider';


export const metadata: Metadata = {
  metadataBase: new URL('https://www.shankavisal.com'),
  title: {
    default: "Shanka Visal's App Showcase & Portfolio",
    template: `%s | Shanka Visal`,
  },
  description: 'Explore the mobile app portfolio of Shanka Visal, a passionate app developer creating innovative Android and iOS applications. Discover my work and get in touch for collaboration.',
  keywords: ["Shanka Visal", "mobile app developer", "iOS developer", "Android developer", "React Native developer", "Flutter developer", "Next.js", "Firebase", "app portfolio", "software engineer"],
  creator: "Shanka Visal",
  authors: [{ name: "Shanka Visal", url: "https://www.shankavisal.com" }],
  openGraph: {
    title: "Shanka Visal's App Showcase & Portfolio",
    description: "Explore the mobile app portfolio of Shanka Visal, a passionate app developer creating innovative Android and iOS applications.",
    url: "https://www.shankavisal.com",
    siteName: "Shanka Visal's Portfolio",
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: "Shanka Visal's App Showcase",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shanka Visal's App Showcase & Portfolio",
    description: "Explore the mobile app portfolio of Shanka Visal, a passionate app developer creating innovative Android and iOS applications.",
    creator: '@shankavisal',
    images: ['https://placehold.co/1200x630.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
