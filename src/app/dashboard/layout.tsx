import { ReactNode } from "react";

import { Menu } from "../../components/Menu";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row gap-y-3 md:gap-x-3  md:p-3 bg-[#B5C2C9] items-center justify-center">
        <div className="w-full md:w-[18%] h-full ">
          <Menu />
        </div>
        <div className="h-full w-full md:w-[75%] ">{children}</div>
      </div>
      <footer className=" flex w-90 items-center justify-center bg-[#081226] ">
        <div>
          <p>&copy; Mateus Borges</p>
        </div>
      </footer>
    </>
  );
}
