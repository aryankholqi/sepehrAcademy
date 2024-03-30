import { BoxHeader } from "@/interfaces/boxHeader.interface";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function BoxHeader({
  title,
  hasLink,
  linkTitle,
  route,
}: BoxHeader) {
  return (
    <div className="flex-grow items-center grid grid-cols-1 md:grid-cols-3 justify-between">
      <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center md:col-start-2 col-span-1 mx-auto">
        {title}
      </h1>
      {hasLink && (
        <Link
          href={`${route}`}
          className="md:col-start-3 col-span-1 mx-auto md:ms-auto md:mx-0 flex items-center gap-x-2 lg:mb-10 mb-8 text-lightTitle dark:text-darkTitle"
        >
          {linkTitle}
          <Divider className="w-[30px] h-1 bg-primary dark:bg-primary-lighter" />
        </Link>
      )}
    </div>
  );
}
