"use client";
import { Dropdown } from "@/components/Dropdown";
import { Table } from "@/components/Table";
import { api } from "@/lib/api";
import { Search, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface dataTableInfo {
  table: "user" | "product";
  nameFild: string;
  nameData: string;
}

export interface product {
  id: string;
  name: string;
  price: number;
  amount: number | null;
  createdAt: Date;
}

export default function product() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState<product[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emptyData, setEmptyData] = useState(false);
  const columnName: dataTableInfo[] = [
    { table: "product", nameFild: "icon", nameData: "icone" },
    { table: "product", nameFild: "name", nameData: "nome" },
    { table: "product", nameFild: "describe", nameData: "descrição" },
    { table: "product", nameFild: "date", nameData: "data" },
    { table: "product", nameFild: "price", nameData: "preço" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handlerProduct();
  }, []);

  // select

  const handlerProduct = async () => {
    const response = await api.get("/product");
    const product: product[] = response.data;

    setProduct(product);
  };

  // filter

  const handlerFilter = async (filter: string) => {
    if (filter !== "") {
      const filterData = product.filter((product: product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filterData.length == 0) {
        setEmptyData(true);
      } else {
        // setEmptyData(true);
        setProduct(filterData);
      }
    } else {
      handlerProduct();
      setEmptyData(true);
    }
  };

  //delete

  const handlerDelete = async (id: string) => {
    await api.delete(`/product/` + id);
    setProduct(product.filter((data) => data.id != id));
  };

  // sort
  const handlerOrder = async (type: "name" | "date") => {
    if (type == "name") {
      const filterData = product.filter((product: product) =>
        product.name.startsWith("a")
      );
      setProduct(filterData);
    } else if (type == "date") {
      const filterData = product.filter((product: product) =>
        product.name.startsWith("a")
      );
    }
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
        <div className="md:absolute  md:flex right-2 w-[20%] md:w-[10%]">
          <Link
            href="/dashboard/product/create"
            className="bg-green-600 w-full flex rounded-xl p-2 items-center justify-center md:gap-x-2"
          >
            <Plus className="text-white h-5 w-5" />
            <p className="hidden md:block text-white font-bold">Criar</p>
          </Link>
        </div>
      </div>

      {/* table */}
      <div className=" relative bg-white rounded-lg w-full p-5 h-[85%]">
        <Table
          data={product}
          title="Produtos"
          column={columnName}
          handleDelete={(id) => handlerDelete(id)}
          emptyData={emptyData}
        />
      </div>
    </div>
  );
}
5;
