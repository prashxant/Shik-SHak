import { Container } from "../component/container";
import { Footer } from "../component/footer";
import { Hero } from "../component/hero";
import { Navbar } from "../component/navbar";

export default function Home() {
  return (
    <div  className="[background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] ">

      <Container>
        <Navbar/>
        <Hero/>
        <Footer/>
      </Container>

    </div>
  );
}





























