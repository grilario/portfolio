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

import gym from "../../public/gym-website.jpg";
import car from "../../public/bmw-website.jpg";
import player from "../../public/realtime-audio.png";
import todo from "../../public/todo-website.jpg";

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
                <a href="#home" className="hover:text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-500">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-500">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-500">
                  Contatos
                </a>
              </li>
            </ul>
          </nav>
          <Button blank href="https://wa.me/77999858357">
            Conversar
          </Button>
        </header>
        <main>
          <section
            id="home"
            className="min-h-screen flex flex-col justify-center relative"
          >
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
              <Button
                href="#projects"
                className="text-base font-medium px-6 py-3 my-10"
              >
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
          <section
            id="about"
            className="bg-gradient-to-b from-[#304DA1] to-[#3B5CC5] rounded-2xl p-10"
          >
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
          <section id="projects" className="my-10 pt-7">
            <h2 className="text-2xl font-bold">Projetos</h2>
            <div className="w-full mt-9 flex gap-8 justify-center flex-wrap">
              <div className="flex flex-col w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={gym} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Website de Academia</h3>
                <p className="text-justify mb-5">
                  Um website de apresentação de uma academia, design
                  desenvolvido por mim, apresenta os principais diferencias da
                  academia, as suas atividades, sua localização e um formulário
                  para contato.
                </p>
                <Button
                  href="https://grilario.github.io/gym-website/"
                  blank
                  className="w-full flex items-center justify-center gap-2 font-medium mt-auto"
                >
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="flex flex-col w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={car} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Lading Page</h3>
                <p className="text-justify mb-5">
                  Uma página de apresentação para a BMW M4, design feito por
                  mim, começa com uma imagem de destaque do carro, seguido por
                  uma descrição geral, há seções de especificações técnicas, com
                  informações detalhadas sobre o desempenho, a suspensão,
                  freios, rodas e pneus.
                </p>
                <Button
                  href="https://grilario.github.io/landing-bmw-m4/"
                  blank
                  className="w-full flex items-center justify-center gap-2 font-medium mt-auto"
                >
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="flex flex-col w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={player} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">
                  Player com efeitos em tempo real
                </h3>
                <p className="text-justify mb-5">
                  Um site com player de audio e um painel de controle que é
                  possível acionar efeitos que são mixados em tempo real.
                </p>
                <Button
                  href="https://github.com/grilario/js-expert-spotify"
                  blank
                  className="w-full flex items-center justify-center gap-2 font-medium mt-auto"
                >
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
              <div className="flex flex-col w-full max-w-md bg-white p-9 shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-2xl">
                <Image src={todo} alt="" className="w-full rounded-xl" />
                <h3 className="font-bold text-lg my-5">Todo list</h3>
                <p className="text-justify mb-5">
                  Um lista de tarefas, armazena as tarefas no navegador e
                  funciona offline
                </p>
                <Button
                  href="https://grilario.github.io/to-do-list/"
                  blank
                  className="w-full flex items-center justify-center gap-2 font-medium mt-auto"
                >
                  Ver projeto <ArrowUpRight weight="bold" size={16} />{" "}
                </Button>
              </div>
            </div>
          </section>
          <section id="contact" className="my-14">
            <h2 className="text-2xl font-bold">Contato</h2>
            <div className="flex justify-evenly mt-8">
              <div>
                <a
                  href="https://wa.me/77999858357"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                    <WhatsappLogo size={40} />
                  </div>
                  <span className="block font-bold text-lg">WhatsApp</span>
                  <p className="text-sm">77 99985-8357</p>
                </a>
              </div>
              <div>
                <a href="tel:77999858357" target="_blank" rel="noreferrer">
                  <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                    <Phone size={40} />
                  </div>
                  <span className="block font-bold text-lg">Telefone</span>
                  <p className="text-sm">77 99985-8357</p>
                </a>
              </div>
              <div>
                <a
                  href="malito:luisfernandinho094@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inline-block bg-white p-3 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)]">
                    <EnvelopeSimple size={40} />
                  </div>
                  <span className="block font-bold text-lg">Email</span>
                  <p className="text-sm">luisfernandinho094@gmail.com</p>
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer className="absolute left-0 w-full flex justify-center p-5 bg-black">
          <p className="text-white">Feito com ❤️ por @grilario</p>
        </footer>
      </div>
    </>
  );
}
