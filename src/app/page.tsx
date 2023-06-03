import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[url(../assets/background.jpg)] bg-cover bg-no-repeat">
      <div className=" w-full h-screen bg-black/70 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white">
            Bem vindo/a, ao cadastro de usuarios.
          </h1>
        </div>

        <div className="w-fill mt-10 flex items-center justify-center gap-x-10 ">
          <div className=" flex h-full  w-[50%] flex-col items-center text-white justify-center">
            <p className="mt-5 text-justify ">
              Migrei do PHP para JavaScript com React e Next.js para aproveitar
              as vantagens oferecidas por essas tecnologias. Com React, criei
              uma interface de usuário dinâmica e interativa, utilizando
              componentes reutilizáveis para melhorar a experiência do usuário.
              Já o Next.js proporcionou recursos como renderização no lado do
              servidor (SSR) e geração de páginas estáticas, resultando em um
              sistema mais rápido e eficiente. Essa mudança também me permitiu
              explorar um ecossistema de ferramentas e bibliotecas mais
              atualizado, expandindo minhas habilidades e acompanhando as
              tendências do desenvolvimento web.
            </p>
            <div className="w-flex mt-6 flex items-center justify-center gap-x-5 ">
              <Link
                href="/dashboard"
                className="rounded-lg bg-emerald-500/60 p-3 text-white hover:bg-emerald-500"
              >
                {" "}
                Painel de controle{" "}
              </Link>
              <button className="rounded-lg bg-purple-500/60 p-3 text-white hover:bg-purple-500">
                {" "}
                Ver mais{" "}
              </button>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="h-60 w-96 rounded-lg"
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
