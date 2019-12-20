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
    this.articleService.getArticleArray();
    this.getPlaces();
    this.getCompositions();
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


    getCompositions(){
      this.articleService.getCompos().subscribe((response:any)=>
      this.articleService.compositions = response)
    }


    getPlaces(){
      this.articleService.getPlaces().subscribe((response:any)=>
      this.articleService.places = response)
    }

  create(){
     this.router.navigate(["/create"]) 
    this.articleService.initName(this.auto.query)
  }

}
