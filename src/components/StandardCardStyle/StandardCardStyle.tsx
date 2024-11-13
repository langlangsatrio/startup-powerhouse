import { ReactNode } from "react";

interface IStandardCardStyle {
  title: string;
  content: string;
  img?: string;
  component?: ReactNode;
}

const StandardCardStyle: React.FC<IStandardCardStyle> = ({
  title,
  content,
  img,
  component,
}: IStandardCardStyle) => {
  return (
    <div className="md:px-18 flex flex-col items-center justify-center gap-3 px-8 py-4 md:py-5 lg:gap-4 lg:px-20">
      {img ? <div></div> : <div className="items-center">{component}</div>}
      <h1 className="text-center text-lg font-bold md:text-2xl">{title}</h1>
      <p className="text-md text-center md:text-lg">{content}</p>
    </div>
  );
};

export default StandardCardStyle;
