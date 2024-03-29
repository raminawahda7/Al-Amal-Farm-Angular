import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  product: any;
  quantity: number;
  subtotal?: number; // Optional property to calculate subtotal
}

@Injectable({
  providedIn: 'root' // Consider a more appropriate provider depending on your application structure
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  currentCart$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItemsSubject.getValue().find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const cartItem: CartItem = { product, quantity }; // Create CartItem object
      this.cartItemsSubject.next([...this.cartItemsSubject.getValue(), cartItem]);
    }
  }

  removeFromCart(product: any) {
    const updatedCart = this.cartItemsSubject.getValue().filter(item => item.product.id !== product.id);
    this.cartItemsSubject.next(updatedCart);
  }

  updateQuantity(product: any, newQuantity: number) {
    const updatedCart = this.cartItemsSubject.getValue().map(item => {
      if (item.product.id === product.id) {
        return { ...item, quantity: newQuantity }; // Update quantity for matching product
      }
      return item;
    });
    this.cartItemsSubject.next(updatedCart);
  }

  // ... other methods (optional: calculate total cart amount, handle checkout)
}
