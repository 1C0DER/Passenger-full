    console.log("🔥 authts CREATED");
import express from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { USER_STATUSES } from "../constants/userStatus";
import { authMiddleware } from "../middleware/authMiddleware";
import { roleMiddleware } from "../middleware/roleMiddleware";
import { authLimiter } from "../middleware/rateLimiter";

const router = express.Router();
const JWT_SECRET = "supersecret123";

router.use((req, _res, next) => {
  console.log("📌 AUTH ROUTE HIT:", req.method, req.path);
  next();
});


// --------------------------
// SIGN IN
// --------------------------
router.post("/signin", authLimiter, async (req, res) => {
      console.log("🔥 authLimiter CREATED");
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ role added to token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Sign in successful",
      token,
      user,
    });
  } catch {
    res.status(500).json({ message: "Sign in failed" });
  }
});

// --------------------------
// FORGOT PASSWORD
// --------------------------
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Email not found" });
  }

  const resetToken = jwt.sign(
    { id: user._id },
    JWT_SECRET,
    { expiresIn: "10m" }
  );

  console.log("RESET TOKEN:", resetToken);

  res.json({
    message: "Reset email sent",
    resetToken,
  });
});

// --------------------------
// RESET PASSWORD
// --------------------------
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const hashed = bcrypt.hashSync(password, 10);

    const user = await User.findByIdAndUpdate(
      decoded.id,
      { password: hashed },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Password updated!" });
  } catch {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

// --------------------------
// UPDATE USER (ADMIN ONLY)
// --------------------------
router.patch(
  "/update-user/:id",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    const { id } = req.params;
    const { name, email, phoneNumber, status } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, status },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user,
    });
  }
);

// --------------------------
// DELETE USER (ADMIN ONLY)
// --------------------------
router.delete(
  "/delete-user/:id",
  authMiddleware,
  roleMiddleware("admin"),
  async (req, res) => {
    const { id } = req.params;
    const { reason } = req.body;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (reason) {
      console.log(`User ${user.email} deleted. Reason: ${reason}`);
    }

    res.json({
      message: "User deleted successfully",
      deletedUser: user,
    });
  }
);

// --------------------------
// GET ALL USERS (ADMIN ONLY)
// --------------------------
router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  async (_req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  }
);

// --------------------------
router.get("/test", (_req, res) => {
  res.json({ message: "Auth route works!" });
});

export default router;
