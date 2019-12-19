import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { Place } from './place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  places : Place[]  

  private baseUrl = 'http://localhost:3000';
  articles: Article[];
  

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.http.get<Place[]>(this.baseUrl + '/places');
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`)
  }

  getArticleArray(){
    this.getArticles().subscribe((response :any)=>{
      this.articles = response
    }) 
  }

  search(name): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles/search/?name=${name}`)
  }


}
