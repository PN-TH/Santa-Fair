import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSearchComponent } from './home-search/home-search.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsPageComponent,
    UserReviewComponent,
    CreateComponent,
    HomeSearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
