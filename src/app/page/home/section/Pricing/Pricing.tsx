"use client";
import { Badge } from "@/components/ui/badge";
import CardPrice from "@/components/CardPrice/CardPrice";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="page-layout flex h-full flex-col items-center justify-center gap-0 bg-white px-10 py-14 md:py-24 lg:mt-0 lg:flex-col lg:gap-4 lg:px-44 lg:py-32"
    >
      <Badge
        variant={"outline"}
        className="mb-4 flex w-fit flex-col gap-1 px-3 py-1 shadow-sm"
      >
        <h4 className="text-center text-base font-semibold">Pricing</h4>
      </Badge>
      <h1 className="text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-44 lg:text-5xl lg:leading-normal">
        So.. Ready to launch your startup?
      </h1>
      <p className="pb-10 text-center text-sm lg:text-lg">
        One-off project-based contract. No extra-cost.{" "}
        <span className="hidden md:inline"> No commitment.</span>
      </p>
      <div className="flex flex-col gap-4 lg:flex-row">
        <CardPrice
          badge="Now booking Q4"
          price="$499"
          oldPrice="$600"
          title="Landing Page"
          shortdesc="Perfect for single high-impact conversion page"
          feature={[
            "Deliver in days",
            "Own communication channel",
            "Free copywriting and light branding",
            "Responsive ready",
            "Unlimited revision",
          ]}
        />
        <CardPrice
          badge="Now booking Q4 - 1 Slot left"
          price="$4999"
          oldPrice="$7000"
          title="MVP Development"
          shortdesc="Perfect for pre-product-market-fit startup"
          feature={[
            "Deliver in weeks",
            "Market validation assistance",
            "Startup consultancy",
            "Unlimited revision and iteration",
            "Partnership support available",
          ]}
        />
        <CardPrice
          badge="Now booking Q4"
          price="$999"
          oldPrice="$1200"
          title="Market Research"
          shortdesc="Perfect for pre-market startup"
          feature={[
            "Deliver in days",
            "Science-based methodology",
            "Full report and statistic",
            "Transparent process",
            "Implementation support",
          ]}
        />
      </div>
    </div>
  );
}
