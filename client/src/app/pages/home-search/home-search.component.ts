import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../shared/article';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  @ViewChild('auto', {static : true}) auto;

  articleToCompare: Article = new Article;
  listOfArticlesToDisplay: Article[];
  keyword = 'name';
  message : string = "L'article recherché n'est pas répertorié, créez le ?"


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
    this.articleService.getNote(article)
  }


  create(){
     this.router.navigate(["/create"]) 
    this.articleService.initName(this.auto.query)
  }

}
