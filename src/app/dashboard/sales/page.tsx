"use client";
import { Dropdown } from "@/components/Dropdown";
import { Table } from "@/components/Table";
import { api } from "@/lib/api";
import { Search, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface dataTableInfo {
  table: "user" | "product" | "sales";
  nameFild: string;
  nameData: string;
}

export interface Sales {
  id: string;
  productId: string;
  product: any;
  clientId: string;
  amount: number;
  totalPrice: number;
  createdAt: Date;
}

export default function product() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sales, setsales] = useState<Sales[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emptyData, setEmptyData] = useState(false);
  const columnName: dataTableInfo[] = [
    { table: "sales", nameFild: "user", nameData: "usuario" },
    { table: "sales", nameFild: "sales", nameData: "produto" },
    { table: "sales", nameFild: "date", nameData: "data" },
    { table: "sales", nameFild: "amount", nameData: "quantidade" },
    { table: "sales", nameFild: "price", nameData: "total preço" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handlersales();
  }, []);

  // select

  const handlersales = async () => {
    const response = await api.get("/sales");
    const sales: Sales[] = response.data;

    setsales(sales);
  };

  // filter

  const handlerFilter = async (filter: string) => {
    console.log(filter);
    if (filter !== "") {
      const filterData = sales.filter((sales: Sales) =>
        sales.product.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filterData.length == 0) {
        setEmptyData(true);
      } else {
        // setEmptyData(true);
        setsales(filterData);
      }
    } else {
      handlersales();
      setEmptyData(true);
    }
  };

  //delete

  const handlerDelete = async (id: string) => {
    await api.delete(`/sales/` + id);
    setsales(sales.filter((data) => data.id != id));
  };

  return (
    <div className="h-screen w-full flex flex-col gap-y-3 ">
      {/* header */}
      <div className=" relative bg-white rounded-lg w-full flex justify-center  p-2 gap-x-5 flex-col md:flex-row">
        {/* INPUT SEARCH  */}
        <div className="w-[100%] flex items-center justify-center  md:w-[50%]  bg-[#F1F3F4] p-2 rounded-lg">
          <input
            onChange={(e) => handlerFilter(e.target.value)}
            placeholder="Pesquisar"
            type="text"
            className="bg-transparent w-full outline-none text-[#081226] self-center"
          />
          <Search className="text-[#081226]" />
        </div>
        {/* Dropdown  <Dropdown handleOrder={(selected) => handlerOrder(selected)} />  */}

        {/* LISTA e GRADE */}
        {/* <div className="md:absolute  md:flex right-2 w-[20%] md:w-[10%]">
          <Link
            href="/dashboard/sales/create"
            className="bg-green-600 w-full flex rounded-xl p-2 items-center justify-center md:gap-x-2"
          >
            <Plus className="text-white h-5 w-5" />
            <p className="hidden md:block text-white font-bold">Criar</p>
          </Link>
        </div> */}
      </div>

      {/* table */}
      <div className=" relative bg-white rounded-lg w-full p-5 h-[85%]">
        <Table
          data={sales}
          title="Vedas"
          column={columnName}
          handleDelete={(id) => handlerDelete(id)}
          emptyData={emptyData}
        />
      </div>
    </div>
  );
}
5;
