import {GeistPixelCircle} from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelCircle.variable}`}
    >
      <body className="antialiased [--pattern-fg:var(--color-neutral-900)]/2">

          <main className="text-foreground h-screen">{children}</main>

      </body>
    </html>
  );
}
