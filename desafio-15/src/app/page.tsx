import Hero from "@/components/Hero/Index";
import About from "@/components/About/Index";
import Spaces from "@/components/Spaces/Index";
import Spoiler from "@/components/Spoiler/Index";
import Contact from "@/components/Contact/Index";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Spaces />
      <Spoiler />
      <Contact />
    </main>
  );
}
