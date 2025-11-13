
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning>
      <head>
        <link
        rel="preload"
        href="./bggrain.png"
        as="image"
        />

      </head>
      <body className="">{children}</body>
    </html>
  );
}
