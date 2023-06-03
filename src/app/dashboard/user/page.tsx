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

export interface user {
  id: string;
  name: string;
  login: string;
  active: string;
  cretedAt: string;
  avatarUrl: string;
}

export default function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState<user[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emptyData, setEmptyData] = useState(false);

  const columnName: dataTableInfo[] = [
    { table: "user", nameFild: "name", nameData: "nome" },
    { table: "user", nameFild: "login", nameData: "login" },
    { table: "user", nameFild: "date", nameData: "data" },
    { table: "user", nameFild: "status", nameData: "status" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handlerUser();
  }, []);

  // select
  const handlerUser = async () => {
    const response = await api.get("/user");
    const User: user[] = response.data;

    setUser(User);
  };

  // filter
  const handlerFilter = async (filter: string) => {
    console.log(filter);
    if (filter !== "") {
      const filterData = user.filter((user: user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filterData.length == 0) {
        setEmptyData(true);
      } else {
        // setEmptyData(true);
        setUser(filterData);
      }
    } else {
      handlerUser();
      setEmptyData(true);
    }
  };

  // delete
  const handlerDelete = async (id: string) => {
    await api.delete(`/user/` + id);
    setUser(user.filter((data) => data.id != id));
  };

  // order
  const handlerOrder = async (type: "name" | "date") => {
    console.log(type);
    if (type == "name") {
      const filterData = user.sort();
      console.log(">>>>>>", user);
      setUser(filterData);
    } else if (type == "date") {
      const filterData = user.filter((user: user) => user.name.startsWith("a"));
      setUser(filterData);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-y-3 ">
      {/* header */}
      <div className=" relative bg-white  rounded-lg w-full flex p-2 gap-x-5 flex-col md:flex-row">
        {/* INPUT SEARCH  */}
        <div className="w-[100%]  md:w-[50%] flex bg-[#F1F3F4] p-2 rounded-lg">
          <input
            onChange={(e) => handlerFilter(e.target.value)}
            placeholder="Pesquisar"
            type="text"
            className="bg-transparent w-full outline-none text-[#081226]"
          />
          <Search className="text-[#081226]" />
        </div>
        {/* Dropdown   <Dropdown handleOrder={(selected) => console.log(selected)} /> */}

        {/* LISTA e GRADE */}
        <div className="md:absolute  md:flex right-2 w-[20%] md:w-[10%]">
          <Link
            href="/dashboard/user/create"
            className="bg-green-600 w-full flex rounded-xl p-2 items-center justify-center md:gap-x-2"
          >
            <Plus className="text-white h-5 w-5" />
            <p className="hidden md:block text-white font-bold">Criar</p>
          </Link>
        </div>
      </div>

      {/* table */}
      <div className=" relative bg-white rounded-lg w-full h-[85%] p-5">
        <Table
          data={user}
          title="Usuarios"
          column={columnName}
          handleDelete={(id) => handlerDelete(id)}
          emptyData={emptyData}
        />
      </div>
    </div>
  );
}
5;
