import Image from "next/image";
import React from "react";
import heroImage from "@/public/icons/hero/header-img.svg";
import search from "@/public/icons/hero/search.svg";
import HeroInput from "@/components/Templates/Landing/Hero/Input/HeroInput";

function Hero() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-full md:w-2/5 flex flex-col gap-8">
          <div className="flex flex-col gap-2 justify-center text-center md:text-right">
            <h1 className="text-MainPrimary dark:text-MainPrimary-lighter text-3xl lgl:text-4xl lg:text-[41px] xl:text-[43px] mb-1 font-bold font-peyda">
              دنبال چی می گردی؟
            </h1>
            <p className="text-LightBody dark:text-DarkBodytext-lg">
              دیگه وقتشه یه تکونی به خودت بدی…
            </p>
            <div className="lg:ml-16 rounded-[20px] border-[1px] border-solid border-MainPrimary dark:border-[1px] dark:border-MainPrimary-lighter relative">
              <HeroInput />
              <Image
                className="absolute left-1 top-1 rounded-[18px]"
                src={search}
                width={48}
                height={48}
                alt=""
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 justify-center text-center md:text-right">
            <h1 className="text-MainOrange dark:text-MainOrange text-1x2 lg:text-[30px] font-bold font-peyda">
              آکادمی سپهر
            </h1>
            <p className="text-LightBody dark:text-DarkBodytext-[16px]">
              آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد
              نیزار برای طراحی وب با بهترین روش یاد بگیری{" "}
            </p>
          </div>
        </div>
        <div className="w-3/5 hidden md:block">
          <Image
            alt=""
            className="xl:-translate-x-10 lg:-translate-x-5 -translate-x-3"
            src={heroImage}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
