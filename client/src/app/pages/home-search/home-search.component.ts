import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../shared/article';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  articleToCompare: Article = new Article;
  listOfArticlesToDisplay: Article[];
  keyword = 'name';

  constructor(private articleService : ArticleService,
              private router : Router) { }

  ngOnInit() {
    this.articleService.getArticleArray()
  }

  onChangeSearch(article){
    this.articleService.search(article).subscribe((response :any)=>{
      this.listOfArticlesToDisplay = response;
    })
  }

  selectEvent(article) {
    this.articleService.selectedArticle = article
    this.router.navigate(["/details"])
  }


}
