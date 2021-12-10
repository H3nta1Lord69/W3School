import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { NewsReponse, Article } from '../pages/interfaces';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines(): Observable<Article[]> {

    return this.http.get<NewsReponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`, {
      params: { apiKey }
    }).pipe(
      map( ({ articles }) => articles )
    );

  }

}
