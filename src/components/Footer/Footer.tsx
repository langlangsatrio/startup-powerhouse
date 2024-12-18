import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="page-layout flex h-full flex-col gap-0 border-yellow-600 bg-white px-10 pb-8 pt-14 md:py-24 lg:mt-0 lg:flex-col lg:gap-4 lg:px-44 lg:pt-16">
      <div className="footer-up flex flex-col justify-between lg:flex-row">
        <div className="mb-5 flex flex-col items-center justify-center lg:items-start">
          <div className="logo mb-3 flex flex-row gap-3 text-center lg:mb-0 lg:flex-col lg:gap-0 lg:text-left">
            <h1 className="logo-text mb-1 text-2xl font-bold lg:mb-3 lg:text-3xl">
              Startup
            </h1>
            <h1 className="logo-text mb-1 text-2xl font-bold lg:mb-5 lg:text-3xl">
              Powerhouse
            </h1>
          </div>
          <p className="text-xs lg:text-base">
            © Startup Powerhouse 2024. All right reserved.
          </p>
        </div>
        <div className="footer-menu hidden gap-10 text-3xl lg:flex lg:items-center">
          <FaXTwitter />
          <RiInstagramLine />
          <AiOutlineYoutube className="text-4xl" />
        </div>
      </div>
      <div className="footer-down">
        <div className="">
          <ul className="flex w-full basis-1/2 list-none flex-wrap justify-around gap-2 border-t border-t-gray-500 pt-5 text-xs text-gray-500 lg:justify-end lg:gap-8 lg:text-base">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">GDPR (For European Citizen)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
