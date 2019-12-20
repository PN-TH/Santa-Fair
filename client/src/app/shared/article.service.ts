import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { Place } from './place';
import { Observable } from 'rxjs';
import { Review } from './review';
import { Compo } from './compo';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  places : Place[];
  comment: Review;
  comments : Review[];
  articles : Article[]
  selectedArticle : Article;
  compositions : Compo[]
  wishlistArticle: Article[] = []
  total: number;
  keyWord : string = '';

  private baseUrl = 'http://localhost:3000';
  

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.http.get<Place[]>(this.baseUrl + '/places');
  }


  getComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/avis`);
  };

  getCommentsById(id): Observable<any> {
     return this.http.get(`${this.baseUrl}/avis:id/?id=${id}`)
  }

  addComment(newComment){
    return this.http.post(`${this.baseUrl}/avis`, newComment);
  }
  

  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`)
  };

  addArticle(newArticle : Article){
    return this.http.post(`${this.baseUrl}/articles`, newArticle);
  }


  getCategories(): Observable<any> {
    return this.http.get<Category[]>(this.baseUrl + '/categories');
  }

  getCompos(): Observable<any> {
    return this.http.get<Compo[]>(this.baseUrl + '/compositions');
  }

  getArticleArray(){
    this.getArticles().subscribe((response :any)=>{
      this.articles = response
    }) 
  }

  search(name): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles/search/?name=${name}`)
  }

  getNote(article){
    let note : number = 0
    if (parseInt(article.energy) === 0){
      note += 1 
    };
    if (parseInt(article.piece) === 1){
      note += 1
    };
    if (!parseInt(article.packaging)){
      note += 1
    };
    for (let place of this.places){
      if (article.place_id == place.id){
        note += place.note
      }
    };
    for (let composition of this.compositions){
      if (composition.id == article.composition_id){
        note += composition.note
      }
    };
    return note;
  };

  initName(keyWord){
      this.keyWord = keyWord
  }


}
