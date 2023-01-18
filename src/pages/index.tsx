import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";

import paintBrush from "../../public/paintbrush.svg";
import computer from "../../public/computer.svg";
import icons from "../../public/icons.png";

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
        </main>
      </div>
    </>
  );
}
