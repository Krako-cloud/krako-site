// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

const GA_ID = 'G-F74KH3V0TT';

export const metadata = {
  title: 'Krako 2.0 — Hybrid Edge–Cloud AI',
  description: 'Run small models on devices, call the cloud only when needed.',
  metadataBase: new URL('https://krako.xyz'),
  openGraph: {
    title: 'Krako 2.0 — Hybrid Edge–Cloud AI',
    description:
      'Micro-tasks + small-model-first + graph context + cloud-only-when-needed.',
    url: 'https://krako.xyz',
    siteName: 'Krako',
    images: [{ url: '/krako2_cover.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krako 2.0 — Hybrid Edge–Cloud AI',
    description: 'AI that runs where it’s cheapest and fastest.',
    images: ['/krako2_cover.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <header className="border-b border-slate-800">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Krako 2.0
            </Link>
            <div className="flex flex-wrap gap-5 text-sm">
              <Link href="/product">Product</Link>
              <Link href="/developers">Developers</Link>
              <Link href="/use-cases">Use Cases</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/token">Token</Link>
              <Link href="/community">Community</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

           <footer className="mt-16 border-t border-slate-800">
             <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-400 flex flex-wrap gap-4 justify-between">
               <div>© {new Date().getFullYear()} Krako. All rights reserved.</div>
               <div className="flex gap-4">
                 <a href="/legal/privacy">Privacy</a>
                 <a href="/legal/tos">ToS</a>
                 <a href="/press">Press</a>
               </div>
             </div>
           </footer>
         </body>
    </html>
  );
}
