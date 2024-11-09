import Jumbotron from "./section/Jumbotron/Jumbotron";
import FeaturedIn from "./section/FeaturedIn/FeaturedIn";
import ProblemSection from "./section/Problem/Problem";
import Solution from "./section/Solution/Solution";
import Service from "./section/Service/Service";
import Testimonials from "./section/Testimonials/Testimonials";
import Pricing from "./section/Pricing/Pricing";
import Faq from "./section/FAQ/FAQ";
import Contact from "./section/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Jumbotron />
      <FeaturedIn />
      <ProblemSection />
      <Solution />
      <Service />
      <Testimonials />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  );
}
