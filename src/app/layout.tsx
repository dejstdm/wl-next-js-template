import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@dejstdm/white-label-ui/dist/style.css";
import "@dejstdm/white-label-ui/themes/lays/dist/theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { NavBar, Footer } from "@dejstdm/white-label-ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Label UI - Next.js Template",
  description: "Next.js template using @dejstdm/white-label-ui component library",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "Our Commitments", href: "/commitments" },
  { label: "Quality", href: "/quality" },
  { label: "Contact Us", href: "/contact" },
];

const footerLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/lays",
    icon: "fa-brands fa-square-facebook",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/lays",
    icon: "fa-brands fa-square-x-twitter",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lays">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar 
          items={navItems} 
          sticky 
          logoSrc="/images/logo.png"
          logoAlt="Lay's Logo"
        />
        {children}
        <Footer
          links={footerLinks}
          socialLinks={socialLinks}
          copyright="PEPSICO"
          copyrightYear="2025"
          logoSrc="/images/logo.png"
          logoAlt="Lay's Logo"
        />
      </body>
    </html>
  );
}
