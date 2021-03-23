import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  nomArticle: string = 'Chemise';
  tailleArticle: number= 40 ;
  couleurArticle: string = 'Blue';
  message: string= 'pas de test';
  confirmation: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  testClick(): void{
    this.message = 'test';
  }
  testClick2(evt: Event): void{
    this.nomArticle = (evt.target as HTMLInputElement).value;
  }

}
