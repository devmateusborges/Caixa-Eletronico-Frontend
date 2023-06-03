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
  const [describe, setDescribe] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  // useEfect
  useEffect(() => {
    handlerSelect();
  }, []);

  async function handlerSelect() {
    const resposeApi = await api.get("/product/" + params.id);
    console.log(resposeApi.data);
    setName(resposeApi.data.name);
    setDescribe(resposeApi.data.describe);
    setPrice(resposeApi.data.price);
    setAmount(resposeApi.data.amount);
  }

  // update
  async function handlerUpdate(event: FormEvent<HTMLFormElement>) {
    // Evita o envio padrão do formulário
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await api.put("/product/" + params.id, {
      name: name,
      describe: formData.get("describe"),
      price: Number(formData.get("price")),
      amount: Number(formData.get("amount")),
    });

    push("/dashboard/product");
  }

  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-2  ">
        <div className="bg-blue-600 w-full text-white md:p-2 rounded-lg flex">
          <p className="w-full flex ">
            Painel {<ChevronsRight />} Produto {<ChevronsRight />} Editar
            Produto
          </p>
        </div>
        <div className="w-full h-full bg-white p-3 rounded-lg flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[5vh]">Atualizar Produto</h1>

          <div className="w-full flex items-center justify-center ">
            <form
              onSubmit={handlerUpdate}
              className="w-[60%] flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name">* Nome do produto</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: TV, Armario, Sofa ..."
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="describe">* Descrição</label>
                <textarea
                  value={describe}
                  onChange={(e) => setDescribe(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  name="amount"
                  id="amount"
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: 150"
                  type="number"
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
