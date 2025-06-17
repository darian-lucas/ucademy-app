import { getUserCourses } from "@/lib/actions/user.actions";
import StudyCourses from "./StudyCourses";
import { auth } from "@clerk/nextjs/server";
import { Heading } from "@/shared/components";

const page = async () => {
  const { userId } = await auth();
  const courses = await getUserCourses(userId || "");
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <StudyCourses
        courses={courses ? JSON.parse(JSON.stringify(courses)) : []}
      ></StudyCourses>
    </>
  );
};

export default page;
