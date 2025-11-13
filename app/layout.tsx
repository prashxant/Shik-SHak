
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="" >
       <main className="bg-background text-foreground">{children}</main>
      </body>
    </html>
  );
}
