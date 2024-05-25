import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../provider";

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata ={
  title: "Suvrajit's Portfolio",
  description: "Modern & minimalist Portfolio",
  other:{
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    // "og:url": "suvrajitmondal.com",
    "og:url": "my-portfolio-smoky-alpha.vercel.app",
    "og:image": "https://drive.google.com/uc?export=download&id=1WKA8hGY62mn103VgLOVIxtm44-YOEjP3",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >      
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}