
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning >
      <body className="" >
        {children}
      </body>
    </html>
  );
}
