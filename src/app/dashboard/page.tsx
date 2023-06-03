import { Dropdown } from "@/components/Dropdown";
import { Table } from "@/components/Table";
import { Grafic } from "@/components/grafic";

import { Search, List, Grid } from "lucide-react";

export default function dashboard() {
  return (
    <div className="h-full w-full flex flex-col gap-y-3 ">
      <div className="w-full flex flex-row gap-x-5">
        <div className=" w-[30%] bg-white p-5 rounded-lg">
          <p className="fonte-bold text-[30px]">R$125,00</p>
        </div>
        <div className=" w-[30%] bg-white p-5 rounded-lg">
          <p className="fonte-bold text-[30px]">R$1250,00</p>
        </div>
        <div className=" w-[30%] bg-white p-5 rounded-lg">
          <p className="fonte-bold text-[30px]">500</p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-x-5">
        <div className="w-[62%] flex flex-col items-start justify-center bg-white rounded-lg">
          {/* grafico de vendas */}
          <div className="w-full flex  flex-col items-center justify-center">
            <h1 className="self-center font-bold text-[25px]">
              Graficos de vendas e usuarios
            </h1>
            <p>Esses graficos acompanha em tempo real as suas vendas</p>
          </div>
          <Grafic
            type="ColumnChart"
            width="90%"
            height="150px"
            data={[
              ["ano", "usuarios"],
              ["12/05", 5],
              ["12/07", 50],
            ]}
          />

          {/* grafico de produtos*/}
          <Grafic
            type="ComboChart"
            width="90%"
            height="300px"
            data={[
              ["ano", "Vendas"],
              [0, 1000],
              [12, 8],
            ]}
          />
        </div>
        <div className="w-[30%] flex flex-col items-center bg-white rounded-lg">
          <h1 className="self-center font-bold text-[15px] p-3">
            Historico de compra
          </h1>
          <div className="w-full flex-col h-[20%] overflow-y-scroll">
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
            {/* card  */}
            <div className="w-full flex flex-col border border-b-zinc-500 p-2">
              <div className="w-full flex flex-row gap-x-5 ">
                <p className="font-bold">
                  Qtde: <span className="font-normal">5</span>
                </p>
                <p className="font-bold">
                  Prdto: <span className="font-normal">TV</span>
                </p>
                <p className="font-bold">
                  Prç: <span className="font-normal">R$10,000</span>{" "}
                </p>
              </div>
              <div className="w-full flex flex-row gap-x-1">
                <p>usuario: </p>
                <p>sem identificação</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
5;
