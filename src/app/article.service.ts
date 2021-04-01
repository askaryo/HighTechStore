import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 // articles: Array<string> = new Array<string>();
  url = 'http://1ef9ad55ea28.ngrok.io/rest_project_template/rest/categories/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.url);
  }

}
