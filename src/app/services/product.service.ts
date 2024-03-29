import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductForPost } from '../components/models/product.model';

const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your actual API endpoint

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>(apiUrl).subscribe(result => console.log('result: ', result))
    return this.http.get<Product[]>(apiUrl);
  }
  addProduct(product: ProductForPost) {
    return this.http.post(apiUrl, product);
  }
}
