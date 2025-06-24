"use client";
import { lastLessonKey } from "@/shared/constants";
import { CourseGrid } from "@/shared/components";
import { useEffect, useState } from "react";
import CourseItem from "@/modules/course/components/course-item";

interface StudyCoursesProps {
  courses: any[] | null | undefined;
}

const StudyCourses = ({ courses }: StudyCoursesProps) => {
  const [lastLesson, setLastLesson] = useState<{
    course: string;
    lesson: string;
  }[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage
        ? JSON.parse(localStorage?.getItem(lastLessonKey) || "[]") || []
        : [];
      setLastLesson(data);
    }
  }, []);

  return (
    <CourseGrid>
      {courses &&
        courses.length > 0 &&
        courses?.map((item) => {
          const url =
            lastLesson.find((el: any) => el.course === item.slug)?.lesson || "";
          const firstLessonUrl = item.lectures[0].lessons[0].slug;
          return (
            <CourseItem
              key={item.slug}
              data={item}
              cta="Tiếp tục học"
              url={url || `/${item.slug}/lesson?slug=${firstLessonUrl}`}
            ></CourseItem>
          );
        })}
    </CourseGrid>
  );
};
export default StudyCourses;
