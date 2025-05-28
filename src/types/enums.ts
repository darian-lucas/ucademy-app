enum EUserStatus {
  ACTIVE = "ACTIVE",
  UNACTIVE = "UNACTIVE",
  BANNED = "BANNED",
}
enum EUserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  EXPERT = "EXPERT",
}

enum ECourseStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum ECommentStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum ECourseLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}
enum ELessonType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
}

enum ECouponType {
  PERCENT = "PERCENT",
  AMOUNT = "AMOUNT",
}

enum EOrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

enum ERatingStatus {
  ACTIVE = "ACTIVE",
  UNACTIVE = "UNACTIVE",
}

export {
  EUserRole,
  EUserStatus,
  ECourseStatus,
  ECourseLevel,
  ELessonType,
  EOrderStatus,
  ECouponType,
  ERatingStatus,
  ECommentStatus
};
