import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }


  addArticle(addForm: NgForm): void
  {
    const libelle = addForm.controls.libelle.value;
    const marque = addForm.controls.marque.value;
    const prix = addForm.controls.prix.value;
    const photo = addForm.controls.photo.value;
    const idCategorie = addForm.controls.idCategorie.value;


    if (libelle && marque && prix && photo && idCategorie) {
      this.articleService.addRequest(libelle,marque,prix,photo,idCategorie);
    }
  }


}
