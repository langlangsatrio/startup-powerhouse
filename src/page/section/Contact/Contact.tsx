import { Button } from "@/components/ui/button";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="page-layout flex h-full flex-col items-center justify-center gap-0 border-yellow-600 bg-white px-10 py-14 md:py-24 lg:mt-0 lg:flex-col lg:gap-4 lg:px-44 lg:py-44">
      <div className="mb-5 lg:mb-16">
        <h1 className="mb-2 text-center text-4xl font-extrabold lg:mb-4 lg:text-6xl">
          Confuse when and how to start? 🤔
        </h1>
        <h1 className="text-center text-lg lg:text-2xl">
          Why not begin with a convo? Hit the button to book a call with Satrio
        </h1>
      </div>
      <Button className="h-full rounded-2xl text-xl md:px-7 md:py-3 md:text-3xl lg:w-full lg:py-7 lg:text-5xl">
        <p>Book a call and get inquries here</p>
        <BsFillLightningChargeFill className="h-full w-full lg:hidden" />
      </Button>
    </div>
  );
}
