import './globals.css';
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusuf Maulana | Cinematic Portfolio",
  description:
    "Immersive creative developer portfolio with motion design, 3D systems, and cinematic interaction.",
  metadataBase: new URL("https://portfolio.local"),
  openGraph: {
    title: "Yusuf Maulana | Cinematic Portfolio",
    description:
      "Interactive portfolio for a creative developer crafting high-performance spatial web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
