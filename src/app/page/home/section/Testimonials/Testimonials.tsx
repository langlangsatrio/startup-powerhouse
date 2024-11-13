import TestimonialsCard from "@/components/TestimonialsCard/TestimonialsCard";
import { FaXTwitter } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import TestimonialsRatingBadge from "@/components/TestimonialsRatingBadge/TestimonialsRatingBadge";
import Marquee from "react-fast-marquee";
import { FaProductHunt } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { FaHackerNews } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
export default function Testimonials() {
  return (
    <div className="page-layout flex h-full flex-col items-center justify-center gap-0 px-10 pt-14 md:pt-24 lg:mt-0 lg:flex-col lg:gap-4 lg:px-44 lg:pt-32">
      <Badge
        variant={"outline"}
        className="mb-4 flex w-fit flex-col gap-1 px-3 py-1 shadow-sm"
      >
        <h1 className="text-center text-base font-semibold">Testimonials</h1>
      </Badge>
      <h1 className="pb-10 text-center text-2xl font-bold leading-normal md:px-5 md:text-3xl md:leading-relaxed lg:px-44 lg:text-5xl lg:leading-normal">
        Don’t rely on our word alone—let our partners tell you themselves.
      </h1>
      <div className="testimonials badge user mb-6 md:mb-8">
        <TestimonialsRatingBadge />
      </div>
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-20">
        <TestimonialsCard
          testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
          avatarAlias="JM"
          avatarUrl={`/avataricon/elon.webp`}
          name="Elon the Chief Meme Office"
          socials={<FaXTwitter />}
        />
        <TestimonialsCard
          testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
          avatarAlias="JM"
          avatarUrl={`/avataricon/nikitabier.webp`}
          name="Nikita the Beer"
          socials={<FaXTwitter />}
        />
        <TestimonialsCard
          testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
          avatarAlias="JM"
          avatarUrl={`/avataricon/muck.webp`}
          name="Muck the swag"
          socials={<IoLogoInstagram />}
        />
        <div className="hidden lg:inline-block">
          <TestimonialsCard
            testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
            avatarAlias="JM"
            avatarUrl={`/avataricon/gigachad.webp`}
            name="Giga Chad"
            socials={<FaXTwitter />}
          />
        </div>
        <div className="hidden lg:inline-block">
          <TestimonialsCard
            testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
            avatarAlias="JM"
            avatarUrl={`/avataricon/gigachad.webp`}
            name="James McCarthy"
            socials={<FaXTwitter />}
          />
        </div>
        <div className="hidden lg:inline-block">
          <TestimonialsCard
            testimonials="Startup Powerhouse has really helped me to launch my startup. They were so details, perfectly fullfiled my request and navigate me through the validation stage."
            avatarAlias="JM"
            avatarUrl={`/avataricon/gigachad.webp`}
            name="James McCarthy"
            socials={<FaXTwitter />}
          />
        </div>
      </div>

      <div className="pt-8">
        <div>
          <h1 className="mb-8 mt-3 text-center font-medium text-gray-400 lg:mb-8">
            Proudly Empowering:
          </h1>
        </div>
        <div id="pricing-phone" className="w-screen md:px-20 lg:px-52">
          <Marquee
            className="flex"
            gradient={true}
            gradientColor="white"
            gradientWidth={100}
          >
            <FaProductHunt
              color="#dadada"
              className="mx-10 h-fit w-12 md:w-16 lg:mx-32 lg:w-16"
            />
            <DiTechcrunch
              color="#dadada"
              className="mx-10 h-fit w-12 md:w-16 lg:mx-32 lg:w-16"
            />
            <FaGoogle
              color="#dadada"
              className="mx-10 h-fit w-12 md:w-16 lg:mx-32 lg:w-16"
            />
            <FaHackerNews
              color="#dadada"
              className="mx-10 h-fit w-12 md:w-16 lg:mx-32 lg:w-16"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
