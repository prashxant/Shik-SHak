
import Image from "next/image";
import { Container } from "./components/Container";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div
      className="h-screen w-full "
      style={{
        backgroundImage: `
          linear-gradient(to right, oklch(93.2% 0.032 255.585), #ffffff, oklch(93.2% 0.032 255.585)),
          linear-gradient(to bottom, #ffffff, oklch(88.2% 0.059 254.128),#ffffff)
        `,
        backgroundBlendMode: 'multiply'
      }}
    >
      <Navbar/>

    </div>
  );
}
