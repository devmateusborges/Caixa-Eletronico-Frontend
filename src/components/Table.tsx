import React, { useEffect, useState } from "react";
import { Check, Pencil, Trash2, X } from "lucide-react";
import { user } from "@/app/dashboard/user/page";
import Link from "next/link";
import { formatDateTimeColumn, moneyFormat } from "@/utils/FuncUtil";
import { api } from "@/lib/api";

interface dataTableInfo {
  table: "user" | "product" | "sales";
  nameFild: string;
  nameData: string;
}

interface table {
  title: string;
  data: any[];
  column: dataTableInfo[];
  handleDelete: (id: string) => void;
  emptyData: boolean;
}

export function Table({ data, title, column, handleDelete, emptyData }: table) {
  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(0);

  useEffect(() => {
    setActive(0);
    setDisabled(0);
    data.map((item) => {
      if (item.active) {
        setActive(active + 1);
      } else {
        setDisabled(disabled + 1);
      }
    });
  }, [data]);
  return (
    <>
      {/* Header table */}
      <div className="w-full  relative flex">
        <div className="w-full flex flex-col ">
          <h1 className="text-[#081226] text-lg md:text-4xl font-bold">
            {title}
          </h1>
          <p>
            {" "}
            <span className="text-[#081226] font-bold">
              {data?.length} Total{" "}
            </span>{" "}
            de {title}
          </p>
        </div>
        {column[0].table == "user" && (
          <div className="absolute right-3 flex  gap-x-3 items-center justify-center">
            <div className="w-[50%] flex flex-col items-center justify-center">
              <h1 className="text-[#081226] text-lg md:text-3xl font-semibold">
                {active}
              </h1>
              <p className="mt-1 text-sm">Ativos</p>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
              <h1 className="text-[#081226] text-lg md:text-3xl font-semibold">
                {disabled}
              </h1>
              <p className="mt-1 text-sm">Desativados</p>
            </div>
          </div>
        )}
      </div>
      {/* table */}
      <div className="w-full  overflow-scroll h-[85%]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {column.map((data) => (
                <th
                  key={data.nameData + 45}
                  className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {data.nameData}
                </th>
              ))}

              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ed/de
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((data: any, index) => (
              <tr key={data.id}>
                {column[0].table == "user" && (
                  <>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.name}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.login}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {formatDateTimeColumn(new Date(data?.cretedAt)).substring(
                        0,
                        10
                      )}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.active ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </td>
                  </>
                )}
                {column[0].table == "product" && (
                  <>
                    <td>
                      <p className="md:text-3xl text-center">{data?.icon}</p>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.name}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.describe.substring(0, 20) + "..."}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {formatDateTimeColumn(new Date(data?.cretedAt)).substring(
                        0,
                        10
                      )}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {moneyFormat(data?.price)}
                    </td>
                  </>
                )}

                {column[0].table == "sales" && (
                  <>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.user.name}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <p>
                        {" "}
                        {data?.product.icon} {data?.product.name}
                      </p>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {formatDateTimeColumn(new Date(data?.cretedAt)).substring(
                        0,
                        10
                      )}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {data?.amount}X
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {moneyFormat(data?.totalPrice)}
                    </td>
                  </>
                )}

                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="w-full flex ">
                    <Link
                      href={`/dashboard/${column[0].table}/${data?.id}`}
                      className="text-blue-500 hover:bg-blue-600 hover:text-white font-bold p-2 rounded-full"
                    >
                      <Pencil />
                    </Link>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="text-red-500 hover:bg-red-600 hover:text-white font-bold p-2 rounded-full"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
