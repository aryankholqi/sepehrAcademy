import Link from "next/link";
import React from "react";
import instagramIcon from "@/public/icons/theme/icons8-instagram-100.png";
import telegramIcon from "@/public/icons/theme/icons8-telegram-100.png";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import NewsLetterForm from "./NewsLetterForm/NewsLetterForm";

function Footer() {
  return (
    <div className="sm:pb-0 pb-20">
      <footer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-5 gap-y-16 mt-60 md:pb-10 px-3">
        <ul className="lg:flex flex-col gap-2 order-2 md:order-1 hidden">
          <li>
            <h2 className="text-[20px] md:text-[25px] text-LightTitle dark:text-DarkTitle font-vazir font-bold pb-2">
              دسترسی سریع
            </h2>
          </li>
          <li>
            <Link
              className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
              href={"#"}
            >
              قوانین و مقررات
            </Link>
          </li>
          <li>
            <Link
              className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
              href={"#"}
            >
              ارسال تیکت
            </Link>
          </li>
          <li>
            <Link
              className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
              href={"#"}
            >
              همه دوره ها
            </Link>
          </li>
          <li>
            <Link
              className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
              href={"#"}
            >
              همه مقاله ها
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 order-2">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-[20px] md:text-[25px] text-LightTitle dark:text-DarkTitle font-vazir font-bold pb-2">
                لینک های مفید
              </h2>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
                href={"#"}
              >
                آموزش جاوا اسکریپت
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
                href={"#"}
              >
                آموزش پایتون
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
                href={"#"}
              >
                آموزش HTML
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-black-800"
                href={"#"}
              >
                آموزش CSS
              </Link>
            </li>
          </ul>
        </ul>
        <ul className="flex flex-col gap-2 order-3">
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-[20px] md:text-[25px] text-LightTitle dark:text-DarkTitle font-vazir font-bold pb-2">
                راه های ارتباطی
              </h2>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-DarkBody flex gap-2 items-center"
                href={"#"}
              >
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600">
                  <Image src={telegramIcon} alt="" width={22} height={22} />
                </div>
                <p>تلگرام</p>
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] md:text-[15px] font-bold text-LightBody dark:text-DarkBody flex gap-2 items-center"
                href={"#"}
              >
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
                  <Image src={instagramIcon} alt="" width={22} height={22} />
                </div>
                اینستاگرام
              </Link>
            </li>
          </ul>
        </ul>
        <NewsLetterForm />
      </footer>
      <Divider className="w-[85%] mx-auto bg-black-800 mt-10" />
      <p className="text-center py-5 text-black-800">
        طراحی شده توسط تیم Sleepy Guys
      </p>
    </div>
  );
}

export default Footer;
