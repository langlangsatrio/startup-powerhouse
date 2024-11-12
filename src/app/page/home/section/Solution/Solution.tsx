import StandardCardStyle from "@/components/StandardCardStyle/StandardCardStyle";
import { IoIosPricetags } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

export default function Solution() {
  return (
    <div className="page-layout flex h-full flex-col items-center justify-center gap-0 bg-black px-10 pb-5 pt-20 text-white md:pt-32 lg:mt-10 lg:gap-4 lg:px-44 lg:pb-20 lg:pt-44">
      <div>
        <h1 className="mb-9 pb-2 text-center text-2xl font-bold leading-normal md:mb-16 md:px-5 md:text-3xl md:leading-relaxed lg:px-40 lg:text-5xl lg:leading-relaxed">
          Say goodbye to the expensive, long-time and complicated MVP
          development..
        </h1>
      </div>
      <div className="container rounded-xl border border-white bg-black px-0 py-7 shadow-md shadow-gray-500">
        <p className="text-md pb-3 text-center font-bold leading-normal md:px-5 md:text-xl lg:px-40 lg:pb-10 lg:text-2xl">
          Tired of those? Lets do it our way:
        </p>
        <div className="flex flex-col gap-5 lg:flex-row">
          <StandardCardStyle
            title="Affordable Price"
            content="You dont have to burn your money upfront to build an MVP. Allocate your money on marketing and distribution. Let us handle the product at discounted price. "
            component={<IoIosPricetags className="md:w-18 h-fit w-11" />}
          />
          <StandardCardStyle
            title="Fast Development"
            content="We fully understand that execution speed is important in validation stage. We double the building and iteration speed. Allowing you to move and iterate faster."
            component={
              <BsFillLightningChargeFill className="md:w-18 h-fit w-11" />
            }
          />
          <StandardCardStyle
            title="Market Validation"
            content="We are real builders and players in the startup scene. We are not only helping you to buid your product, but also navigate your research and validation."
            component={<GrValidate className="md:w-18 h-fit w-11" />}
          />
        </div>
        <div id="service"></div>
      </div>
    </div>
  );
}
