import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/layout/Home/Header";

export default function Home() {
  return (
   <div className="text-white text-3xl text-sky-500">
    <Header label="Home" />
   </div>
  );
}
