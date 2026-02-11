import Link from "next/link";
import { Container } from "../component/shared/container";
import { Header } from "../component/shared/header";

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
      herf: "./masonry",
    },
    {
      title: "Globe Component",
      herf: "/globe",
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
        <div className="flex flex-col gap-10 pt-10">
          {Sites.map((site, idx) => (
            <div className="transition duration-200 hover:scale-110" key={idx}>
              <Link
                prefetch
                className="rounded-md border-2 border-neutral-700 px-4 py-2 text-4xl font-semibold text-neutral-600 shadow-slate-500/80 transition duration-300 hover:text-neutral-200 hover:shadow-2xl"
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
