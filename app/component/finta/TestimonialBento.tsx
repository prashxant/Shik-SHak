import Image from "next/image";
import { testimonialsSet1,testimonialsSet2,testimonialsSet3 } from "@/lib/testimonial";



const allSet = [testimonialsSet1,testimonialsSet2,testimonialsSet3]

export const TestimonialBento = () => {

  return (
    <div className="flex gap-6">
      {allSet.map((column, idx) => (
        <div key={idx} className="flex w-full flex-col gap-6">
          {column.map((item, idxx) => (
            <Ucard
              alt={item.alt}
              key={idxx}
              testimonial={item.testimonial}
              name={item.name}
              description={item.description}
              pfp={item.pfp}
            />
          ))}
        </div>
      ))}
    </div>
  );

}


type UcardProps = {
  testimonial: string;
  name: string;
  description: string;
  pfp: string;
  alt: string;

};


const Ucard = ({testimonial,name,description,pfp,alt}:UcardProps) => {
  return (
    <div className="max-w-xs rounded-xl bg-white p-4 px-6 py-4 shadow-sm">
      <div className="text-xl font-medium pb-6 text-black" >&quot; {testimonial} &quot;</div>
      <div className="flex items-center">
        <Image className="rounded-full p-1 size-12 bg-blue-500" width={30} height={30} alt={alt} src={pfp}/>
        <div className="flex flex-col pl-4 ">
          <p className="text-black text-md font-medium">{name}</p>
          <p className="text-neutral-700 text-xs font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

