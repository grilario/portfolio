import Button from "@/components/Button";
import Head from "next/head";

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
                <a href="#" className="hover:text-gray-500">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">Sobre</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">Projetos</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">Contatos</a>
              </li>
            </ul>
          </nav>
          <Button href="https://www.google.com" >Conversar</Button>
        </header>
      </div>
    </>
  );
}
