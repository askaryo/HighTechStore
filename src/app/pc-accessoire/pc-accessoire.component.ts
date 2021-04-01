import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-pc-accessoire',
  templateUrl: './pc-accessoire.component.html',
  styleUrls: ['./pc-accessoire.component.css']
})
export class PcAccessoireComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }




  ngOnInit(): void {
    this.articleService.getAll("3").subscribe(res => {
      for ( var rest in res) {

      }
      this.dataArray = res;
    });
  }

}
