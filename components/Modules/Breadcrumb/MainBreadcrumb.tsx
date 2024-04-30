import { breadcrumbType } from "@/interfaces/breadcrumb.interface";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import leftChevronIcon from "@/public/icons/solid/chevron-left.svg";

export default function MainBreadcrumb({ items }: breadcrumbType) {
  return (
    <Breadcrumbs
      variant="solid"
      classNames={{
        base: ["bg-white", "p-2", "rounded-xl"],
        list: ["bg-transparent"],
      }}
      separator={<Image src={leftChevronIcon} alt="" width={20} className="rotate-180"/>}
      itemClasses={{
        separator: "px-2.5",
      }}
    >
      {items.map((item, index) => (
        <BreadcrumbItem key={index} className="font-peyda">
          <Link href={item.route}>{item.title}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}