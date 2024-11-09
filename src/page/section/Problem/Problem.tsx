import StandardCardStyle from "@/components/StandardCardStyle/StandardCardStyle";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaNotEqual } from "react-icons/fa";

export default function ProblemSection() {
  return (
    <div className="page-layout flex h-full flex-col justify-center gap-0 px-10 py-20 md:py-24 lg:gap-4 lg:px-32 lg:py-60">
      <div>
        <h1 className="pb-2 text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-44 lg:text-5xl lg:leading-relaxed">
          Most startup fails in MVP development and market validation stage.
          Here is why..
        </h1>
        <p className="text-small pb-10 text-center leading-normal md:px-5 md:text-base lg:px-40 lg:pb-20 lg:text-lg"></p>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row">
        <StandardCardStyle
          title="Expensive Hire"
          content="Hiring a software engineers could be expensive nowadays, not to mention if they don't have startup environment knowledge which make it harder to move forwards."
          component={<FaMoneyBillWave className="md:w-18 m-0 h-fit w-11 p-0" />}
        />
        <StandardCardStyle
          title="Long Time Development"
          content="Developing a product could takes long times, ranging from months to years. This mostly happened because your hire can't interpret both your word and the market."
          component={<FaBusinessTime className="md:w-18 m-0 h-fit w-11 p-0" />}
        />
        <StandardCardStyle
          title="Invalid Validation"
          content="How do you know if you are a market fit? Most founders think that they are already market fit, but eventually goes flop. We will navigate you off this validation-syndrome."
          component={<FaNotEqual className="md:w-18 m-0 h-fit w-11 p-0" />}
        />
      </div>
    </div>
  );
}
