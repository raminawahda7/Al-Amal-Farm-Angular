import { Component, OnInit, ViewChild } from '@angular/core';
import { CartItem } from '../models/cart-item.model'; // Assuming cart item model location
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Assuming using NgbModal from ng-bootstrap
import { CartService } from 'src/app/services/cart.service'; // Assuming cart service location

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css'],
})
export class CartModalComponent implements OnInit {
  cartItems: CartItem[] = [
    {
      product: { title: 'T-Shirt', price: 10.00 },
      quantity: 2,
      subtotal: 20.00, // Assuming you calculate subtotal here
    },
    {
      product: { title: 'Coffee Mug', price: 5.50 },
      quantity: 1,
      subtotal: 5.50, // Assuming you calculate subtotal here
    },
    {
      product: { title: 'Notebook', price: 12.99 },
      quantity: 3,
      subtotal: 38.97, // Assuming you calculate subtotal here
    },
  ];
  
  @ViewChild('cartContent') content: any; // Reference to modal content

  constructor(
    private cartService: CartService,
    private modalService: NgbModal
  ) {} // Inject services

  ngOnInit() {
    if (this.cartService) {
      // Check if CartService is available
      this.cartService.currentCart$.subscribe(
        (cart) => (this.cartItems = cart)
      );
    }
  }

  openCartModal() {
    this.modalService.open(this.content); // Open modal using NgbModal
  }

  // ... other methods (optional: remove item, update quantity)
}
