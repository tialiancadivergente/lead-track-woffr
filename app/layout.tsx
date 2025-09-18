import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Spectral, Bebas_Neue, Special_Elite } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";
import MicrosoftClarity from "./components/MicrosoftClarity";
const GTM_ID = "GTM-NC7GGZBX"; // Substitua pelo seu GTM ID

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "O Fim das Relações Ruins - o método que poupa seu tempo e te conecta com o parceiro ideal",
  description: "Comprovado por mais de 53 mil mulheres.",
  icons: {
    icon: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
    shortcut: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
    apple: "/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="icon"
          href="/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png"
          type="image/png"
        />
      </head>
      <body
        className={`${spectral.className} ${bebasNeue.variable} ${specialElite.variable}`}
      >
        <GoogleTagManager />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
