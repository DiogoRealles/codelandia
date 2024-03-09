import Container from "@/components/Container/Index";
import { TEXT_FOOTER } from "@/constants";

const Index = () => {
  const dateYear = new Date().getFullYear();

  return (
    <footer className="bg-green-normal py-10">
      <Container className="container">
        {TEXT_FOOTER.map(({ company, text }, index) => (
          <p
            className="text-white font-body text-body-14 text-center"
            key={index}
          >
            &copy;{" "}
            <span>
              <strong>{company}</strong> {dateYear}
            </span>{" "}
            | {text}
          </p>
        ))}
      </Container>
    </footer>
  );
};

export default Index;
