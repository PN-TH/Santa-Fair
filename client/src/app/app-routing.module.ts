import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'avis',
    component: ReviewComponent
  },
  {
    path: 'details',
    component: ProductDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
