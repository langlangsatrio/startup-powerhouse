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
      <div className="sticky top-0 z-20 bg-white bg-opacity-70 shadow-sm backdrop-blur-xl backdrop-filter">
        <nav className="flex w-full flex-col justify-between px-6 py-3 shadow-sm md:px-20 md:py-5 lg:px-24 lg:py-6">
          {/**Div dibawah adalah pemisah antara content utama dengan phone menu Modelnya flex-col supaya phone menu bisa turun kebawah
           * Div content mewakili konten navbar
           * Div phone menu mewakili menu handphone
           */}
          <div className="content flex items-center justify-between">
            <div className="logo flex flex-col">
              <h1 className="logo-text text-xl font-bold">Startup</h1>
              <h1 className="logo-text text-xl font-bold">Powerhouse</h1>
            </div>
            <div className="menu hidden md:gap-3 lg:flex">
              <ul className="flex gap-10">
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="cta hidden lg:flex">
              <Button>Book a call now</Button>
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
          <div className="phone-menu">
            {isOpen && (
              <div className="menuphone my-3 flex flex-col py-2 lg:hidden">
                <li className="my-2 list-none">
                  <a href="#" className="font-semibold">
                    Service
                  </a>
                </li>
                <li className="my-2 list-none">
                  <a href="#" className="font-semibold">
                    Service
                  </a>
                </li>
                <li className="my-2 list-none">
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
