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
    <div className="flex flex-col gap-3 justify-center items-center lg:gap-4 px-8 md:px-18 lg:px-20 py-4 md:py-5">
      {img ? <img /> : <div className="items-center">{component}</div>}
      <h1 className="font-bold text-lg md:text-2xl text-center">{title}</h1>
      <p className="text-md md:text-lg text-center">{content}</p>
    </div>
  );
};

export default StandardCardStyle;
