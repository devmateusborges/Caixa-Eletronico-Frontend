import { ReactNode } from "react";

import { Menu } from "../../components/Menu";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row gap-y-3 md:gap-x-3  md:p-3 bg-[#B5C2C9] items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-bold">Essa aplicação somente para computadores</p>
        </div>
        <div className="hidden md:block w-full md:w-[18%] h-full ">
          <Menu />
        </div>
        <div className="hidden md:block h-full w-full md:w-[75%] ">
          {children}
        </div>
      </div>
      <footer className="hidden md:flex w-90 items-center justify-center bg-[#081226] ">
        <div>
          <p>&copy; Mateus Borges</p>
        </div>
      </footer>
    </>
  );
}
