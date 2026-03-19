import mongoose from "mongoose";
const deliverySchema = new mongoose.Schema(
{
trackingId: {
    type: String,
    required: true,
    unique: true,
},
customer: {
    type: String,
    required: true,
},
from: {
    type: String,
    required: true,
},
to: {
    type: String,
    required: true,
},
status: {
    type: String,
    enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
    default: "Pending",
},
},
{ timestamps: true }
);

export default mongoose.model("Delivery", deliverySchema);