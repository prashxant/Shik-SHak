import { Container } from "./components/container";
import { Navbar } from "./components/navbar";


export default function Home() {
  return (
  <Container className=" h-screen bg-red-200 flex justify-center items-center ">
    <Navbar/>
  </Container>
  );
}
