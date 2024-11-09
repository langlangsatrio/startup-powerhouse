import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="page-layout flex h-full flex-col gap-0 border-yellow-600 bg-white px-10 pb-8 pt-14 md:py-24 lg:mt-0 lg:flex-col lg:gap-4 lg:px-44 lg:pt-16">
      <div className="footer-up flex flex-col justify-between lg:flex-row">
        <div className="logo mb-3 flex flex-col text-center lg:mb-0 lg:text-left">
          <h1 className="logo-text mb-1 text-2xl font-bold lg:mb-3 lg:text-3xl">
            Startup
          </h1>
          <h1 className="logo-text mb-1 text-2xl font-bold lg:mb-5 lg:text-3xl">
            Powerhouse
          </h1>
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
        <div className="flex w-full basis-1/2 list-none flex-wrap justify-center gap-2 border-t border-t-gray-500 pt-5 text-xs text-gray-500 lg:justify-end lg:gap-8 lg:text-base">
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms of Use</a>
          </li>
          <li>
            <a>GDPR (For European Citizen)</a>
          </li>
        </div>
      </div>
    </div>
  );
}
