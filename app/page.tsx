
import Link from "next/link";
import { Container } from "./component/container";
import { Header } from "./component/header";


export default function Home() {

  const Sites = [
    {
      title: " Mac Keyboard",
      herf: "./kybr",
    },
    {
      title: "Finta's Landing Page",
      herf: "./finta",
    },
    {
      title: "Bento Grid",
      herf: "./masonary",
    },
  ];



  return (
    <div className="h-screen w-full bg-black">
      <Container>
        <Header
          className="pt-20"
          disclassName="font-bold pb-4"
          heading="Hi , I am Prashant"
          discription="This is a small Collection of Components/Langing Pages I built using Next.js Tailwind or frontend work"
        />
        <div className="flex flex-col gap-6 pt-10">
          {Sites.map((site, idx) => (
            <div key={idx}>
              <Link
                className="font-semibold rounded-md px-2 text-4xl hover:shadow-2xl shadow-slate-500/80 text-neutral-600 transition duration-300 hover:text-neutral-200"
                href={site.herf}
              >
                {site.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}




