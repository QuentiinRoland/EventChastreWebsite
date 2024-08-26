import { cn } from "@/lib/utils";
import React from "react";

type SpacingProps = {
  size: "sm" | "md" | "lg";
};

const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-10 lg:h-18": size === "md",
        "h-12 lg:h-20": size === "lg",
      })}
    />
  );
};

export default Spacing;
