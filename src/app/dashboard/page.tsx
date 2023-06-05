"use client";
import { Dropdown } from "@/components/Dropdown";
import { Table } from "@/components/Table";
import { Grafic } from "@/components/grafic";
import { api } from "@/lib/api";
import { dateFormat, moneyFormat } from "@/utils/FuncUtil";

import { Search, List, Grid, Store, CircleDollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export interface product {
  id: string;
  name: string;
  price: number;
  amount: number | null;
  createdAt: Date;
}

export interface user {
  id: string;
  name: string;
  login: string;
  active: string;
  cretedAt: string;
  avatarUrl: string;
}
export interface Sales {
  id: string;
  totalPrice: number;
  amount: number;
  cretedAt: string;
  product: product;
  user: user;
}

export default function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [salesTotalDay, setSalesTotalDay] = useState<number>(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [amountTotal, setAmountTotal] = useState<number>(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [salesTotal, setSalesTotal] = useState<number>(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [salesHistory, setSalesHistory] = useState<Sales[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [salesGraficPlus, setSalesGraficPlus] = useState<any>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [salesGraficSub, setSalesGraficSub] = useState<any>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handlerProduct();
  }, []);

  // select

  const handlerProduct = async () => {
    const response = await api.get("/saleshistory");
    const products: Sales[] = response.data;

    setSalesHistory(products);
    const dateday = dateFormat(String(new Date()));
    let sumday = 0;
    let sumtotal = 0;

    products.map((product) => {
      const data = dateFormat(String(product.product.createdAt));
      sumtotal += product.totalPrice;
      if (data == dateday) {
        sumday += product.totalPrice;
      }

      setSalesTotal(sumtotal);
      setSalesTotalDay(sumday);
      setAmountTotal(products.length);
    });

    await handlerGrafic(products);
  };

  const handlerGrafic = async (salesTotal: Sales[]) => {
    // mais vendido
    let ant = 0;
    // menos vendido
    let ont = 0;
    salesTotal.map((sales) => {
      ont = sales.amount;
      if (sales.amount > ant) {
        ant = Number(sales.amount);
        let arr = [sales.product.name, ant];
        setSalesGraficPlus(arr);
      } else {
        let arr = [sales.product.name, ant];
        setSalesGraficPlus(arr);
      }
      if (sales.amount < ont) {
        ant = Number(sales.amount);
        let arr = [sales.product.name, ont];
        setSalesGraficSub(arr);
      } else {
        let arr = [sales.product.name, ant];
        setSalesGraficSub(arr);
      }
    });
  };

  return (
    <div className="h-full w-full flex flex-col gap-y-3 ">
      <div className="w-full flex flex-row gap-x-5">
        <div className=" w-[30%] bg-white p-5 rounded-lg">
          <div className="w-full  h-full flex flex-row items-center justify-center gap-x-2">
            <p className="fonte-bold md:text-sm xl:text-3xl">
              {moneyFormat(salesTotalDay)}
            </p>
            <CircleDollarSign />
          </div>
          <p className="text-center uppercase text-xs font-bold">
            Vendas do Dia
          </p>
        </div>
        <div className="w-[30%] bg-white p-5 items-center justify-center rounded-lg">
          <div className="w-full h-full flex flex-row items-center justify-center gap-x-2">
            <p className="fonte-bold md:text-sm  xl:text-3xl">
              {moneyFormat(salesTotal)}
            </p>
            <CircleDollarSign />
          </div>
          <p className="text-center uppercase text-xs font-bold">
            total de produtos vendido
          </p>
        </div>
        <div className=" w-[30%]  bg-white p-5 rounded-lg">
          <div className="flex h-full flex-row items-center justify-center gap-x-2">
            <p className="fonte-bold md:text-xs xl:text-3xl  ">{amountTotal}</p>
            <Store />
          </div>
          <p className="text-center uppercase text-xs font-bold">
            total de produtos vendido
          </p>
        </div>
      </div>
      <div className="w-full h-[83%] flex flex-row gap-x-5">
        <div className="w-[62%] flex flex-col items-start justify-center bg-white rounded-lg">
          {/* grafico de vendas */}
          <div className="w-full flex  flex-col items-center justify-center">
            <h1 className="self-center font-bold text-[25px]">
              Graficos de vendas
            </h1>
            <p>Esses graficos acompanha em tempo real as suas vendas</p>
          </div>

          <Grafic
            type="ColumnChart"
            width="90%"
            height="150px"
            data={[["Produto", "Quantidade"], salesGraficSub, salesGraficPlus]}
          />
          <Grafic
            type="ColumnChart"
            width="90%"
            height="150px"
            data={[["Produto", "Quantidade"], salesGraficSub, salesGraficPlus]}
          />
        </div>
        <div className="w-[30%] flex flex-col items-center bg-white rounded-lg">
          <h1 className="self-center font-bold text-[15px] p-3">
            Historico de compra
          </h1>
          <div className="w-full flex-col h-[90%] overflow-y-scroll">
            {/* card  */}
            {salesHistory.map((sales) => (
              <div
                key={sales.id}
                className="w-full flex flex-col border border-b-zinc-500 p-2"
              >
                <div className="w-full flex flex-row gap-x-5 ">
                  <p className="font-bold">
                    Qtde: <span className="font-normal">{sales.amount}</span>
                  </p>
                  <p className="font-bold">
                    Prdto:{" "}
                    <span className="font-normal">{sales.product.name}</span>
                  </p>
                  <p className="font-bold">
                    Prç:{" "}
                    <span className="font-normal">
                      {moneyFormat(sales?.totalPrice)}
                    </span>{" "}
                  </p>
                </div>
                <div className="w-full flex flex-row gap-x-1">
                  <p>usuario: </p>
                  <p>{sales.user.name}</p>
                  <p>{dateFormat(sales.cretedAt).substring(0, 10)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
5;
