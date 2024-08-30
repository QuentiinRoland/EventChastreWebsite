import React from "react";

interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

const Subtitle = (props: SubtitleProps) => {
  return (
    <h2
      className={
        "bg-[#FE8C5F] text-white py-1 px-2 text-sm md:text-xs font-medium rounded-md "
      }
      style={{ width: "fit-content" }}
    >
      {props.children}
    </h2>
  );
};

export default Subtitle;
