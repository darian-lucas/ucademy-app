import { ICourse } from "@/database/course.model";
import { ILesson } from "@/database/lesson.model";

export type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
  onlyIcon?: boolean;
};

export type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export type TCreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};

export type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
};

export type TUpdateCourseLecture = {
  _id: string;
  title: string;
  lessons: ILesson[];
};

export interface TCourseUpdateParams extends Omit<ICourse, "lectures"> {
  lectures: TUpdateCourseLecture[];
};

export type TGetAllCourseParams = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
};

// Lecture
export type TCreateLectureParams = {
  course: string;
  title?: string;
  order?: number;
  path?: string;
};
export type TUpdateLectureParams = {
  lectureId: string;
  updateData: {
    title?: string;
    order?: number;
    _destroy?: boolean;
    path?: string;
  };
};

// Lesson
export type TCreateLessonParams = {
  lecture: string;
  course: string;
  title?: string;
  order?: number;
  path?: string;
  slug?: string;
};

export type TUpdateLessonParams = {
  lessonId: string;
  updateData: {
    title?: string;
    slug?: string;
    _destroy?: boolean;
    duration?: number;
    video_url?: string;
    content?: string;
  };
  path?: string;
};

export type TCreateHistoryParams = {
  course: string;
  lesson: string;
  checked: boolean | string;
  path: string;
};

// Order
export type TCreateOrderParams = {
  code: string;
  course: string;
  user: string;
  total?: number;
  amount?: number;
  discount?: number;
  coupon?: string;
};

//coupon
export type TCreateCouponParams = Omit<ICoupon, "_id created_at">;
export type TCouponParams = Omit<ICoupon, "courses"> & {
  courses: {
    _id: string;
    title: string;
  }[];
};
