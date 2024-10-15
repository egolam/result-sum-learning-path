import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Results Summary Component",
  description: "A challenge from Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${hanken.className} bg-white/90 flex justify-center md:items-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
