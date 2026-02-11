import { GeistPixelCircle } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/component/shared/theme-provider";
import { Navbar } from "@/component/finta/navbar";
import { NavbarHome } from "@/component/shared/NavbarHome";
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
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <main className=" bg-background h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
