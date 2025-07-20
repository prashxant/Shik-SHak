import Image from "next/image";
import { Container } from "./components/Container";
import { Navbar } from "./components/navbar";


export default function Home() {
  return (
    <div className ="layout">
      <Container >
         <Navbar/>
      </Container>
    </div>
  )}
