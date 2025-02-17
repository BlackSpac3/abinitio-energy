import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import { bg_grid } from "@/assets";
import AppContextProvider from "@/context/AppContextProvider";
import EmpDetailModal from "@/components/teampage_components/EmpDetailModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.abinitio-energy.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Abinitio Energy",
    template: "%s - Abinitio Energy",
  },
  description:
    "We are a modern, forward-thinking company that blends logistics with advanced technology to streamline your operations, improve efficiency, reduce costs, and enhance service delivery, keeping your business ahead in a competitive market.",
  url: "https://www.abinitio-energy.com",
  siteName: "Abinitio Energy",
  openGraph: {
    url: "https://www.abinitio-energy.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  locale: "en_US",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppContextProvider>
          <EmpDetailModal />
          <div className="absolute top-[-100px] -z-20 w-full md:top-[-380px]">
            <Image
              src={bg_grid}
              alt=""
              className="mx-auto w-full opacity-10 md:w-[768px]"
            />
          </div>
          <Navbar />
          {/* <ScrollToTop /> */}
          <main className="container mt-16 max-w-[1024px] overflow-hidden">
            {children}
          </main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
