import { Container } from "../component/container";
import { Footer } from "../component/finta/footer";
import { Hero } from "../component/finta/hero";
import { Inception } from "../component/finta/inception";
import { Navbar } from "../component/finta/navbar";
import { Sliding } from "../component/finta/Sliding";
import { Testimonail } from "../component/finta/Testimonail";

export default function Home() {
  return (
    <div className="[background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <Container>
        <Navbar />
        <Hero />
        <Sliding />
      </Container>
      <Testimonail />
      <Inception />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}





























