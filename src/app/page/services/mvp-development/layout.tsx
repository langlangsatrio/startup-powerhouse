import { ReactNode } from "react";
import { Metadata } from "next";

interface IMVPLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Minimum Viable Product Development",
  description: "Speedrunnning your MVP development at affordable price",
};

const MVPLayout: React.FC<IMVPLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default MVPLayout;
