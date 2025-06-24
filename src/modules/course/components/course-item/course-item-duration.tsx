"use client";
import { getCourseLessonsInfo } from "@/lib/actions/course.actions";
import { IconClock } from "@/shared/components/icons";
import { formatMinutesToHour } from "@/utils";
import React, { useEffect, useState } from "react";

export interface CourseItemDurationProps {
  slug: string;
}

export function CourseItemDuration({ slug }: CourseItemDurationProps) {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    async function getDuration() {
      const res = await getCourseLessonsInfo({ slug });
      setDuration(res?.duration || 0);
    }
    getDuration();
  }, [slug]);
  return (
    <div className="flex items-center gap-2">
      <IconClock className="size-4"></IconClock>
      <span>{formatMinutesToHour(duration)}</span>
    </div>
  );
}

export default CourseItemDuration;
