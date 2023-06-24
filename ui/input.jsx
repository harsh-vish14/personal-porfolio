import React from "react";
import { cn } from "../src/lib/utils";

const Input = React.forwardRef(function Input(
  { className, type, ...props },
  ref
) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md  bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-[#362323] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-primary-dark border border-primary-dark text-lg p-5 focus:border-[#7e8498]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
