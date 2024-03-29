import { Component, OnInit } from '@angular/core';
import { Product } from './components/models/product.model';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartEventsService } from './services/cart-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showForm: boolean = false;
  categories: string[] = []; // Array to store category names
  products: Product[] = []; // Array to store product data
  cartItemCount: number = 0;

  constructor(
    private modalService: NgbModal,
    private cartEventsService: CartEventsService,
    private productService?: ProductService
  ) {
    this.cartEventsService.cartItems$.subscribe((cartItems) => {
      this.cartItemCount = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    });
  }

  ngOnInit() {
    if (this.productService) {
      this.productService.getProducts().subscribe((products) => {
        this.products = products.slice(0, 6);
      });
    } else {
      this.products = [
        // Replace with actual data
        {
          id: 1,
          title: 'Apple',
          description: 'Fresh red apple',
          price: 2.5,
          image: 'assets/apple.jpg',
          category: '1',
        },
      ];
    }
  }

  toggleFormVisibility() {
    ($('#addProductModal') as any).modal('toggle');
  }

  closeModal() {
    ($('#addProductModal') as any).modal('hide');
  }
  openCartModal() {
    // Assuming you have a template reference variable for the modal content in your product.component.html
    this.modalService.open('cartContent'); // Replace 'cartContent' with your actual reference variable name
  }
  showCartResults() {
    alert(`You have ${this.cartItemCount} items in your cart.`);
    this.openCartModal();
  }
}
