import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  idArticle: any;
  isLoggedIn: any;
  isAdmin: any;
  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {
    this.idArticle = '';
    this.dataArray = {};
    this.route.params.subscribe(params => this.idArticle = params.id);
  }

  ngOnInit(): void {
    this.articleService.getArticlesById(this.idArticle).subscribe(res => {
      this.dataArray = res;
      console.log(this.dataArray);
    });
  }

  update(updateForm: NgForm): void {
    const libelle = updateForm.controls.libelle.value;
    const marque = updateForm.controls.marque.value;
    const prix = updateForm.controls.prix.value;
    const photo = updateForm.controls.photo.value;
    const idCategorie = updateForm.controls.idCategorie.value;

    if (libelle && marque && prix && photo && idCategorie) {
      this.articleService.putRequest(this.idArticle, libelle, marque, prix, photo, idCategorie);
    }
  }
}
