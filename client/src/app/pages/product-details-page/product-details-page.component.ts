import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  isEnergy : boolean;
  isDetachedPieces: boolean;
  isRecyclable : boolean;

  constructor(private productService : ProductService) { }

  ngOnInit() { this.getArticle()
  }

  getArticle(){
    this.productService.getArticles().subscribe((response : any) => {
      this.productService.articles = response;
      this.productService.selectedArticle = response[0]
      this.isEnergy = this.productService.selectedArticle.energy;
      this.isDetachedPieces = this.productService.selectedArticle.piece;
      this.isRecyclable = this.productService.selectedArticle.packaging
    })

  }

}
