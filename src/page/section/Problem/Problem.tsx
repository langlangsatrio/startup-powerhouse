import StandardCardStyle from "@/components/StandardCardStyle/StandardCardStyle";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaNotEqual } from "react-icons/fa";

export default function ProblemSection() {
  return (
    <div className="page-layout flex flex-col gap-0 lg:gap-4 justify-center h-full py-12 md:py-20 px-10 lg:px-20 lg:mt-10">
      <div>
        <h1 className="pb-2 md:px-5 lg:px-40  text-center font-bold text-2xl md:text-3xl lg:text-5xl leading-normal md:leading-relaxed lg:leading-relaxed">
          Say goodbye to the expensive, long-time and complicated MVP
          development..
        </h1>
        <p className=" pb-10 md:px-5 lg:px-40 text-xs md:text-base lg:text-lg lg:pb-20 text-center">
          Most startup fails financially and strategically in MVP development
          and market validation stage. Here is why:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <StandardCardStyle
          title="Expensive Hire"
          content="Hiring a software engineers could be expensive nowadays, not to mention if they don't have startup environment knowledge which make it harder to move forwards."
          component={<FaMoneyBillWave className="w-11 md:w-18 h-fit" />}
        />
        <StandardCardStyle
          title="Long Time Development"
          content="Developing a product could takes long times, ranging from months to years. This mostly happened because your hire can't interpret both your word and the market."
          component={<FaBusinessTime className="w-11 md:w-18 h-fit" />}
        />
        <StandardCardStyle
          title="Invalid Validation"
          content="How do you know if you are a market fit? Most founders think that they are already market fit, but eventually goes flop. We navigate you off this validation-syndrome.."
          component={<FaNotEqual className="w-11 md:w-18 h-fit" />}
        />
      </div>
    </div>
  );
}
