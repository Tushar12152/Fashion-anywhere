import Image from "next/image";
import { Banner, Container } from '@/components';
import { Dotdash } from "@/components/Dotdash";
import { FashionCategory } from "@/components/FashionCategory";
import { Celebration } from "@/components/Celebration";
import { Fashion } from "@/components/Fashion";
import { Buy } from './../components/Buy';

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
            <Dotdash/>

            <div className="border-t-2 mb-1 w-full border-black"></div>
             <div className=" border-b-2 w-full border-black"></div>

               <Fashion/>

               <div className="border-t-2 mb-1 w-full border-black"></div>
             <div className=" border-b-2 w-full border-black"></div>

             <Buy/>

          </Container>



      </div>
    </>
  );
}
