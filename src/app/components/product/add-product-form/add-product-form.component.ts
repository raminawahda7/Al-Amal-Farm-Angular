import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductForPost } from '../../models/product.model';
import { ProductCategory } from 'src/app/enums/category-enum';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  productName: string = '';
  price: number = 0;
  category: string = '';
  description: string = '';
  productCategories: ProductCategory[] = [
    ProductCategory.Fruits,
    ProductCategory.Vegetables,
  ];

  @Output() formSubmitted = new EventEmitter<any>();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // nothing to do
  }

  onSubmit() {
    const product: ProductForPost = {
      title: this.productName,
      price: this.price,
      category: this.category,
      description: this.description,
    };

    this.productService.addProduct(product).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        // Reset form fields or close the form
        this.productName = '';
        this.price = 0;
      },
      (error: any) => {
        console.error('Error adding product:', error);
      }
    );
    this.formSubmitted.emit();
  }
}
