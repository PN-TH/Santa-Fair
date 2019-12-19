import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../shared/article';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  articleToCompare: Article = new Article;
  listOfArticlesToDisplay: Article[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getArticleArray()
  }

  onSubmit(){
    this.articleService.search(this.articleToCompare.name).subscribe((response :any)=>{
      console.log(response)
      this.listOfArticlesToDisplay = response;
    })
  }


}
