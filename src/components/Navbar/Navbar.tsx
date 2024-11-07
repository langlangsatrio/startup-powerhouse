"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <nav className="px-6 py-3 w-full shadow-sm flex flex-col justify-between md:px-10 md:py-5 bg-gradient-to-t from-transparent via-slate-300 to-slate-400 md:bg-slate-400">
          {/**Div dibawah adalah pemisah antara content utama dengan phone menu Modelnya flex-col supaya phone menu bisa turun kebawah
           * Div content mewakili konten navbar
           * Div phone menu mewakili menu handphone
           */}
          <div className="content border border-blue-400 flex justify-between items-center">
            <div className="logo flex flex-col">
              <h1 className="logo-text text-xl font-bold">Startup</h1>
              <h1 className="logo-text text-xl font-bold">Powerhouse</h1>
            </div>
            <div className="menu hidden lg:flex md:gap-3">
              <ul className="flex gap-10">
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
              </ul>
            </div>
            <div className="cta hidden lg:flex">
              <Button>Book your introductory call now</Button>
            </div>

            <div className="hamburger-wrapper flex flex-col border-green-600 lg:hidden">
              <div className="hamburger inline-flex lg:hidden">
                <Button onClick={toggleNavbar}>
                  {!isOpen ? <GiHamburgerMenu /> : <IoMdClose />}
                </Button>
              </div>
            </div>
          </div>
          {/**Div dibawah adalah menu untuk handphone */}
          <div className="phone-menu border border-purple-900">
            {isOpen && (
              <div className="menuphone flex flex-col py-2 my-3 lg:hidden">
                <li className="list-none my-2">
                  <a href="#" className="font-semibold">
                    Service
                  </a>
                </li>
                <li className="list-none my-2">
                  <a href="#" className="font-semibold">
                    Service
                  </a>
                </li>
                <li className="list-none my-2">
                  <a href="#" className="font-semibold">
                    Service
                  </a>
                </li>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
