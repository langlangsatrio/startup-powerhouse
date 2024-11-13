import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TeamShow() {
  return (
    <div className="page-layout flex h-full w-full flex-col items-start justify-center gap-8 bg-white px-10 pb-9 pt-10 md:flex-row md:pt-16 lg:mt-0 lg:gap-4 lg:px-44 lg:pb-20 lg:pt-28">
      <div className="flex h-full w-full items-center justify-center px-3 lg:w-1/3">
        <Card className="flex h-full w-full flex-col items-center justify-center gap-5 p-5">
          <Image
            className="h-full w-[200px] rounded-full shadow-md md:w-[320px]"
            width={100}
            height={100}
            sizes="(max-width:768px) 200px, 900px"
            src={`/avataricon/myphoto.webp`}
            alt="Founder of Startup Powerhouse"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-xl font-bold">Satrio</h1>
            <h1>CEO (2020-now) </h1>
          </div>
        </Card>
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-5 lg:gap-6">
        <h3 className="text-center text-xl font-bold md:text-left md:text-3xl">
          Hi, this is your founder Satrio.
        </h3>
        <p className="text-center text-lg md:text-left md:leading-relaxed lg:pr-32 lg:text-xl lg:leading-loose">
          Driven by a passion for innovation and empowering individuals, Satrio
          founded Startup Powerhouse with a mission to accelerate human&apos;s
          outliers. Under his vision, Startup Powerhouse continues to push
          boundaries, fostering a space where technology meets purpose. But he
          is not alone on this journey! Say hi to other great person in our{" "}
          <span className="font-semibold hover:font-extrabold">
            <Link href={`/page/team/`}>team page!</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
