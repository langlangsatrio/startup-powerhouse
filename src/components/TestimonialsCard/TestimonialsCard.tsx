import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import { ReactNode } from "react";

interface ITestimonialsCard {
  testimonials: string;
  avatarUrl: string;
  avatarAlias: string;
  name: string;
  socials?: ReactNode;
}

const TestimonialsCard: React.FC<ITestimonialsCard> = ({
  testimonials,
  avatarUrl,
  avatarAlias,
  name,
  socials,
}: ITestimonialsCard) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 rounded-xl p-6 shadow-lg hover:bg-gray-100">
          <p className="text-sm leading-normal md:text-lg md:leading-normal">
            {testimonials}
          </p>
          <div className="detail flex items-center justify-start"></div>
          <div className="flex gap-4 lg:gap-6">
            <Avatar>
              <AvatarImage
                src={avatarUrl}
                alt={avatarAlias}
                width={100}
                height={100}
                className="w-[28px] rounded-full border-2 md:w-[40px]"
                sizes="(max-width:768px) 28px, 40px"
              />
              <AvatarFallback>{avatarAlias}</AvatarFallback>
            </Avatar>
            <div>
              <p className="username font-bold">{name}</p>
              <p className="detail flex items-center gap-1">
                As seen on {socials}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
