import React from "react";
import CourseManageContainer from "@/modules/course/pages/course-manage-page/course-manage-container";
import { CourseStatus } from "@/types/enums";

export interface CourseManagePageRootProps {
  searchParams: {
    page: number;
    search: string;
    status: CourseStatus;
  };
}

const CourseManagePageRoot = async ({
  searchParams,
}: CourseManagePageRootProps) => {
  return <CourseManageContainer searchParams={searchParams} />;
};

export default CourseManagePageRoot;
