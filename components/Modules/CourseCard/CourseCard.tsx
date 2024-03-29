import React from "react";
import Image from "next/image";
import { Course } from "@/interfaces/course.interface";
import clock from "@/public/icons/courses/clock.svg";
import { Chip, Divider } from "@nextui-org/react";

function CourseCard({ title, id, image, des, time, teachers, price }: Course) {
  return (
    <div className="pt-[55px]">
      <div className="flex py-6 bg-white-100 dark:bg-dark-lighter flex-col gap-4 rounded-3xl ">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="overflow-hidden rounded-3xl w-[85%] -mt-20">
            <Image src={image} alt="" />
          </div>
          <div className="w-[85%] flex flex-col gap-4">
            <h2 className="text-[20px] font-peyda font-bold text-LightTitle dark:text-DarkTitle">
              {title}
            </h2>
            <p className="text-[15px] font-vazir font-bold text-LightBody dark:text-black-800">
              {des.slice(0, 85)} ...
            </p>
            <Chip
              classNames={{
                dot: ["bg-MainPrimary dark:bg-MainPrimary-lighter px-1.5"],
                base: [
                  "border-none font-vazir text-MainPrimary dark:text-MainPrimary-lighter",
                ],
              }}
              variant="dot"
            >
              {teachers}
            </Chip>
          </div>
          <Divider className="w-[85%] mx-auto bg-black-800" />
          <div className="flex justify-between w-[85%]">
            <Chip
              startContent={<Image src={clock} alt="" />}
              variant="solid"
              className="font-vazir text-white-100 bg-black-800 dark:bg-black-400"
            >
              {time}
            </Chip>
            <p className="text-xl text-MainPrimary dark:text-MainPrimary-lighter">
              {price === 0 ? "رایگان!" : `${price} تومان`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
