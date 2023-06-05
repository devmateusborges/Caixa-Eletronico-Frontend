"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

export interface Sales {
  productId: string;
  clientId: string;
  amount: number;
  totalPrice: number;
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
  const [nameUser, setNameUser] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  // useEfect
  useEffect(() => {
    handlerSelect();
  }, []);

  async function handlerSelect() {
    const resposeApi = await api.get("/sales/" + params.id);

    setNameUser(resposeApi.data.User.name);
    setNameProduct(resposeApi.data.product.name);
    setPrice(resposeApi.data.totalPrice);
    setAmount(resposeApi.data.amount);
  }

  // update
  async function handlerUpdate(event: FormEvent<HTMLFormElement>) {
    push("/dashboard/sales");
  }

  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-2  ">
        <div className="bg-blue-600 w-full text-white md:p-2 rounded-lg flex">
          <p className="w-full flex ">
            Painel {<ChevronsRight />} Produto {<ChevronsRight />} ver vendas
          </p>
        </div>
        <div className="w-full h-full bg-white p-3 rounded-lg flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[5vh]">Vendas</h1>

          <div className="w-full flex items-center justify-center ">
            <form
              onSubmit={handlerUpdate}
              className="w-[60%] flex flex-col gap-y-3"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name">* Nome do usuario</label>
                <input
                  id="name"
                  name="name"
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="bg-[#D6D6D6] rounded-lg p-2"
                  placeholder="EX: TV, Armario, Sofa ..."
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="describe">* Nome do produto</label>
                <textarea
                  value={nameProduct}
                  placeholder="Descrição"
                  className=" bg-[#D6D6D6] border border-[#D6D6D6] outline-none rounded-lg p-2"
                  name="describe"
                  id="describe"
                  cols={1}
                  rows={1}
                ></textarea>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="price">* Preço total</label>
                <input
                  value={price}
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
                Voltar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
