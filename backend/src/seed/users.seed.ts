import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { USER_STATUSES } from "../constants/userStatus";
import { connectDB } from "../config/db";

const seedUsers = async () => {
  try {
    await connectDB();

    // Clear existing users
    await User.deleteMany();

const users = [
  {
    name: "John Doe",
    email: "john23@gmail.com",
    phoneNumber: "0714826391",
    status: "Active",
    role: "admin",               // 👑 ADMIN
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Alice Brown",
    email: "alice@test.com",
    phoneNumber: "0649172058",
    status: "Active",
    role: "user",
    password: bcrypt.hashSync("alicepass", 10),
  },
  {
    name: "Michael Smith",
    email: "michael@test.com",
    phoneNumber: "0593387416",
    status: "Suspended",
    role: "user",
    password: bcrypt.hashSync("michaelpass", 10),
  },
  {
    name: "Sarah Johnson",
    email: "sarah@test.com",
    phoneNumber: "0825601943",
    status: "Active",
    role: "user",
    password: bcrypt.hashSync("sarahpass", 10),
  },
  {
    name: "David Miller",
    email: "david@test.com",
    phoneNumber: "0478296630",
    status: "Suspended",
    role: "user",
    password: bcrypt.hashSync("davidpass", 10),
  },
];

    await User.insertMany(users);

    console.log("✅ Users seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedUsers();
