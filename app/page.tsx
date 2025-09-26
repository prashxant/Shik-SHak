import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"



export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10">
      <Header/>
      <div className="grid grid-cols-4 gap-4 mt-10">
      <Column>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
      </Column>
      <Column>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
      </Column>
      <Column>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
        <Card href="" src="" alt="" className="bg-amber-100 "/>
      </Column>
      </div>
      </div>
  )
}


const Card = ({
  src,
  alt,
  className,
  href}:{src:string,alt:string,className:string,href:string}) => {
  return <Link href={href} target="_blank" className="card overlay">
     <Image
          src={src}
           alt={alt}
            height={500}
             width={500}
             className={cn("group-hover:opacity-50",className)}
             />
  </Link  >
}



const Column = ({children}:{children:React.ReactNode}) =>{
  return <div> {children} </div>
}

const Header= () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tightertext-neutral-700 ">Bento Grids are cool you should try sometimes</h1>
      <p className="text-base text-neutral-500 max-w-xl mt-4">yeada yada yeada yadayeada yadayeada yadayeada yadayeada yadayeada yadayeada yadayeada yada</p>
    </div>
  )
}


