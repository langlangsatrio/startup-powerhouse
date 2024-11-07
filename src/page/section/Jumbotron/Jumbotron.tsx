"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BsArrowRepeat } from "react-icons/bs";
export default function Jumbotron() {
  return (
    <div className="page-layout h-full py-6 px-10 flex justify-center md:py-10 ">
      {/** Yang div atas ini penampung ya */}
      {/**Yang div bawah ini isi Konten doang */}
      <div className="flex flex-col gap-4 justify-center items-center  w-fit h-fit z-10 lg:gap-10 lg:px-32">
        <Badge
          variant={"outline"}
          className="w-fit flex flex-col px-3 py-1 gap-1 shadow-sm"
        >
          <h4 className="font-semibold  text-xs text-center">
            Startup Award 2025
          </h4>
        </Badge>
        <h1 className="font-black text-5xl text-center leading-tight mb-3 md:text-6xl md:leading-snug lg:leading-normal">
          Speedrunning your MVP creation and development at affordable price.{" "}
          <span className="hidden lg:inline">
            Helping you build, test, and scale with ease.
          </span>
        </h1>

        <p className="font-medium text-lg text-center text-gray-500 mb-2 md:text-2xl md:mb-5">
          We take your <span className="font-bold text-black">ideas</span> to{" "}
          <span className="font-bold text-black">market-fit</span> in weeks, not
          months.{" "}
          <span className="hidden lg:inline">
            Launch and iterate faster{" "}
            <BsArrowRepeat color="gray" className="hidden lg:inline" />{" "}
          </span>
        </p>
        <div className="lg:flex lg:gap-3 mb-1">
          <Button className="flex gap-3 px-3 py-1 rounded-xl shadow-md md:py-7 md:px-6 lg:mb-4">
            <Avatar>
              <AvatarImage
                src="./main-photo.jpeg"
                alt="@satrio"
                className="rounded-full border-2 max-h-6 md:max-h-8"
              />
              <AvatarFallback>SLB</AvatarFallback>
            </Avatar>{" "}
            <p className="font-light text-sm md:text-lg md:font-medium">
              Claim your free strategy call with Satrio
            </p>
          </Button>
        </div>
        <div className="flex gap-3 md:gap-8">
          <p className="text-xs md:text-lg">✅ Fast delivery</p>
          <p className="text-xs md:text-lg">✅ Fixed Cost</p>
          <p className="text-xs md:text-lg">✅ Guaranteed Quality</p>
        </div>
      </div>
    </div>
  );
}
