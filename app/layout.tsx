import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mrlectus.me",
  description: "My online Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
