import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductFormComponent } from './components/product/add-product-form/add-product-form.component';

const routes: Routes = [
    // Route for AddProductFormComponent
    { path: 'add-product', component: AddProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
