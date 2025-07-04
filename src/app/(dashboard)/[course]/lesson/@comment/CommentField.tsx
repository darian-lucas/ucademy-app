"use client";
import { cn } from "@/lib/utils";
import { CommentItem } from "@/types";
import { getRepliesComment, timeAgo } from "@/utils";
import Image from "next/image";
import CommentReply from "./CommentReply";
import { CommentStatus } from "@/shared/types/enums";

interface CommentItemProps {
  comment: CommentItem;
  lessonId: string;
  userId: string;
  comments: CommentItem[];
}

const CommentField = ({
  comment,
  lessonId,
  userId,
  comments = [],
}: CommentItemProps) => {
  const replies = getRepliesComment(comments, comment._id);
  const level = comment.level || 0;
  const COMMENT_SPACING = 55;
  const isPending = comment.status === CommentStatus.PENDING;
  return (
    <>
      <div
        className={cn("flex items-start gap-3 ml-auto dark:border-opacity-50", {
          "opacity-50 pointer-events-none": isPending,
          "mt-5 first:mt-0": level === 0,
        })}
        style={{
          width: `calc(100% - ${level * COMMENT_SPACING}px)`,
        }}
      >
        <div className="size-10 rounded-full border borderDarkMode bgDarkMode flex-shrink-0">
          <Image
            src={
              comment.user?.avatar ||
              "https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?q=80&w=4912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={comment.user?.name}
            width={40}
            height={40}
            className="size-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-sm">
              {comment.user?.name || "Anonymous"}
            </h4>
            <span className="rounded-full size-1 bg-gray-500"></span>
            <span className="text-xs text-gray-500 font-medium">
              {timeAgo(comment.created_at)}
            </span>
          </div>
          <div className="p-5 rounded-lg border borderDarkMode bgDarkMode">
            <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-white font-medium">
              {comment.content}
            </p>
            {!isPending && (
              <CommentReply
                lessonId={lessonId}
                userId={userId}
                comment={comment}
              />
            )}
          </div>
        </div>
      </div>
      {replies.length > 0 &&
        replies.map((reply) => (
          <CommentField
            key={reply._id}
            comment={reply}
            lessonId={lessonId}
            userId={userId}
            comments={comments}
          />
        ))}
    </>
  );
};

export default CommentField;
