import Image from "next/image";
import { Inter } from "next/font/google";
import Paragraph from "./components/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-500 text-yellow-50">
      <Paragraph size="sm" />
    </main>
  );
}
