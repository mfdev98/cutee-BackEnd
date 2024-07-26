import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderSchema = new Schema({
   orderTotal: {
      type: Number,
      required: true
   },
   orderDelivery: {
      type: Number,
      required: true
   },

   orderStatus: {
      type: Number,
      enum: OrderStatus,
      default: OrderStatus.PAUSE
   },
   memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member"
   },


}, { timestamps: true, collection: "orders" } //updatedAt, createdAt;
);

export default mongoose.model("Order", orderSchema);