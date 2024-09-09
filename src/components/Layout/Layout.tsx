import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const LayoutSection = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn("w-full max-w-[1440px] px-[5%] mx-auto", className)}
    ></div>
  );
};

export default LayoutSection;
