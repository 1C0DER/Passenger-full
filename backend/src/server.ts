import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import adminDeliveriesRoutes from "./routes/adminDeliveries"; 
import { connectDB } from "./config/db";
import { globalLimiter } from "./middleware/rateLimiter";

const app = express();

app.set("trust proxy", 1);

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

// 🔌 CONNECT TO MONGODB
connectDB();

app.use(globalLimiter);

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin/deliveries", adminDeliveriesRoutes); 

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
  console.log("🚀 Backend is up and running!");
});