import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Layout = ({
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
