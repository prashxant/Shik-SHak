// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const columns = [
//     [
//       { href: "", src: "/images/1.jpg", alt: "Posthog", className: "lg:rounded-tl-[calc(24px-4px)]" },
//       { href: "", src: "/images/2.jpg", alt: "Something" },
//       { href: "", src: "/images/3.jpg", alt: "Something" },
//       { href: "", src: "/images/4.jpg", alt: "Something" },
//       { href: "", src: "/images/5.jpg", alt: "Something" },
//       { href: "", src: "/images/6.jpg", alt: "Something" },
//     ],
//     [
//       { href: "", src: "/images/7.jpg", alt: "Posthog" },
//       { href: "", src: "/images/8.jpg", alt: "Something" },
//       { href: "", src: "/images/9.jpg", alt: "Something" },
//       { href: "", src: "/images/10.jpg", alt: "Something" },
//       { href: "", src: "/images/11.jpg", alt: "Something" },
//       { href: "", src: "/images/12.jpg", alt: "Something" },
//     ],
//     [
//       { href: "", src: "/images/13.jpg", alt: "Posthog" },
//       { href: "", src: "/images/14.jpg", alt: "Posthog" },
//       { href: "", src: "/images/15.jpg", alt: "Posthog" },
//       { href: "", src: "/images/16.jpg", alt: "Posthog" },
//       { href: "", src: "/images/17.jpg", alt: "Posthog" },
//       { href: "", src: "/images/19.jpg", alt: "Something" },

//     ],
//     [
//       { href: "", src: "/images/18.jpg", alt: "Posthog", className: "lg:rounded-tr-[calc(24px-4px)]" },
//       { href: "", src: "/images/19.jpg", alt: "Something" },
//       { href: "", src: "/images/20.jpg", alt: "Something" },
//       { href: "", src: "/images/21.jpg", alt: "Something" },
//       { href: "", src: "/images/22.jpg", alt: "Something" },

//     ],
//   ];

//   return (
//     <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
//       <Header />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10 p-1 mask-b-from-80% rounded-3xl">
//         {columns.map((cards, colIndex) => (
//           <Column  key={colIndex}>
//             {cards.map((card, i) => (
//               <Card key={i} {...card} />
//             ))}
//           </Column>
//         ))}
//       </div>
//     </div>
//   );
// }

// const Card = ({
//   src,
//   alt,
//   className = "",
//   href = "",
// }: {
//   src: string;
//   alt: string;
//   className?: string;
//   href?: string;
// }) => {
//   return (
//     <Link
//       href={href || "#"}
//       target="_blank"
//       className={cn("relative group rounded-md block overflow-hidden", className)}
//     >
//       <Image
//         src={src}
//         alt={alt}
//         height={500}
//         width={500}
//         className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
//       />
//       {href && (
//         <p className="absolute inset-0 flex justify-center items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/40">
//           {href.replace("https://", "") || "View"}
//         </p>
//       )}
//     </Link>
//   );
// };

// const Column = ({ children }: { children: React.ReactNode }) => (
//   <div className="flex flex-col gap-2">{children}</div>
// );

// const Header = () => (
//   <>
//     <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
//       Bento grids are cool, you should try it sometimes.
//     </h1>
//     <p className="text-base text-neutral-500 max-w-xl mt-4">
//       Discover innovative solutions that transform the way you work and create.
//       Our cutting-edge tools are designed to empower your creativity and boost
//       your productivity like never before.
//     </p>
//   </>
// );
