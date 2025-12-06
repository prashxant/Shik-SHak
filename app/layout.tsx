
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="antialiased [--pattern-fg:var(--color-neutral-900)]/2" >
       <main className=" text-foreground h-screen">{children}</main>
      </body>
    </html>
  );
}
