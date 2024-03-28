import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  variant,
  className,
  register,
}: {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className: string;
  register: any;
}) {
  return (
    <Input
      className={className}
      variant={variant}
      classNames={{
        input: [
          "text-black/90",
          "dark:text-white/90",
          "placeholder:text-default-700/50",
          "dark:placeholder:text-white/60",
        ],
        mainWrapper: ["overflow-hidden"],
        inputWrapper: [
          "py-8",
          "bg-white-100",
          "dark:bg-dark-lighter",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-white-100",
          "dark:group-data-[focus=true]:bg-dark-lighter",
        ],
      }}
      placeholder={placeholder}
      {...register}
    />
  );
}
