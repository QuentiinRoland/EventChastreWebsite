import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
export const layout = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={cn("w-full mx-p5")}></div>;
};
