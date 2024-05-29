import Categories from "@/components/Templates/Landing/Categories/Categories";
import HeroBox from "@/components/Templates/Landing/Hero/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCourses/NewCoursesBox";
import NewsBox from "@/components/Templates/Landing/News/NewsBox";
import ServiceBox from "@/components/Templates/Landing/Services/ServicesBox";
import { getCoursesTopApi } from "@/services/api/coursesApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox />
      <Categories />
      <NewCoursesBox />
      <NewsBox />
      <ServiceBox />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['coursesTop'],
    queryFn: async () => {
      const response = await getCoursesTopApi(7)
      return response.data
    },
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}