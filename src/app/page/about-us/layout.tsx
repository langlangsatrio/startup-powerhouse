import { ReactNode } from "react";
import { Metadata } from "next";

interface IAboutUsLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "About Us",
  description: "The house of the rising sun",
};

const AboutUsLayout: React.FC<IAboutUsLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AboutUsLayout;
