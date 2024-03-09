"use client";

import { IconEmail, IconPhone, MapImg } from "@/assets";
import Container from "@/components/Container/Index";
import { TEXT_CONTACT } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Index = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [mapStarted, setMapStarted] = useState(false);

  const onPlay = () => {
    setMapStarted(true);
  };

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedOption(selectedOption);
  };
  return (
    <section className="py-36 bg-white">
      <Container className="flex items-center gap-20">
        <form className="">
          {TEXT_CONTACT.map(({ title, subtitle }, index) => (
            <div className="mb-10" key={index}>
              <h2
                className="text-green-dark text-title-48 font-title mb-6"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="300"
              >
                {title}
              </h2>
              <p
                className="text-green-dark text-body-18 font-title mb-1"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                {subtitle}
              </p>
              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <label
                  htmlFor="select"
                  className="inline-block w-full mb-2 cursor-pointer text-body-15 text-white"
                >
                  Por qual canal podemos conversar?
                </label>
                <select
                  className="w-full py-3 px-3 bg-gray-100 text-green-dark outline-none hover:ring-2 ring-green-dark border-2 border-transparent focus:border-green-dark rounded font-body text-body-14"
                  value={selectedOption}
                  defaultValue={""}
                  onChange={handleSelect}
                >
                  <option value={""} disabled>
                    Selecione uma opção de contato
                  </option>
                  <option value={"email"}>E-mail</option>
                  <option value={"ligação"}>Ligação</option>
                  <option value={"whatsapp"}>Whatsapp</option>
                </select>
              </div>

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <label
                  htmlFor="name"
                  className="inline-block w-full mb-2 cursor-pointer text-body-14 text-green-dark"
                >
                  Qual o seu nome?
                </label>
                <input
                  className="w-full py-3 px-3 bg-gray-100 text-green-dark outline-none hover:ring-2 ring-green-dark transition-all ease-linear border-2 border-transparent focus:border-green-dark rounded"
                  name="name"
                  id="name"
                  type="text"
                  placeholder=""
                />
              </div>

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <label
                  htmlFor="email"
                  className="inline-block w-full mb-2 cursor-pointer text-body-14 text-green-dark"
                >
                  Qual o seu email?
                </label>
                <input
                  className="w-full py-3 px-3 bg-gray-100 text-green-dark outline-none hover:ring-2 ring-green-dark transition-all ease-linear border-2 border-transparent focus:border-green-dark rounded"
                  name="email"
                  id="email"
                  type="email"
                  placeholder=""
                />
              </div>

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <label
                  htmlFor="phone"
                  className="inline-block w-full mb-2 cursor-pointer text-body-14 text-green-dark"
                >
                  Qual o seu telefone?
                </label>
                <input
                  className="w-full py-3 px-3 bg-gray-100 text-green-dark outline-none hover:ring-2 ring-green-dark transition-all ease-linear border-2 border-transparent focus:border-green-dark rounded"
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder=""
                />
              </div>

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <label
                  htmlFor="message"
                  className="inline-block w-full mb-2 cursor-pointer text-body-14 text-green-dark"
                >
                  Mensagem
                </label>
                <textarea
                  className="w-full pt-3 bg-gray-100 pb-12 px-3 bg-gray-100s outline-none hover:ring-2 ring-green-dark text-green-dark transition-all ease-linear border-2 border-transparent focus:border-green-dark rounded"
                  name="message"
                  id="message"
                  placeholder="Olá, gostaria de receber mais informações sobre o Residencial."
                ></textarea>
              </div>

              <div
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <button className="bg-orange-normal rounded text-white uppercase py-3 transition-all ease-linear hover:bg-orange-500 focus:bg-orange-500 w-full outline-none">
                  Enviar
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-8">
                <Image src={IconPhone} alt="Telefone" />
              </div>
              <div className="">
                <span className="inline-block text-green-dark font-body text-body-14 uppercase">
                  Telefone
                </span>
                <a
                  className="text-orange-normal font-body text-body-14 block"
                  href="tel:+5511987654321"
                >
                  (11) 98765-4321
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image src={IconEmail} alt="Email" />
              </div>
              <div className="">
                <span className="inline-block text-green-dark font-body text-body-14 uppercase">
                  Email
                </span>
                <a
                  className="text-orange-normal font-body text-body-14 block"
                  href="mailto:contato@residencial.com"
                >
                  contato@residencial.com
                </a>
              </div>
            </div>
          </div>
        </form>

        {mapStarted && (
          <div className="relative w-full h-[800px] overflow-hidden">
            {/* <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.658547164766!2d-46.695847124666045!3d-23.688165878712876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fdee5182d71%3A0x640e2e0e1e230815!2sIMOBILI%C3%81RIA%20TERRARA%20CONDOMINIO%20(LAN%C3%87AMENTO%20DE%20CASAS%20NOVAS)!5e0!3m2!1sen!2sbr!4v1699543897530!5m2!1sen!2sbr"
            allowFullScreen
          /> */}
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1xXtysO5tpoytNw5gbs9igKtMRfSIj5w&ehbc=2E312F&ll=-23.686844245398003%2C-46.691545761639404&z=17"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        )}

        {!mapStarted && (
          <div className="relative w-full h-[700px]" onClick={onPlay}>
            <Image
              className=""
              src={MapImg}
              alt="Contato Ilustra"
              fill
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="500"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Index;
