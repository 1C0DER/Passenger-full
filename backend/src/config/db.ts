import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/admin_dashboard";

export const connectDB = async () => {
try {
await mongoose.connect(MONGO_URI);
console.log("✅ MongoDB connected");
} catch (error) {
console.error("❌ MongoDB connection failed", error);
process.exit(1);
}
};
