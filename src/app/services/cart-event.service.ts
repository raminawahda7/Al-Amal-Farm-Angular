import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../components/models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  subtotal: number; // Calculated based on product price and quantity
}

@Injectable({
  providedIn: 'root', // Adjust provider scope as needed
})
export class CartEventsService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product, quantity: number) {
    const newItem: CartItem = {
      product,
      quantity,
      subtotal: product.price * quantity,
    };
    // ... Add logic to update cart items (replace with your implementation)
    this.cartItemsSubject.next(this.getUpdatedCartItems(newItem)); // Emit updated cart items
  }

  private getUpdatedCartItems(newItem: CartItem): CartItem[] {
    // Implement logic to update existing cart items or add the new item
    // This example assumes a simple cart where items are not combined
    return [...(this.cartItemsSubject.getValue() || []), newItem];
  }
}
