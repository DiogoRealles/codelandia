"use client";
import { Logo } from "@/assets";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Index";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <header
      className="bg-green-normal py-5"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="300"
    >
      <Container className="flex items-center justify-between">
        <Link
          href=""
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <Image
            src={Logo}
            alt="Bem vindo(a) ao Residencial."
            width={180}
            height={40}
          />
        </Link>

        <nav className="">
          <ul className="flex gap-6">
            {NAV_LINKS.map(({ id, link, label }) => (
              <li
                className=""
                key={id}
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <Link
                  className="py-1 px-2 text-white transition-all ease-linear hover:text-orange-normal"
                  href={link}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Index;
