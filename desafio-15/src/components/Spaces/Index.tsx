import Container from "@/components/Container/Index";
import { TEXT_SPACES } from "@/constants";
import SwiperSpaces from "@/components/SwiperSpaces/Index";

const Index = () => {
  return (
    <section className="py-20">
      <Container className="">
        <header className="py-6 mb-6">
          {TEXT_SPACES.map(({ pretitle, title }, index) => (
            <div className="" key={index}>
              <p
                className="text-orange-normal font-body text-body-18 uppercase text-center mb-6"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="300"
              >
                {pretitle}
              </p>
              <h2
                className="text-green-dark font-title text-title-48 text-center max-w-xl mx-auto"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                {title}
              </h2>
            </div>
          ))}
        </header>

        <SwiperSpaces />
      </Container>
    </section>
  );
};

export default Index;
