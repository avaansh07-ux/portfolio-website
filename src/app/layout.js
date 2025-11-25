import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Avaansh Nanda – Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white`}
      >
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 flex items-center justify-center border-b border-white/10 bg-black/60 px-8 py-4 backdrop-blur-md">
          <ul className="flex gap-8 text-sm text-white/70">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative pb-1 transition text-white/70 hover:text-white
                             before:absolute before:inset-x-0 before:-bottom-0.5 before:h-[2px]
                             before:origin-center before:scale-x-0 before:bg-cyan-400
                             before:transition before:duration-200 hover:before:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
