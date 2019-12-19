import { Component, OnInit } from '@angular/core';
import { Article2Service } from 'src/app/article2.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private article2Service: Article2Service) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.article2Service.getArticles().subscribe((response:any) => {
      this.article2Service.articles = response;
    })
  };

}
