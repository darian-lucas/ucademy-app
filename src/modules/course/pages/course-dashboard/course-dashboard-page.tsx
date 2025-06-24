import React from "react";
import CourseDashboardContainer from "./components";
import { fetchCourses } from "../../actions";

async function CourseDashboardPage() {
  const courseList = (await fetchCourses({})) || [];
  return <CourseDashboardContainer courseList={courseList} />;
}

export default CourseDashboardPage;
