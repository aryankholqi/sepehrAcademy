import React from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { CommentCard } from "@/interfaces/commentCard.interface";
import MainButton from "../Button/MainButton";
import Link from "next/link";

function CommentCard({ name, role, description, image, size }: CommentCard) {
  return (
    <Card className="p-4.5 md:p-5 bg-mainBodyBg dark:bg-dark rounded-3xl px-8 py-4 shadow-none">
      <CardHeader className="pb-6 px-0 flex justify-between">
        <UserCard title={name} description={role} image={image} size={size} />
        <Link href={"#comment-form"} className="p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-reply"
            viewBox="0 0 16 16"
          >
            <path d="M6.598 5.013a.144.144 0 01.202.134V6.3a.5.5 0 00.5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 00-1.921-.306 7.404 7.404 0 00-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 00-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 00-.042-.028.147.147 0 010-.252.499.499 0 00.042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 00.933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 00-1.767-.96l-3.994 2.94a1.147 1.147 0 000 1.946l3.994 2.94a1.144 1.144 0 001.767-.96v-.667z"></path>
          </svg>
        </Link>
      </CardHeader>
      <Divider className="mt-3 mb-6" />
      <p className="text-lightBody dark:text-darkBody text-sm lgb:text-[14px] leading-7">
        {description}
      </p>
      <Card className="p-4.5 md:p-5 bg-lightBody dark:bg-dark-lighter rounded-3xl px-8 py-4 shadow-none mt-5">
        <CardHeader className="pb-6 px-0">
          <UserCard title={name} description={role} image={image} size={size} />
        </CardHeader>
        <Divider className="mt-3 mb-6" />
        <p className="text-lightBody dark:text-darkBody text-sm lgb:text-[14px] leading-7">
          {description}
        </p>
      </Card>
    </Card>
  );
}

export default CommentCard;
