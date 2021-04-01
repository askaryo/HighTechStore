import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-stockage-accessoire',
  templateUrl: './stockage-accessoire.component.html',
  styleUrls: ['./stockage-accessoire.component.css']
})
export class StockageAccessoireComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll("9").subscribe(res => {
      this.dataArray = res;
    });
  }
}
