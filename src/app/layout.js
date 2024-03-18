import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Setting from "@/components/Setting";
import Bottombar from "@/components/Bottombar";
import NavSmall from "@/components/NavSmall";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "This is Dua & Ruqyah Website where you can find all important duas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" 4xl:h-[100vh] w-full bg-[#e6ebee] 4xl:px-7 flex gap-7">
          <div className="hidden 3xl:block h-full py-8 ">
            <Sidebar ></Sidebar>
          </div>

          <div className="hidden w-full 3xl:block pt-8">
            <Navbar></Navbar>
            <div className="flex justify-between gap-6">
              <div className="flex-1" >
                {children}
              </div>
              <div className="w-[20%] hidden  5xl:block  rounded-3xl bg-white shadow-md overflow-hidden mt-5">
                <Setting></Setting>
              </div>
            </div>
          </div>
        </div>

        <div className="3xl:hidden h-[full] bg-[#e6ebee] ">
          <NavSmall></NavSmall>
          <div className="px-4">
            {children}
          </div>
          {/* display in small devise */}
          <div className="3xl:hidden fixed bottom-0 w-full rounded-[50px] shadow-inner z-20">
            <Bottombar></Bottombar>
          </div>
        </div>
      </body>
    </html>
  );
}
