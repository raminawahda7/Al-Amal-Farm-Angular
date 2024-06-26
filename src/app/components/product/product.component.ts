import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { CartEventsService } from 'src/app/services/cart-event.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  quantity = 1;

  @Output() cartItemCountChange = new EventEmitter<number>();

  constructor(private cartEventsService: CartEventsService) {}

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    this.cartEventsService.addToCart(this.product, this.quantity);
    this.cartItemCountChange.emit(this.quantity);
  }
}
