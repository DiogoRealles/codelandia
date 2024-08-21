import { HeroImg } from "@/assets";
import Container from "@/components/Container/Index";
import { TEXT_HERO } from "@/constants";
import Image from "next/image";

const Index = () => {
  return (
    <section className="bg-white py-28">
      <Container className="w-full flex items-center gap-10">
        {TEXT_HERO.map(({ label_btn, subtitle, title }, index) => (
          <div className="w-full max-w-[550px]" key={index}>
            <h1
              className="text-green-dark font-title text-title-56 mb-6 max-w-md"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              {title}
            </h1>
            <p
              className="text-green-dark font-body text-body-18 mb-8 max-w-lg"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              {subtitle}
            </p>
            <button
              className="py-3 px-4 bg-orange-normal text-green-dark font-body text-body-18 rounded whitespace-nowrap transition-all ease-linear hover:bg-orange-500"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              {label_btn}
            </button>
          </div>
        ))}
        <div className="relative w-full h-[350px] max-h-[550px]">
          <Image
            className="bg-cover"
            src={HeroImg}
            alt="Ilustra hero"
            fill
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="300"
          />
        </div>
      </Container>
    </section>
  );
};

export default Index;
