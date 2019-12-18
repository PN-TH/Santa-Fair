import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Article } from '../shared/article'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';
  articles : Article[]
  selectedArticle : Article

  constructor(private http : HttpClient) { }


  // Récupération des articles stockés dans la base de donnée
  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`)
  };






}
