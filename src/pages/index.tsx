import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gray-700">
      <h2  className="text-4xl text-white">Site.Set</h2>

      <Button variant="secondary" className="hover:cursor-pointer">Botão</Button>
    </div>
  );
}
