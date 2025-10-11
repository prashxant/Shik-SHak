import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10 mask-b-from-50% p-1 rounded-3xl">
        <Column>
          <Card
            href=""
            src="/images/img1.jpg"
            alt="Posthog"
            className="lg:rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href=""
            src="/images/img2.jpg"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img3.jpg"
            alt="Something"
            className=""
          />
        </Column>
        <Column>
          <Card
            href=""
            src="/images/img4.png"
            alt="Posthog"
            className=""
          />
          <Card
            href=""
            src="/images/img12.png"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img6.png"
            alt="Something"
            className=""
          />

        </Column>
        <Column>
          <Card
            href=""
            src="/images/img8.png"
            alt="Posthog"
            className=""
          />
          <Card
            href=""
            src="/images/img9.png"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img10.png"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img7.png"
            alt="Something"
            className=""
          />
        </Column>
        <Column>
          <Card
            href=""
            src="/images/img11.png"
            alt="Posthog"
            className="lg:rounded-tr-[calc(24px-4px)]"
          />
          <Card
            href=""
            src="/images/img12.png"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img13.jpg"
            alt="Something"
            className=""
          />
          <Card
            href=""
            src="/images/img1.jpg"
            alt="Something"
            className=""
          />
        </Column>
      </div>
    </div>
  );
}

const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image src={src} alt={alt} height={500} width={500} className="w-full" />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 inset-0 text-white font-medium text-sm m-auto flex justify-center items-center">
        {href.split("https://")[1]}
      </p>
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="text-base text-neutral-500 max-w-xl mt-4">
        Discover innovative solutions that transform the way you work and
        create. Our cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>
    </>
  );
};
