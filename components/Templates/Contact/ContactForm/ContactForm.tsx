import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import { Button } from "@nextui-org/react";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import PrimaryTextarea from "@/components/Modules/Textarea/PrimaryTextarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactForm } from "@/types/contactForm";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const submitFormHandler: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <BoxHeader
        title="انتقادها و پیشنهادات"
        hasLink={false}
        linkTitle=""
        route=""
      />
      <div className="bg-white-100 dark:bg-dark-lighter w-[80%] sm:w-[65%] md:w-[50%] lg:w-[40%] rounded-3xl mx-auto pt-8 mb-36">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <PrimaryInput
            placeholder="ایمیل"
            variant="bordered"
            className="-translate-x-8 font-peyda"
            register={{
              ...register("email", {
                required: true,
              }),
            }}
          />
          <PrimaryTextarea
            placeholder="متن پیام"
            variant="bordered"
            className="mt-3 translate-x-8 font-peyda"
            register={{
              ...register("description", {
                required: true,
              }),
            }}
          />
          <Button
            className="bg-MainPrimary text-BtnText w-max mt-6 translate-y-5"
            type="submit"
          >
            <p>ارسال پیام</p>
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
