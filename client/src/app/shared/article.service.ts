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

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.http.get<Place[]>(this.baseUrl + '/places');

  }
}
