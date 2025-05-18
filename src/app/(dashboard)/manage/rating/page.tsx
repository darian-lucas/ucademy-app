import React from "react";
import RatingManage from "./RatingManage";
import { getRatings } from "@/lib/actions/rating.actions";

const page = async() => {
  const ratings = await getRatings();
  return <RatingManage ratings={ratings}></RatingManage>;
};

export default page;
