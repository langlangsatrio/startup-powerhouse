import { ReactNode } from "react";
import { Metadata } from "next";

interface IMarketResearchLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Market Research",
  description: "Validating your product never been this easy",
};

const MVPLayout: React.FC<IMarketResearchLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default MVPLayout;
