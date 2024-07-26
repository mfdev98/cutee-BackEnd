import { Member } from "../libs/types/member";
import OrderModel from "../schema/Order.model";
import OrderItemModel from "../schema/OrderItem.model";
import { Order, OrderItemInput } from "../libs/types/order";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjecId } from "../libs/config";
import { ObjectId } from "mongoose";

class OrderService {
   private readonly orderModel;
   private readonly orderItemModel;

   constructor() {
      this.orderModel = OrderModel;
      this.orderItemModel = OrderItemModel;
   }

   public async createOrder(member: Member, input: OrderItemInput[])
      : Promise<Order> {
      const memberId = shapeIntoMongooseObjecId(member._id);
      const amout = input.
         reduce((accumulator: number, item: OrderItemInput) => {
            return accumulator + item.itemPrice * item.itemQuantity;
         }, 0);
      const delivery = amout < 100 ? 5 : 0;
      console.log("values", amout, delivery);

      try {
         const newOrder: Order | any = await this.orderModel
            .create({
               orderTotal: amout + delivery,
               orderDelivery: delivery,
               memberId: memberId,
            });

         const orderId = newOrder._id;
         console.log("orderId:", newOrder._id);
         await this.recordOrderItem(orderId, input);
         return newOrder;
      } catch (err) {
         console.log("Error, model:createOrder:", err);
         throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      }

   }

   private async recordOrderItem(orderId: ObjectId, input: OrderItemInput[])
      : Promise<void> {
      const promisedList = input.map(async (item: OrderItemInput) => {
         item.orderId = orderId;
         item.productId = shapeIntoMongooseObjecId(item.productId);
         await this.orderItemModel.create(item);
         return "INSERTED";
      });

      console.log("promisedList:", promisedList);
      const orderItemState = await Promise.all(promisedList);
      console.log("orderItemState:", orderItemState);
   }


}


export default OrderService;