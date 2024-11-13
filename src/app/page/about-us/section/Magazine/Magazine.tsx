import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export default function Magazine() {
  return (
    <div className="page-layout flex h-full flex-col items-start justify-center gap-0 bg-white px-10 pt-10 md:pt-16 lg:mt-0 lg:gap-4 lg:px-44 lg:pt-28">
      <div className="mb-5 flex w-full flex-col items-center justify-center px-0 pr-0 text-center md:px-20 lg:flex-row lg:px-0 lg:pr-8 lg:text-left">
        <div className="title-wrapper mb-5 flex w-full flex-col items-center lg:mb-6 lg:items-start">
          <Badge className="mb-4 w-fit text-center">About us</Badge>
          <div className="flex flex-row justify-center gap-2 lg:flex-col lg:gap-0">
            <h1 className="mb-0 text-center text-2xl font-bold md:mb-2 md:text-4xl lg:mb-2 lg:mr-0 lg:text-left lg:text-6xl">
              Startup
            </h1>
            <h1 className="mb-2 text-center text-2xl font-bold md:mb-3 md:text-4xl lg:mb-5 lg:text-left lg:text-6xl">
              Powerhouse:
            </h1>
          </div>
          <h1 className="text-center text-lg font-semibold md:mb-5 md:text-2xl lg:text-left lg:text-4xl">
            The house of the rising sun
          </h1>
        </div>
        <div className="flex h-full w-full flex-col justify-between">
          <p className="mb-5 text-base leading-normal md:text-lg md:leading-relaxed lg:text-xl lg:leading-loose">
            Startup Powerhouse is a startup accelerator that focusses to
            lowering startup&apos;s entry point by providing affordable and
            quick product development.
          </p>
          <p className="mb-3 hidden text-base leading-normal md:block md:text-lg md:leading-relaxed lg:inline lg:text-xl lg:leading-loose">
            {" "}
            Driven by the promise of progress, we exist to lift humanity higher,
            one inspired startup at a time. We are more than a name—it is a
            promise to kindle the flames of innovation, to break barriers, and
            to watch as the world shines a little brighter.
          </p>
        </div>
      </div>
      <div className="h-auto w-full px-0 md:px-20 lg:px-0">
        <Image
          width={500}
          height={200}
          className="w-full rounded-xl shadow-sm"
          src={`/about-us.webp`}
          alt="House of the rising sun"
          sizes="(max-width:768px) 400px, 1000px"
        />
      </div>
    </div>
  );
}
