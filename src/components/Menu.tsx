import { User, Gauge, LogOut, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo_fafram.png";
import { AppIcon } from "./icon";

export function Menu() {
  return (
    <nav className="w-full hidden md:flex flex-col gap-y-5 bg-[#F1F3F4] h-full rounded-lg p-5">
      <div className="w-full flex items-center justify-center flex-col">
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <h1 className="font-bold text-2xl font-sans">Loja Vendas</h1>
      </div>

      <div className="w-full flex flex-col gap-y-3">
        <Link
          className="w-full items-center justify-center flex gap-x-2 bg-[#081226] p-2 text-white rounded-full "
          href="/dashboard"
        >
          <User className="w-4 h-4" />
          <p> Painel</p>
        </Link>
        <Link
          className="w-full items-center justify-center flex gap-x-2 bg-[#081226] p-2 text-white rounded-full "
          href="/dashboard/user"
        >
          <Gauge className="w-4 h-4" />
          <p> Usuarios</p>
        </Link>
        <Link
          className="w-full items-center justify-center flex gap-x-2 bg-[#081226] p-2 text-white rounded-full "
          href="/dashboard/product"
        >
          <ShoppingBag className="w-4 h-4" />
          <p> Produtos</p>
        </Link>
        <Link
          className="w-full items-center justify-center flex gap-x-2 bg-[#081226] p-2 text-white rounded-full "
          href="/dashboard/sales"
        >
          <ShoppingBag className="w-4 h-4" />
          <p> vendas</p>
        </Link>
        <Link
          className="w-full items-center justify-center flex gap-x-2 bg-red-500/70 p-2 text-white rounded-full "
          href="/"
        >
          <LogOut className="w-4 h-4" />
          <p>Sair</p>
        </Link>
      </div>
    </nav>
  );
}
