
import Image from "next/image"


 export const Hero = () => {
  return (


      <div className="my-20 flex w-full flex-col items-center px-4 py-2">
        <button className="cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-gray-600 shadow-sm transition duration-200 hover:bg-gray-200">
          What are early stage requirements?
        </button>

        <div>
          <h1 className="mt-10 text-center text-7xl font-medium tracking-tighter text-black">
            Magically simplify <br /> accounting and taxes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-500">
            Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
            <br /> Set up in 10 mins. Back to building by 7:29pm.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <button className="cursor-pointer rounded-lg bg-[#2579F4] px-4 py-2 font-bold tracking-wide text-white shadow-lg text-shadow-md">
            Get started
          </button>
          <button className="cursor-pointer rounded-lg px-4 py-2 tracking-wide text-black text-shadow-md">
            Pricing &rarr;
          </button>
        </div>
        <div className="mx-auto mt-30 max-w-5xl">
          <Image
            className="w-full rounded-xl border-neutral-200 to-100% mask-b-from-0% object-cover object-left-top shadow-md"
            src="/hh.webp"
            alt="dashboard"
            height={1000}
            width={1500}
          />
        </div>
      </div>
  );
}


