import Image from "next/image";
import { Banner, Container } from '@/components';
import { Dotdash } from "@/components/Dotdash";
import { FashionCategory } from "@/components/FashionCategory";
import { Celebration } from "@/components/Celebration";

export default function Home() {
  return (
    <>
      <div className="relative">
         <Container>
             <Banner/>
             <Dotdash/>
             <FashionCategory/>
            <div className="absolute top-[1700px]">
            <Celebration/>
            </div>
          </Container>
      </div>
    </>
  );
}
