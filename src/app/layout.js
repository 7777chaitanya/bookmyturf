import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book My Turf",
  description: "Book a Turf for your squad in your locality",
  manifest: "/manifest.json",
  themeColor: "#317EFB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#317EFB" />
      </head>
      <body className={inter.className}>
        <script
          defer
          src="https://siteinsights-xyz.vercel.app/js/script.js"
        ></script>
        {children}
      </body>
    </html>
  );
}
