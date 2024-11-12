import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosCall } from "react-icons/io";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Service() {
  return (
    <div className="page-layout flex h-full flex-col justify-center gap-0 border-yellow-600 bg-black px-10 py-14 text-white md:py-24 lg:mt-0 lg:flex-row lg:gap-4 lg:px-44 lg:py-32">
      <div className="lg:pr-32">
        <h1 className="pb-2 text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-0 lg:text-left lg:text-5xl lg:leading-normal">
          We can help you in:
        </h1>
        <p className="mb-7 text-center text-base md:mb-9 lg:mb-8 lg:text-left lg:text-xl">
          We can do beyond. Contact for more inquiries.
        </p>
        <p className="mb-8 hidden text-lg leading-loose text-gray-300 lg:block">
          We specialised in web application and mobile apps MVP development.
          From landing page, hooks, payment, to user data, we got you covered.
          You tell us, we ship it. Building a startup has never been this easy.
        </p>
        <div className="hidden gap-3 lg:flex">
          <Button
            className="hidden h-fit text-lg shadow-md shadow-gray-300 lg:flex"
            variant={"secondary"}
          >
            <IoIosCall /> Book a call
          </Button>
          <Badge className="border border-red-700 bg-red-200 px-3 py-3 text-red-800">
            Q4 2024 now booking - limited
          </Badge>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="rounded-md px-3">
            <AccordionTrigger className="text-lg font-bold lg:text-xl">
              MVP Development
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2 lg:pb-10 lg:pt-4">
              <div className="flex flex-col">
                <div className="flex w-full flex-row justify-between"></div>
                <p className="mb-2 leading-relaxed lg:text-lg">
                  We build a high-quality fully-functioning Web Application MVP.
                  With engaging copy and proper branding identity guide. We
                  deliver a market-ready product and could iterate based on the
                  market validation stage.
                </p>
                <div className="flex gap-2 pt-4">
                  <Button
                    className="h-fit w-fit bg-gray-900 text-xs lg:hidden"
                    variant={"default"}
                  >
                    Book a call
                  </Button>
                  <Link href={"/page/services/mvp-development"}>
                    <Button
                      className="h-fit w-fit bg-gray-900 text-xs"
                      variant={"default"}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="rounded-md px-3">
            <AccordionTrigger className="text-lg font-bold lg:text-xl">
              Landing Page
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2 lg:pb-10 lg:pt-4">
              <div className="flex flex-col">
                <div className="flex w-full flex-row justify-between"></div>
                <p className="mb-2 leading-relaxed lg:text-lg">
                  We build a high-quality fully-functioning Web Application MVP.
                  With engaging copy and proper branding identity guide. We
                  deliver a market-ready product and could iterate based on the
                  market validation stage.
                </p>
                <div className="flex gap-2 pt-4">
                  <Button
                    className="h-fit w-fit bg-gray-900 text-xs lg:hidden"
                    variant={"default"}
                  >
                    Book a call
                  </Button>
                  <Link href={"/page/services/landing-page"}>
                    <Button
                      className="h-fit w-fit bg-gray-900 text-xs"
                      variant={"default"}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="rounded-md px-3">
            <AccordionTrigger className="text-lg font-bold lg:text-xl">
              Market Research
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2 lg:pb-10 lg:pt-4">
              <div className="flex flex-col">
                <div className="flex w-full flex-row justify-between"></div>
                <p className="mb-2 leading-relaxed lg:text-lg">
                  We build a high-quality fully-functioning Web Application MVP.
                  With engaging copy and proper branding identity guide. We
                  deliver a market-ready product and could iterate based on the
                  market validation stage.
                </p>
                <div className="flex gap-2 pt-4">
                  <Button
                    className="h-fit w-fit bg-gray-900 text-xs lg:hidden"
                    variant={"default"}
                  >
                    Book a call
                  </Button>
                  <Link href={"/page/services/market-research"}>
                    <Button
                      className="h-fit w-fit bg-gray-900 text-xs"
                      variant={"default"}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="hidden w-full lg:block">
        <Tabs defaultValue="MVP" className="w-full">
          <TabsList className="flex w-full justify-between px-4">
            <TabsTrigger className="mx-1 text-xs" value="MVP">
              MVP Development
            </TabsTrigger>
            <TabsTrigger className="mx-1 text-xs" value="Landing">
              Landing Page
            </TabsTrigger>
            <TabsTrigger className="mx-1 text-xs" value="Market">
              Market Research
            </TabsTrigger>
          </TabsList>
          <TabsContent value="MVP">
            <Card>
              <CardHeader>
                <CardTitle>MVP Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    We build a high-quality fully-functioning Web Application
                    MVP. With engaging copy and proper branding identity guide.
                    We deliver a market-ready product and could iterate based on
                    the market validation stage.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button>
                  <Link
                    href={"/page/services/mvp-development"}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More <GoArrowUpRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Landing">
            <Card>
              <CardHeader>
                <CardTitle>Landing Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    We build high-quality landing page that ready to accept
                    customer, includes with the engaging copy and proper
                    branding. We deliver a market-ready product and could
                    iterate based on the market validation stage.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button>
                  <Link
                    href={"/page/services/landing-page"}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More <GoArrowUpRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Market">
            <Card>
              <CardHeader>
                <CardTitle>Market Research</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    We will help you to do your market research and validation.
                    Not only in theory, we will actually help you to do it with
                    a variety of statistical technique and market approach
                    principle.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button>
                  <Link
                    href={"/page/services/market-research"}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More <GoArrowUpRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
