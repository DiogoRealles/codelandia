import { AboutImg } from "@/assets";
import Container from "@/components/Container/Index";
import { TEXT_ABOUT } from "@/constants";
import Image from "next/image";

const Index = () => {
  return (
    <section id="about" className="bg-green-normal relative py-28">
      <Container className="w-full">
        {TEXT_ABOUT.map(({ pretitle, title, subtitle1, subtitle2 }, index) => (
          <div className="w-full max-w-[580px]" key={index}>
            <span
              className="bg-orange-normal text-green-dark font-body text-body-18 py-2 px-4 rounded mb-6 inline-block"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              {pretitle}
            </span>
            <h2
              className="text-white font-title text-title-48 mb-10"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              {title}
            </h2>
            <p
              className="text-white text-body-18 font-body mb-8"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              {subtitle1}
            </p>
            <p
              className="text-white text-body-18 font-body"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              {subtitle2}
            </p>
          </div>
        ))}
      </Container>
      <div className="absolute top-0 right-0 w-full max-w-[800px] h-full">
        <Image
          src={AboutImg}
          alt="Imagem Ilustra"
          fill
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300"
        />
      </div>
    </section>
  );
};

export default Index;
