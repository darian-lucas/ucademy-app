/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import mongoose from "mongoose";


// singleton connection: chỉ connect 1 lần, nếu chưa connect thì sẽ connect
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not set");
  }
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("Using new database connection");
  } catch (error) {
    console.log("Error while connecting to database");
  }
};
