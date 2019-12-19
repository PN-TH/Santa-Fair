import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { CreateComponent } from './pages/create/create.component';
import { CreateReviewComponent } from './components/create-review/create-review.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { HomeSearchComponent } from './pages/home-search/home-search.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProductDetailsPageComponent,
    UserReviewComponent,
    WishlistComponent,
    CreateComponent,
    CreateReviewComponent,
    HomeSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
