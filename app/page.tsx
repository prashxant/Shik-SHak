
import { Container } from "./component/container";

export default function Home() {

  return (
    <div className="h-screen w-full">
      <Container className="max-w-3xl text-black mt-10">
        <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
         Hi Prashnt here
        </h1>
        <p className="mt-4 max-w-xl text-base text-neutral-500">
          This quest of pages are made by me to to see what i have learn from Tailwind in Nextjs
        </p>
        <Circle/>
      </Container>
    </div>
  );
}




const Circle = () => {

//diff color in arr.map for each component and everthing 

  return (<div className="bg-amber-200 size-24 rounded-full">

  </div>
  )
}
