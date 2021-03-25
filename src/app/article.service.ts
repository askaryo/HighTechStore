import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 // articles: Array<string> = new Array<string>();
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.url);
  }

}
