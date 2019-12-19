import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { HomeSearchComponent } from './pages/home-search/home-search.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSearchComponent
  },
  {
    path: 'home',
    component: HomeSearchComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'votre-avis/:articleId',
    component: ReviewComponent
  },
  {
    path: 'les-avis',
    component: UserReviewComponent
  },
  {
    path: 'details',
    component: ProductDetailsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
