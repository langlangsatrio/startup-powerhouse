import { ReactNode } from "react";
import { Metadata } from "next";

interface ILandingPageLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Landing Page Development",
  description: "Build your high-converting landing page now",
};

const MVPLayout: React.FC<ILandingPageLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default MVPLayout;
