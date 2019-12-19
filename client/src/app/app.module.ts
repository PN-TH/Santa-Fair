import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './pages/review/review.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule } from '@angular/forms'
import { WishlistComponent } from './pages/wishlist/wishlist.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSearchComponent } from './pages/home-search/home-search.component'
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProductDetailsPageComponent,
    UserReviewComponent,
    CreateComponent,
    HomeSearchComponent,
    WishlistComponent,
    CreateComponent,

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
