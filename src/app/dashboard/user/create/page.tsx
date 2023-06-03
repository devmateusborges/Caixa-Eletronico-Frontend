"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export interface user {
  id: string;
  name: string;
  login: string;
  active: string;
  cretedAt: string;
  avatarUrl: string;
}
import avatarImage from "../../../../assets/user.png";
import { ChevronsRight } from "lucide-react";
import { api } from "@/lib/api";

export default function Create() {
  const { push } = useRouter();
  const [avatarUrl, setAvatarUrl] = useState("");

  async function handlerCreateMemory(event: FormEvent<HTMLFormElement>) {
    // Evita o envio padrão do formulário
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await api.post("/user", {
      name: formData.get("name"),
      login: formData.get("login"),
      password: formData.get("password"),
      active: formData.get("active") == "true" && true,
      avatarUrl: formData.get("avatarUrl"),
    });

    push("/dashboard/user");
  }

  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-2  ">
        <div className="bg-blue-600 w-full text-white md:p-2 rounded-lg flex">
          <p className="w-full flex ">
            Painel {<ChevronsRight />} Usuarios {<ChevronsRight />} Adicionando
            Usuario
          </p>
        </div>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[5vh]">Cadastro de usuarios</h1>

          <div className="w-full flex items-center justify-center ">
            <div className="w-[40%] border-black flex items-center justify-center">
              <Image
                className="w-60 h-60 rounded-full border-2 border-blue-600"
                src={avatarUrl != "" ? avatarUrl : avatarImage}
                alt="logo"
                width={150}
                height={150}
              />
            </div>
            <form
              onSubmit={handlerCreateMemory}
              className="w-[60%] flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name">* Nome</label>
                <input
                  id="name"
                  name="name"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: Mateus"
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="login">* Login</label>
                <input
                  name="login"
                  id="login"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: 456821"
                  type="text"
                />
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="password">* Senha</label>
                <input
                  name="password"
                  id="password"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: *******"
                  type="password"
                />
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="avatarUrl">* Url do Avatar</label>
                <input
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  name="avatarUrl"
                  value={avatarUrl}
                  id="avatarUrl"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: https://www.github.com/devmateusborges.png"
                  type="url"
                />
              </div>
              <div className="w-full flex gap-x-2 ">
                <label htmlFor="check">Ativo</label>
                <input
                  value="true"
                  id="check"
                  name="active"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  type="checkbox"
                />
              </div>

              <button className=" inline-block rounded-lg bg-green-500 px-5 py-3 font-alt text-sm uppercase self-end leading-none text-white font-bold hover:bg-green-600">
                Cadastrar
              </button>
            </form>
          </div>
          <div className="mt-5  p-3 w-[85%]">
            <p className="text-justify">
              Bem-vindo à nossa página de cadastro de usuários! Aqui, você pode
              se inscrever e fazer parte da nossa comunidade. É fácil e rápido!
              Basta preencher o formulário abaixo com as suas informações
              pessoais e criar uma conta para aproveitar todos os benefícios que
              oferecemos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
