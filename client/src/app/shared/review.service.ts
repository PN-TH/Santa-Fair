import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  comment: Review;
  comments : Review[];

  private baseUrl = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/avis`);
  };

  addComment(newComment){
    return this.http.post(`${this.baseUrl}/avis`, newComment);
  }
}
