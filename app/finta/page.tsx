import { Container } from "../component/container";
import { Footer } from "../component/finta/footer";
import { Hero } from "../component/finta/hero";
import { Inception } from "../component/finta/inception";
import { Navbar } from "../component/finta/navbar";
import { Sliding } from "../component/finta/Sliding";
import { Testimonial } from "../component/finta/Testimonial";


export default function Home() {
  return (
    <div className="[background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFFFFF_100%)]">
      <Container>
        <Navbar />
        <Hero />
        <Sliding />
      </Container>
      <Testimonial/>
      <Inception />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

