"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import avatarImage from "../../../../assets/user.png";
import { ChevronsRight } from "lucide-react";
import { api } from "@/lib/api";
import { Dropdown } from "@/components/Dropdown";

export default function Create() {
  const { push } = useRouter();
  const [selected, setSelected] = useState("🔵");
  async function handlerCreateMemory(event: FormEvent<HTMLFormElement>) {
    // Evita o envio padrão do formulário
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await api.post("/product", {
      name: formData.get("name"),
      describe: formData.get("describe"),
      price: Number(formData.get("price")),
      amount: Number(formData.get("amount")),
      icon: selected,
    });

    push("/dashboard/product");
  }

  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-2  ">
        <div className="bg-blue-600 w-full text-white md:p-2 rounded-lg flex">
          <p className="w-full flex ">
            Painel {<ChevronsRight />} Produtos {<ChevronsRight />} Adicionando
            Produto
          </p>
        </div>
        <div className="w-full h-full bg-white p-3 rounded-lg flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[5vh]">Cadastro de Produtos</h1>

          <div className="w-full flex items-center justify-center ">
            <form
              onSubmit={handlerCreateMemory}
              className="w-[60%] flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name">* Nome do produto</label>
                <input
                  id="name"
                  name="name"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: TV, Armario, Sofa ..."
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="describe">* Descrição</label>
                <textarea
                  placeholder="Descrição"
                  className=" bg-[#D6D6D6] border border-[#D6D6D6] outline-none rounded-lg p-2"
                  name="describe"
                  id="describe"
                  cols={1}
                  rows={1}
                ></textarea>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="price">* Preço</label>
                <input
                  name="price"
                  id="price"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: R$12,00"
                  type="number"
                />
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="amount">* Quantidade</label>
                <input
                  name="amount"
                  id="amount"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: 150"
                  type="number"
                />
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="drop">* Selecione o icone</label>
                <Dropdown handleOrder={(emoji) => setSelected(emoji)} />
              </div>

              <button
                type="submit"
                className=" inline-block rounded-lg bg-green-500 px-5 py-3 font-alt text-sm uppercase self-end leading-none text-white font-bold hover:bg-green-600"
              >
                Cadastrar
              </button>
            </form>
          </div>
          <div className="mt-5  p-3 w-[85%]">
            <p className="text-justify">
              Bem-vindo à nossa página de cadastro de produtos! Aqui, você pode
              registrar seus produtos de forma fácil e rápida. Preencha o
              formulário com as informações do produto e crie uma conta para
              aproveitar todos os benefícios. Estamos ansiosos para apresentar
              seu produto em nossa plataforma. Aproveite ao máximo as
              oportunidades que oferecemos!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
