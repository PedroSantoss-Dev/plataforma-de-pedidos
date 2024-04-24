import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className=" ml-5 pl-5 font-bold uppercase sm:text-base md:text-lg " {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;