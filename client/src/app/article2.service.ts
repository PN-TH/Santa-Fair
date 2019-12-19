import { Injectable } from '@angular/core';
import { Article } from './shared/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Article2Service {

  articles: Article[] = [];


  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`);
  };
}

