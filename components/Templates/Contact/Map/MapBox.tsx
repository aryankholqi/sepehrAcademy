import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Modules/Map/Map"), {
  ssr: false,
});

const MapBox = () => {
  return (
    <>
      <BoxHeader
        title="یه سر بیا پیشمون"
        hasLink={false}
        linkTitle=""
        route=""
      />
      <DynamicMap />
      <p className="text-LightBody dark:text-DarkBody flex justify-center py-2 text-sm">
        آدرس ما ساری بلوار خزر آموزشگاه دکتر بحرالعلوم هست.منتظر حضور گرمتان
        هستیم .
      </p>
    </>
  );
};

export default MapBox;
