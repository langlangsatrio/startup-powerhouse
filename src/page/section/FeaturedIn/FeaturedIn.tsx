import Marquee from "react-fast-marquee";
import { FaProductHunt } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { FaHackerNews } from "react-icons/fa";
export default function FeaturedIn() {
  return (
    <div className="py-8">
      <div>
        <h1 className="font-medium text-center mb-3 lg:mb-8 text-gray-300">
          We are featured in:
        </h1>
      </div>
      <div className="md:px-20 lg:px-52">
        <Marquee
          className="flex"
          autoFill={true}
          gradient={true}
          gradientWidth={100}
          gradientColor="white
          "
        >
          <FaProductHunt
            color="#dadada"
            className="w-12 md:w-16 lg:w-16 h-fit mx-10 lg:mx-20"
          />
          <DiTechcrunch
            color="#dadada"
            className="w-12 md:w-16 lg:w-16 h-fit mx-10 lg:mx-20"
          />
          <FaGoogle
            color="#dadada"
            className="w-12 md:w-16 lg:w-16 h-fit mx-10 lg:mx-20"
          />
          <FaHackerNews
            color="#dadada"
            className="w-12 md:w-16 lg:w-16 h-fit mx-10 lg:mx-20"
          />
        </Marquee>
      </div>
    </div>
  );
}
