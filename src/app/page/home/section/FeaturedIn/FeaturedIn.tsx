import Marquee from "react-fast-marquee";
import { FaProductHunt } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { FaHackerNews } from "react-icons/fa";
export default function FeaturedIn() {
  return (
    <div className="py-8">
      <div>
        <h1 className="mb-3 text-center font-medium text-gray-300 lg:mb-8">
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
            className="mx-10 h-fit w-12 md:w-16 lg:mx-20 lg:w-16"
          />
          <DiTechcrunch
            color="#dadada"
            className="mx-10 h-fit w-12 md:w-16 lg:mx-20 lg:w-16"
          />
          <FaGoogle
            color="#dadada"
            className="mx-10 h-fit w-12 md:w-16 lg:mx-20 lg:w-16"
          />
          <FaHackerNews
            color="#dadada"
            className="mx-10 h-fit w-12 md:w-16 lg:mx-20 lg:w-16"
          />
        </Marquee>
      </div>
    </div>
  );
}
