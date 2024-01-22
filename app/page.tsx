import Image from "next/image";
import { Banner, Container } from '@/components';
import { Dotdash } from "@/components/Dotdash";
import { FashionCategory } from "@/components/FashionCategory";

export default function Home() {
  return (
    <>
      <div>
         <Container>
             <Banner/>
             <Dotdash/>
             <FashionCategory/>
          </Container>
      </div>
    </>
  );
}
