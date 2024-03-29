export interface CartItem {
    product: any; // Replace with Product interface/class if you have one
    quantity: number;
    subtotal?: number; // Optional property to calculate subtotal
  }