import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo:'productsByCategory/0', pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'productsByCategory/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
