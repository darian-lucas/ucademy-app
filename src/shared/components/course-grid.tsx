import React from "react";

interface CourseGridProps {
  children: React.ReactNode;
}

const CourseGrid = ({ children }: CourseGridProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-6 lg:gap-8 mt-6 course-slider">
      {children}
    </div>
  );
};

export default CourseGrid;
