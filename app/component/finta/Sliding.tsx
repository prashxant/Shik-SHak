import Image from 'next/image';
import React from 'react'

export const Sliding = () => {
  return (
    <div className=" flex flex-col items-center justify-center overflow-hidden  mask-x-from-70% mask-x-to-95%">
      <h2 className="text-sm font-medium text-neutral-800">
        Trusted by fast-growing startups
      </h2>
      <Slider />
    </div>
  );
}


const Slider = () =>{

  const Logo = [
    { src: "/finta/Circleback (1).webp", alt: "Somthing" },
    { src: "/finta/Finta Accounting and Taxes.webp", alt: "Somthing" },
    { src: "/finta/Finta Instant.webp", alt: "Somthing" },
    { src: "/finta/Finta Outline.webp", alt: "Somthing" },
    { src: "/finta/Finta Startup Accounting Relay (1).webp", alt: "Somthing" },
    { src: "/finta/Magic Patterns from Finta.webp", alt: "Somthing" },
    { src: "/finta/Rye Finta.webp", alt: "Somthing" },
    { src: "/finta/resend.svg", alt: "Somthing" },
  ];

    const loopLogos = [...Logo, ...Logo];

return (
  <div className="animate-marque flex gap-15 py-10">
    {loopLogos.map((item, index) => (
      <Image

        loading="lazy"
        key={index}
        alt={item.alt}
        src={item.src}
        height={48}
        width={100}
      />
    ))}
  </div>
);}


