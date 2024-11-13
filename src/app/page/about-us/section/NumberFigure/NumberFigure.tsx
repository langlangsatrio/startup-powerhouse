"use client";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";
export default function NumberFigure() {
  return (
    <div className="page-layout flex h-full flex-col items-start justify-center gap-0 bg-white px-10 pt-10 md:pt-11 lg:mt-0 lg:gap-4 lg:px-44 lg:pt-24">
      <div className="mb-5 flex h-full w-full flex-col items-center justify-center px-0 pr-0 text-center md:px-20 lg:flex-row lg:px-0 lg:pr-0 lg:text-left">
        <div className="flex h-full w-full flex-col justify-between">
          <p className="mb-8 text-base leading-normal md:mb-12 md:text-lg md:leading-relaxed lg:text-xl lg:leading-loose">
            Brief history, we were formed as a result of a great encouragement
            to accelerate the outer reaches of human civilization. We are driven
            by a startup culture that continues to iterate and innovate.{" "}
            <span className="hidden md:inline">
              Driven by the promise of progress, we exist to lift humanity.
            </span>
          </p>
        </div>
        <div className="title-wrapper mb-7 hidden h-full w-full flex-col items-center justify-start md:mb-5 md:flex lg:mb-16 lg:items-end">
          <h1 className="text-center text-xl font-bold md:mb-1 md:text-2xl lg:mb-3 lg:text-right lg:text-4xl">
            Empowering
          </h1>
          <h1 className="mb-1 text-center text-xl font-bold md:mb-2 md:text-2xl lg:mb-5 lg:text-right lg:text-4xl">
            Startup Development
          </h1>
          <h1 className="mb-0 h-full text-center text-sm font-medium md:mb-8 md:text-lg md:font-semibold lg:mb-0 lg:text-right lg:text-xl">
            Shaping the future through technology
          </h1>
        </div>
      </div>
      <Card className="w-full py-2 shadow-md lg:px-0 lg:py-5">
        <div className="w-full">
          <h1 className="text-md mb-2 text-center md:hidden">Our impacts:</h1>
        </div>
        <div className="card-class h-auto w-full px-0 md:px-20 lg:px-0">
          <div className="flex w-full basis-1/2 flex-wrap justify-evenly md:basis-0 md:flex-nowrap md:justify-between">
            <div className="the-card-itself counter flex w-1/2 flex-col items-center justify-center py-3">
              <div className="counter my-1 flex w-full items-center justify-center text-4xl font-bold">
                <CountUp end={20} />
                <p className="">+</p>
              </div>
              <p className="">Startup launched</p>
            </div>
            <div className="the-card-itself counter flex w-1/2 flex-col items-center justify-center py-3">
              <div className="counter my-1 flex w-full items-center justify-center text-4xl font-bold">
                <p className="">$</p>
                <CountUp end={220} />
                <p className="">K</p>
              </div>
              <p className="">Capital raised</p>
            </div>
            <div className="the-card-itself counter flex w-1/2 flex-col items-center justify-center py-3">
              <div className="counter my-1 flex w-full items-center justify-center text-4xl font-bold">
                <p className=""></p>
                <CountUp end={90} />
                <p className="">+</p>
              </div>
              <p className="">Job Created</p>
            </div>
            <div className="the-card-itself counter flex w-1/2 flex-col items-center justify-center py-3">
              <div className="counter my-1 flex w-full items-center justify-center text-4xl font-bold">
                <p className=""></p>
                <CountUp end={18} />
                <p className=""></p>
              </div>
              <p className="">Countries</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
