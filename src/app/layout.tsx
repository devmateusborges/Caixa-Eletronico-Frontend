import "./globals.css";
import { ReactNode } from "react";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import { Menu } from "../components/Menu";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "CRUD - Faculdade",
  description: "front-end sistema PW",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-100   font-sans text-gray-500 `}
      >
        <div className="w-full h-full md:hidden flex items-center justify-center">
          <p className="font-bold">Essa aplicação somente para computadores</p>
        </div>
        <div className="hidden md:block">{children}</div>
      </body>
    </html>
  );
}
