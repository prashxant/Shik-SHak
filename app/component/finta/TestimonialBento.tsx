import Image from "next/image";


export const TestimonialBento = () => {
  return (
    <div>
      <Ucard testimonial="my name is prashant" name="Prahant" description="description" pfp="/finta.svg" alt="dd" />
    </div>
  )
}


type UcardProps = {
  testimonial:string,
  name: string,
  description: string,
  pfp: string
  alt: string
}


const Ucard = ({testimonial,name,description,pfp,alt}:UcardProps) => {
  return (
    <div className="max-w-xs gap-6 rounded-xl bg-white p-4 px-6 py-4 shadow-sm">
      <h1 className="text-xl font-medium text-black" >&quot; ${testimonial} &quot;</h1>
      <div className="flex  items-center">
        <Image className="rounded-full bg-blue-500" width={30} height={70} alt={alt} src={pfp}/>
        <div className="flex flex-col pl-2 ">
          <p className="text-black text-md font-medium">{name}</p>
          <p className="text-neutral-700 text-xs font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

