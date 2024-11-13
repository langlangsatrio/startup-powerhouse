"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BsArrowRepeat } from "react-icons/bs";
export default function Jumbotron() {
  return (
    <div className="page-layout flex h-full justify-center px-10 py-6 md:py-10">
      {/** Yang div atas ini penampung ya */}
      {/**Yang div bawah ini isi Konten doang */}
      <div className="z-10 flex h-fit w-fit flex-col items-center justify-center gap-4 lg:gap-10 lg:px-32">
        <Badge
          variant={"outline"}
          className="flex w-fit flex-col gap-1 px-3 py-1 shadow-sm"
        >
          <h1 className="text-center text-xs font-semibold">
            Startup Award 2025
          </h1>
        </Badge>
        <h1 className="mb-3 text-center text-5xl font-black leading-tight md:text-6xl md:leading-snug lg:leading-normal">
          Speedrunning your MVP creation and development at affordable price.{" "}
          <span className="hidden lg:inline">
            Helping you build, test, and scale with ease.
          </span>
        </h1>

        <p className="mb-2 text-center text-lg font-medium text-gray-500 md:mb-5 md:text-2xl">
          We take your <span className="font-bold text-black">ideas</span> to{" "}
          <span className="font-bold text-black">market-fit</span> in weeks, not
          months.{" "}
          <span className="hidden lg:inline">
            Launch and iterate faster{" "}
            <BsArrowRepeat color="gray" className="hidden lg:inline" />{" "}
          </span>
        </p>
        <div className="mb-1 lg:flex lg:gap-3">
          <Button className="flex gap-3 rounded-xl px-3 py-1 shadow-md md:px-6 md:py-7 lg:mb-4">
            <Avatar>
              <AvatarImage
                src={`/avataricon/myphoto.webp`}
                alt="@satrio"
                className="w-[28px] rounded-full border-2 md:w-[40px]"
                width={100}
                height={100}
                sizes="(max-width:768px) 28px, 40px"
              />
              <AvatarFallback>SLB</AvatarFallback>
            </Avatar>{" "}
            <p className="text-sm font-light md:text-lg md:font-medium">
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
