import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { IoStar } from "react-icons/io5";

export default function TestimonialsRatingBadge() {
  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage
            src={`/avataricon/muck.webp`}
            alt="User"
            width={100}
            height={100}
            className="border-20 w-10 rounded-full border border-white shadow-lg md:w-10"
          />
          <AvatarFallback>Shipper</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src={`/avataricon/elon.webp`}
            alt="User"
            width={100}
            height={100}
            className="border-20 w-10 rounded-full border border-white shadow-lg md:w-10"
          />
          <AvatarFallback>Shipper</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src={`/avataricon/myphoto.webp`}
            alt="User"
            width={100}
            height={100}
            className="border-20 w-10 rounded-full border border-white shadow-lg md:w-10"
          />
          <AvatarFallback>Shipper</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src={`/avataricon/nikitabier.webp`}
            alt="User"
            width={100}
            height={100}
            className="border-20 w-10 rounded-full border border-white shadow-lg md:w-10"
          />
          <AvatarFallback>Shipper</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <div className="flex text-yellow-400">
          <IoStar className="h-full w-5 md:w-8 lg:w-9" />
          <IoStar className="h-full w-5 md:w-8 lg:w-9" />
          <IoStar className="h-full w-5 md:w-8 lg:w-9" />
          <IoStar className="h-full w-5 md:w-8 lg:w-9" />
          <IoStar className="h-full w-5 md:w-8 lg:w-9" />
        </div>
        <p className="text-xs leading-tight">
          20+ founders has launched at lightning speed
        </p>
      </div>
    </div>
  );
}
