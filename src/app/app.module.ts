import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductFormComponent } from './components/product/add-product-form/add-product-form.component';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartEventsService } from './services/cart-event.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    AddProductFormComponent,
    CartModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [CartEventsService], // Add CartEventsService to providers
  bootstrap: [AppComponent],
})
export class AppModule {}
