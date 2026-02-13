import "./globals.css";

export const metadata = {
  title: "Avaansh Nanda – Portfolio",
  description: "The Avaansh Atlas interactive pirate portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
