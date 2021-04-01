import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 // articles: Array<string> = new Array<string>();
  url = 'http://1ef9ad55ea28.ngrok.io/rest_project_template/rest';


  constructor(private http: HttpClient, private route: Router) { }




  getAll(id: string): Observable<Array<string>> {
    console.log(this.url + '/categories/' + id + "/articles");
    return this.http.get<Array<string>>(this.url+'/categories/'+id+"/articles");
  }


  getAllcategories(id: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.url+id+"/articles");
  }

  addRequest(libelle: string, marque: string, prix: number, photo: string, id_categorie : string) {

    console.log("On test le post");
    console.log(libelle,prix);

    return this.http.post<any>('http://1ef9ad55ea28.ngrok.io/rest_project_template/rest/articles/', { libelle, marque, prix, photo, id_categorie }).subscribe(() => {

      this.route.navigate([".."]);

    });
  }


  putRequest(idArticle: string, libelle: string, marque: string, prix: number, photo: string, idCategorie : string) {
    return this.http.put<any>('http://1ef9ad55ea28.ngrok.io/rest_project_template/rests/articles/'+idArticle, {libelle, marque, prix, photo, idCategorie});
  }


  deleteRequest(idArticle: string) {
    return this.http.delete<any>('http://1ef9ad55ea28.ngrok.io/rest_project_template/rest/articles/'+ idArticle);

  }






}
