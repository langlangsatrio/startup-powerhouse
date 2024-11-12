import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { SiLighthouse } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Faq() {
  return (
    <div className="page-layout flex h-full flex-col items-center justify-center gap-10 px-10 py-14 md:pb-24 md:pt-10 lg:mt-0 lg:flex-col lg:items-start lg:justify-start lg:gap-20 lg:px-52 lg:pb-20 lg:pt-10">
      <div className="flex w-full flex-col items-center">
        <Badge
          variant={"outline"}
          className="mb-4 flex w-fit flex-col gap-1 px-3 py-1 shadow-sm lg:mb-8"
        >
          <h4 className="text-center text-base font-semibold">Profile</h4>
        </Badge>
        <h1 className="mb-2 text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-44 lg:text-5xl lg:leading-normal">
          A glimpse of us..
        </h1>
        <p className="text-center text-base lg:text-lg">
          Get to know us better..
        </p>
      </div>
      <div className="flex flex-col gap-12 md:gap-20 lg:flex-row lg:gap-5">
        <div className="w-full lg:w-1/2">
          <Card className="rounded-2xl p-2 shadow-md lg:px-8 lg:pb-4">
            <CardHeader>
              <CardTitle className="text-center">Startup Powerhouse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8">
                <SiLighthouse className="h-20 w-20" />
              </div>
              <p className="mb-5 text-center">
                Startup Powerhouse is startup accelerator house who aim to lower
                the market entry point for early stages startup.{" "}
                <span className="hidden md:inline">
                  We empower startup by helping them building an affordable and
                  high-quality minimum viable product (MVP), while assisting and
                  navigating them in market validation stage.{" "}
                </span>
              </p>
              <Link href={"/page/about-us"} className="w-full">
                <Button className="w-full">Learn more about us</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="mb-0 flex w-full flex-col items-start justify-start gap-7 lg:px-9">
          <h1 className="text-3xl font-bold md:mb-2 lg:mb-5">
            <span className="md:hidden">FAQ</span>
            <span className="hidden text-4xl md:block">
              Frequently Asked Question
            </span>
          </h1>
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="py-2 md:py-2 lg:py-5">
                <AccordionTrigger className="flex w-full items-center justify-between text-base font-medium md:text-2xl">
                  <p>Why startup powerhouse?</p> <IoIosArrowDown />
                </AccordionTrigger>
                <AccordionContent className="py-5 text-xs md:text-lg">
                  Startup powerhouse is your one-off complete package partner to
                  launch and grow startup. We are a bunch of software developer,
                  sales, marketer, and designer who work together to create your
                  success.{" "}
                  <span className="hidden md:inline">
                    Instead of hiring each part one-by-one and spent bunch of
                    money on each, why not work with a complete package like us?
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-2 md:py-2 lg:py-5">
                <AccordionTrigger className="flex w-full items-center justify-between text-base font-medium md:text-2xl">
                  <p>What if I&apos;m not happy with the results?</p>{" "}
                  <IoIosArrowDown />
                </AccordionTrigger>
                <AccordionContent className="py-5 text-xs md:text-lg">
                  This is not happen very often. But anyway, if you are not
                  happy, we offer unlimited revisions, until you are 100%
                  satisfied.{" "}
                  <span className="hidden md:inline">
                    That way, we can ensure your satisfaction and keep our
                    service quality at top-notch level. All communication is
                    done transparently.
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="py-2 md:py-2 lg:py-5">
                <AccordionTrigger className="flex w-full items-center justify-between text-base font-medium md:text-2xl">
                  <p>What do you mean by partnership?</p> <IoIosArrowDown />
                </AccordionTrigger>
                <AccordionContent className="py-5 text-xs md:text-lg">
                  As a startup accelerator, we are not only helping you building
                  product or market research. We have a bunch of investor behind
                  us. We eager to connect potential startup to investor.{" "}
                  <span className="hidden md:inline">
                    We had invested a total of{" "}
                    <span className="font-extrabold">$1 Million</span> to
                    several startups, and navigate their growth.
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="py-2 md:py-2 lg:py-5">
                <AccordionTrigger className="flex w-full items-center justify-between text-base font-medium md:text-2xl">
                  <p>Why startup powerhouse?</p> <IoIosArrowDown />
                </AccordionTrigger>
                <AccordionContent className="py-5 text-xs md:text-lg">
                  Startup powerhouse is your one-off complete package partner to
                  launch and grow startup. We are a bunch of software developer,
                  sales, marketer, and designer who work together to create your
                  success.{" "}
                  <span className="hidden md:inline">
                    Instead of hiring each part one-by-one and spent bunch of
                    money on each, why not work with a complete package like us?
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
