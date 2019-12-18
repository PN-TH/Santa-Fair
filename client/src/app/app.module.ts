import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './pages/review/review.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent
    ProductDetailsPageComponent,
    UserReviewComponent,
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
