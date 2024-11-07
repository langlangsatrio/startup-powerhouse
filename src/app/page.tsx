import FeaturedIn from "@/page/section/FeaturedIn/FeaturedIn";
import Jumbotron from "@/page/section/Jumbotron/Jumbotron";
import ProblemSection from "@/page/section/Problem/Problem";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Jumbotron />
      <FeaturedIn />
      <ProblemSection />
    </div>
  );
}
