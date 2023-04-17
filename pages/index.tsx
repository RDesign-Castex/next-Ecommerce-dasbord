import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import card from "../components/Carousel";
import { Carousel } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <> 
      <Navbar />
      <Carousel />
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere libero fuga eaque natus nobis voluptates unde cumque minima accusamus.</p>
      </main>
    </>
  );
}
