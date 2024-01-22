import Image from "next/image";
import { Banner, Container } from '@/components';

export default function Home() {
  return (
    <>
      <div>
         <Container>
             <Banner/>
          </Container>
      </div>
    </>
  );
}
