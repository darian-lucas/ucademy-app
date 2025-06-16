enum UserStatus {
  ACTIVE = "ACTIVE",
  UNACTIVE = "UNACTIVE",
  BANNED = "BANNED",
}
enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  EXPERT = "EXPERT",
}

enum CourseStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum CommentStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum CourseLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}
enum LessonType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
}

enum CouponType {
  PERCENT = "PERCENT",
  AMOUNT = "AMOUNT",
}

enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

enum RatingStatus {
  ACTIVE = "ACTIVE",
  UNACTIVE = "UNACTIVE",
}

export {
  UserRole,
  UserStatus,
  CourseStatus,
  CourseLevel,
  LessonType,
  OrderStatus,
  CouponType,
  RatingStatus,
  CommentStatus,
};
