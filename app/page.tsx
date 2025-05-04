import Container from '@/components/Container';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <About />
        <Gallery />
        <Testimonials />
        <CTA />
      </Container>
    </>
  );
}