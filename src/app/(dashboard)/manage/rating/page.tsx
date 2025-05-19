import { getRatings } from "@/lib/actions/rating.actions";
import { ERatingStatus } from "@/types/enums";
import RatingManage from "./RatingManage";
import { ITEMS_PER_PAGE } from "@/constants";

const page = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    search: string;
    status: ERatingStatus;
  };
}) => {
  const data = await getRatings({
    page: searchParams.page || 1,
    limit: ITEMS_PER_PAGE,
    search: searchParams.search,
    status: searchParams.status,
  });
  if (!data) return null;
  const { ratings, total } = data;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  return (
    <RatingManage
      ratings={ratings}
      totalPages={totalPages}
      total={total}
    ></RatingManage>
  );
};

export default page;
