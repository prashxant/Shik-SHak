import { Container } from "./component/container";
import { Footer } from "./component/footer";
import { Hero } from "./component/hero";
import { Navbar } from "./component/navbar";

export default function Home() {
  return (
    <div  className="[background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] ">
      {/* <div className="max-w-4xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"/>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"/>
      </div> */}
      <Container>
        <Navbar/>
        <Hero/>
        <Footer/>
      </Container>

    </div>
  );
}






























//  <div className="h-screen w-full  flex  flex-col justify-center items-center mx-auto pt-20 pb-10 bg-blue-300">
//       <h1>Creating Web designing</h1>
//       <Link href="./masonary">
//       <button className="px-4 py-2 mt-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Masonary Grid </button>
//       </Link>
//     </div>
