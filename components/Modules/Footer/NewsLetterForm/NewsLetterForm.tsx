import React from "react";
import PrimaryInput from "../../Input/PrimaryInput";
import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewsLetterFormType } from "@/types/newsLetterForm";

export default function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormType>();

  const submitFormHandler: SubmitHandler<NewsLetterFormType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-3/4 sm:w-full mx-auto order-4 sm:order-4 col-span-2 sm:col-span-1 flex flex-col gap-5"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <PrimaryInput
        placeholder="ایمیلت رو برامون بنویس..."
        variant="flat"
        className="font-peyda"
        register={{
          ...register("email", {
            required: true,
          }),
        }}
      />
      <Button
        className="w-full bg-MainPrimary text-sm text-BtnText flex items-center justify-center text-center py-3"
        type="submit"
      >
        <p>عضویت در خبرنامه</p>
      </Button>
    </form>
  );
}
