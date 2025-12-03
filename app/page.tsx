
import Link from "next/link";
import { Container } from "./component/container";
import { Header } from "./component/header";

export default function Home() {



  return (
    <div className="h-screen w-full bg-black">
      <Container>
        <Header
          heading="Hi , I am Prashant"
          discription="Collection of Componests I built using Next.js Tailwind or frontend work"
        />
        <div className="flex flex-col justify-center pt-2 text-neutral-500">
          <span>
            <Link
              className="rounded-md px-4 py-2 text-2xl font-semibold shadow-slate-400 transition duration-300 hover:shadow-xl/30 hover:text-neutral-200"
              href="./kybr"
            >
              Mac Keyboard
            </Link>
          </span>

          <Link
            className="rounded-md px-4 py-2 text-2xl font-semibold shadow-slate-400 hover:shadow-xl/30"
            href="./finta"
          >
            Finta&apos;s Landing Page
          </Link>
          <Link
            className="rounded-md px-4 py-2 text-2xl font-semibold shadow-slate-400 hover:shadow-xl/30"
            href="./masonary"
          >
            Bento Grid
          </Link>
        </div>
      </Container>
    </div>
  );
}




