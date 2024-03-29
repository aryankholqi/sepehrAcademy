import React from "react";
import { Input } from "@nextui-org/react";

function HeroInput() {
  return (
    <>
      <Input
        radius="lg"
        classNames={{
          input: [
            "pr-0",
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            "font-vazir",
          ],
          mainWrapper: ["rounded-[20px]", "overflow-hidden"],
          innerWrapper: ["bg-transparent"],
          inputWrapper: [
            "shadow-xl",
            "bg-white",
            "dark:bg-dark-lighter",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-dark-lighter",
            "!cursor-text",
          ],
        }}
        placeholder="دنبال چه دوره ای هستی ..."
      />
    </>
  );
}

export default HeroInput;
