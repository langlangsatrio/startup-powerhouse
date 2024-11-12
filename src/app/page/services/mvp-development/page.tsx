import GetServiceDetails from "../getServiceApiCall";
import Link from "next/link";
import Contact from "../../home/section/Contact/Contact";

const LandingPage = () => {
  const id = "2eJ9tQ1pR8WuLuHPxX88qg";
  return (
    <div>
      <GetServiceDetails id={id} />
      <div className="flex w-full flex-col items-center justify-center px-10 py-5 md:flex-row lg:px-44 lg:py-10">
        <div className="h-full w-full">
          <h1 className="w-full text-base lg:text-2xl">
            Also check our other services:
          </h1>
        </div>
        <div className="card h-full w-full p-5 shadow-md hover:bg-gray-100 hover:font-bold">
          <Link href={"/page/services/landing-page"}>
            <h1 className="text-base lg:text-lg">Landing Page</h1>
          </Link>
        </div>
        <div className="card h-full w-full p-5 shadow-md hover:bg-gray-100 hover:font-bold">
          <Link href={"/page/services/market-research"}>
            <h1 className="text-base lg:text-lg">Market Research</h1>
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
