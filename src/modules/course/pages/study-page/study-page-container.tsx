import { getUserCourses } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import StudyCourses from "./components/study-courses";

async function StudyPageContainer() {
  const { userId } = await auth();
  const courses = (await getUserCourses(userId || "")) || [];
  return (
    <>
      <StudyCourses courses={courses}></StudyCourses>
    </>
  );
}

export default StudyPageContainer;
