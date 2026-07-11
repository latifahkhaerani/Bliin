import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Fredoka } from "next/font/google";

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
