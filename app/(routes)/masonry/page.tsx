import { columns } from "@/lib/img";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../../component/header";

export default function Home() {
  return (
    <div className="bg-bg1 bg-cover">
      <div className="mx-auto w-full max-w-4xl px-4 pt-20 pb-10 md:px-8">
        <Header
          heading="Bento grids are cool, you should try it sometimes."
          discription="
              Discover innovative solutions that transform the way you work and create.
              Our cutting-edge tools are designed to empower your creativity and boost
              your productivity like never before."
        />
        <div className="my-10 grid grid-cols-1 gap-2 rounded-3xl mask-b-from-80% p-1 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((cards, colIndex) => (
            <Column key={colIndex}>
              {cards.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </Column>
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({
  src,
  alt,
  className = "",
  href = "",
}: {
  src: string;
  alt: string;
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href || "#"}
      target="_blank"
      className={cn(
        "group relative block overflow-hidden rounded-md",
        className,
      )}
    >
      <Image
        priority
        src={src}
        alt={alt}
        height={500}
        width={500}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {href && (
        <p className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
          {href.replace("https://", "") || "View"}
        </p>
      )}
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">{children}</div>
);
