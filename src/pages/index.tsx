import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";
import {
  ArrowUpRight,
  EnvelopeSimple,
  Phone,
  WhatsappLogo,
} from "phosphor-react";

import paintBrush from "../../public/paintbrush.svg";
import computer from "../../public/computer.svg";
import icons from "../../public/icons.png";
import car from "../../public/car.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Fernando - Portfolio</title>
      </Head>
      <div className="max-w-6xl mx-auto">
        <header className="w-full flex justify-between items-center py-3 relative">
          <h2 className="text-lg font-bold uppercase">GRILO</h2>
          <nav className="absolute w-full flex justify-center">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Contatos
                </a>
              </li>
            </ul>
          </nav>
          <Button href="https://www.google.com">Conversar</Button>
        </header>
        <main>
          <section className="min-h-screen flex flex-col justify-center relative">
            <h1 className="font-bold text-6xl">
              Olá! Eu sou <br />
              Luis Fernando
            </h1>
            <div className="flex gap-4 items-center mt-3">
              <div className="flex items-center gap-1">
                <Image src={paintBrush} alt="" />
                <p>Design</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <Image src={computer} alt="" />
                <p>Programador</p>
              </div>
            </div>
            <p className="mt-6 max-w-[50ch]">
              Desenvolvedor de websites e criador de designs, estudo programação
              há mais de 2 anos
            </p>
            <div>
              <Button className="text-base font-medium px-6 py-3 my-10">
                Meus projetos
              </Button>
            </div>
            <Image
              width={450}
              src={icons}
              alt=""
              className="absolute z-[-1] right-0"
            />
          </section>
          <section className="bg-gradient-to-b from-[#304DA1] to-[#3B5CC5] rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white text-center">
              Sobre mim
            </h2>
            <p className="mt-4 text-white text-justify">
              Sempre gostei de computadores e de tecnologia, gostava de jogar,
              aprender sobre hardware, mas foi quando entrei no curso técnico no
              Instituto Federal Baiano no ensino médio que descobri o mundo por
              trás da internet, conheci a programação, o desenvolvimento de
              voltado a web, e aprendi como a rede mundial de computadores
              funciona e me apaixonei por esse mundo. Desde então no meu tempo
              livre tenho me dedicado a aprender a aprimorar minhas habilidades
              em programação, especialmente no desenvolvimento de websites, o
              que me levou também a estudar sobre design, principalmente os
              tópicos de UI e UX. <br />
              Percebi que a programação é mais do que apenas escrever códigos,
              com ela posso resolver problemas, criar e inovar, espero continuar
              nessa jornada aprendendo e evoluindo minhas habilidades, e usá-las
              para ajudar outras pessoas, seja trabalhando em empresas ou em
              projetos pessoais.
            </p>
          </section>
          <section className="my-14">
            <h2 className="text-2xl font-bold">Projetos</h2>
            <div className="w-full mt-9 flex gap-8 justify-center flex-wrap">
              <div className="w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={car} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Lading Page</h3>
                <p className="text-justify">
                  Uma página de apresentação para a BMW M4, design feito por
                  mim, começa com uma imagem de destaque do carro, seguido por
                  uma descrição geral, há seções de especificações técnicas, com
                  informações detalhadas sobre o desempenho, a suspensão,
                  freios, rodas e pneus.
                </p>
                <Button className="w-full mt-5 flex items-center justify-center gap-2 font-medium">
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={car} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Lading Page</h3>
                <p className="text-justify">
                  Uma página de apresentação para a BMW M4, design feito por
                  mim, começa com uma imagem de destaque do carro, seguido por
                  uma descrição geral, há seções de especificações técnicas, com
                  informações detalhadas sobre o desempenho, a suspensão,
                  freios, rodas e pneus.
                </p>
                <Button className="w-full mt-5 flex items-center justify-center gap-2 font-medium">
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={car} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Lading Page</h3>
                <p className="text-justify">
                  Uma página de apresentação para a BMW M4, design feito por
                  mim, começa com uma imagem de destaque do carro, seguido por
                  uma descrição geral, há seções de especificações técnicas, com
                  informações detalhadas sobre o desempenho, a suspensão,
                  freios, rodas e pneus.
                </p>
                <Button className="w-full mt-5 flex items-center justify-center gap-2 font-medium">
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={car} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Lading Page</h3>
                <p className="text-justify">
                  Uma página de apresentação para a BMW M4, design feito por
                  mim, começa com uma imagem de destaque do carro, seguido por
                  uma descrição geral, há seções de especificações técnicas, com
                  informações detalhadas sobre o desempenho, a suspensão,
                  freios, rodas e pneus.
                </p>
                <Button className="w-full mt-5 flex items-center justify-center gap-2 font-medium">
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
            </div>
          </section>
          <section className="my-14">
            <h2 className="text-2xl font-bold">Contato</h2>
            <div className="flex justify-evenly mt-8">
              <div>
                <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                  <WhatsappLogo size={40} />
                </div>
                <span className="block font-bold text-lg">WhatsApp</span>
                <p className="text-sm">77 99985-8357</p>
              </div>
              <div>
                <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                  <Phone size={40} />
                </div>
                <span className="block font-bold text-lg">Telefone</span>
                <p className="text-sm">77 99985-8357</p>
              </div>
              <div>
                <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                  <EnvelopeSimple size={40} />
                </div>
                <span className="block font-bold text-lg">Email</span>
                <p className="text-sm">luisfernandinho094@gmail.com</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
