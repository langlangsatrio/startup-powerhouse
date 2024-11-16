import { ReactNode } from "react";
import { Metadata } from "next";

interface IResourceLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Resource and Newsletter",
  description: "Subscribe to our newsletter for latest funding information",
};

const ResourceLayout: React.FC<IResourceLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default ResourceLayout;
