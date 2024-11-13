import Contact from "../home/section/Contact/Contact";
import Magazine from "./section/Magazine/Magazine";
import NumberFigure from "./section/NumberFigure/NumberFigure";
import TeamShow from "./section/TeamShow/teamShow";

export default function AboutUsPage() {
  return (
    <div>
      <Magazine />
      <NumberFigure />
      <TeamShow />
      <Contact />
    </div>
  );
}
