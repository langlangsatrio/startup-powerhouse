import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface ICardPrice {
  badge?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  shortdesc?: string;
  feature?: string[];
}
const CardPrice: React.FC<ICardPrice> = ({
  badge,
  price,
  oldPrice,
  title,
  shortdesc,
  feature,
}) => {
  return (
    <div>
      <Card className="flex h-full w-full flex-col justify-between rounded-xl px-1 py-5 shadow-lg hover:bg-gray-100 lg:w-96 lg:p-4 lg:pt-10">
        <CardContent className="flex flex-col lg:gap-5">
          <div className="left side flex flex-col">
            <Badge className="mb-2 w-fit">{badge}</Badge>
            <h1 className="mb-4 text-xl font-bold">{title}</h1>
            <h1 className="mb-4 text-5xl font-extrabold lg:text-5xl">
              {price}
            </h1>

            <Badge variant={"secondary"} className="mb-2 h-fit w-fit">
              Limited Offers. Was:{" "}
              <span className="font-bold"> {oldPrice}</span>
            </Badge>
            <p className="mb-5 lg:mb-1 lg:text-sm">{shortdesc}</p>
          </div>
          <div className="right side w-full">
            <ul className="flex w-full flex-col gap-2 md:gap-4 lg:gap-2">
              {feature?.map((value, items) => (
                <li
                  className="flex items-center justify-start gap-2 lg:text-sm"
                  key={items}
                >
                  <FaCheckCircle />
                  <p className="text-xs lg:text-base">{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href={`https://cal.com/satrio-langlang-vlenyy/introductorycall`}
          >
            <Button className="w-full">Book your slot</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPrice;
