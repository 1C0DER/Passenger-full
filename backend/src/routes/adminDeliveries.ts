console.log("🔥 adminDeliveries route loaded");
import { Router, Response } from "express";
import { authMiddleware, AuthRequest } from "../middleware/authMiddleware";
import { roleMiddleware } from "../middleware/roleMiddleware";
import Delivery from "../models/Delivery";

const router = Router();

/**
 * GET /api/admin/deliveries
 * Admin only
 * Supports pagination: page limit 10
 */
router.get(
"/",
authMiddleware,
roleMiddleware("admin"),
async (req: AuthRequest, res: Response) => {
try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const deliveries = await Delivery.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

    const total = await Delivery.countDocuments();

    res.status(200).json({
    page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    data: deliveries,
    });
} catch (error) {
    console.error("Admin deliveries error:", error);
    res.status(500).json({ message: "Server error" });
}
}
);

export default router;