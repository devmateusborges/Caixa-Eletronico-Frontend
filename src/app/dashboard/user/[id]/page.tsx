"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";

interface update {
  params: {
    id: string;
  };
}

export default function Update({ params }: update) {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [active, setActive] = useState(1);
  // useEfect
  useEffect(() => {
    handlerSelect();
  }, []);

  async function handlerSelect() {
    const resposeApi = await api.get("/user/" + params.id);
    console.log(resposeApi.data);
    setName(resposeApi.data.name);
    setLogin(resposeApi.data.login);
    setAvatarUrl(resposeApi.data.avatarUrl);
    setActive(resposeApi.data.active);
    setPass(resposeApi.data.password);
  }

  // update
  async function handlerUpdate(event: FormEvent<HTMLFormElement>) {
    // Evita o envio padrão do formulário
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await api.put("/user/" + params.id, {
      name: name,
      login: login,
      password: pass,
      active: active,
      avatarUrl: avatarUrl,
    });

    push("/dashboard/user");
  }

  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-2  ">
        <div className="bg-blue-600 w-full text-white md:p-2 rounded-lg flex">
          <p className="w-full flex ">
            Painel {<ChevronsRight />} Usuarios {<ChevronsRight />} Atualizando
            Usuario
          </p>
        </div>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[5vh]">Cadastro de usuarios</h1>

          <div className="w-full flex items-center justify-center ">
            <div className="hidden md:flex  w-[40%] border-black items-center justify-center">
              <Image
                className="w-60 h-60 rounded-full border-2 border-blue-600"
                src={avatarUrl != "" ? avatarUrl : avatarImage}
                alt="logo"
                width={150}
                height={150}
              />
            </div>
            <form
              onSubmit={handlerUpdate}
              className=" w-full md:w-[60%] flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name">* Nome</label>
                <input
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: Mateus"
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="login">* Login</label>
                <input
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  name="login"
                  id="login"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: 456821"
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="pass">* Senha</label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  name="pass"
                  id="pass"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: *******"
                  type="text"
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
                  type="text"
                />
              </div>
              <div className="w-full flex gap-x-2 ">
                <label htmlFor="check">Ativo</label>
                <input
                  value={active}
                  id="check"
                  name="active"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  type="checkbox"
                />
              </div>

              <button className=" inline-block rounded-lg bg-green-500 px-5 py-3 font-alt text-sm uppercase self-end leading-none text-white font-bold hover:bg-green-600">
                Atualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
