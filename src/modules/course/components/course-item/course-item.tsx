import Image from "next/image";
import Link from "next/link";
import { formatNumberToK } from "@/utils";
import { IconEye, IconStar } from "@/shared/components/icons";
import { CourseProps } from "../../types";
import CourseItemDuration from "./course-item-duration";

interface CourseItemProps {
  data: CourseProps;
  cta?: string;
  url?: string;
}

const CourseItem = ({ data, cta, url = "" }: CourseItemProps) => {
  const courseUrl = url ? url : `/course/${data.slug}`;
  const courseInfo = [
    {
      title: formatNumberToK(data.views),
      icon: <IconEye className="size-4"></IconEye>,
    },
    {
      title: 5,
      icon: <IconStar className="size-4"></IconStar>,
    },
  ];

  return (
    <div className="bg-white dark:bg-grayDarker dark:border-opacity-10 border border-gray-200 p-4 rounded-2xl flex flex-col">
      <Link href={courseUrl} className="block h-[180px] relative">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
      </Link>
      <div className="pt-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-3">{data.title}</h3>
        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-5 text-xs text-gray-500 dark:text-grayDark">
            {courseInfo.map((item) => (
              <div className="flex items-center gap-2" key={item.title}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
            <CourseItemDuration slug={data.slug} />
            <span className="font-bold text-primary ml-auto text-base">
              {data.price.toLocaleString()}đ
            </span>
          </div>

          <Link
            href={courseUrl}
            className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-bold bg-primary h-12 button-primary"
          >
            {cta || "Xem chi tiết"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
