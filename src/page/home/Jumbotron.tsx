"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Jumbotron() {
  return (
    <div className="lg:flex lg:justify-center lg:gap-5 lg:px-36 lg:py-10">
      <div className="lg:flex lg:flex-col lg:gap-5">
        <Badge variant={"outline"} className="w-fit">
          <h4 className="lg:font-semibold lg:text-lg lg:text-center">
            Hi, we are startup powerhouse. We empower startup by building great
            products.
          </h4>
        </Badge>
        <h1 className="lg:font-semibold lg:text-6xl">
          Build startup's MVP and products at affordable price. Bringing ideas
          to reality in weeks, not months.
        </h1>
        <p className="lg:font-medium lg:text-xl">
          lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem
          Ipsum lorem Ipsum{" "}
        </p>
        <div className="lg:flex lg:gap-5">
          <Button className="lg:px-3 lg:py-2">
            Claim your free strategy call with Satrio
          </Button>
        </div>
      </div>
    </div>
  );
}
