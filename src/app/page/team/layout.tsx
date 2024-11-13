import { ReactNode } from "react";
import { Metadata } from "next";

interface ITeamLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Behind the scene",
};

const TeamLayout: React.FC<ITeamLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default TeamLayout;
