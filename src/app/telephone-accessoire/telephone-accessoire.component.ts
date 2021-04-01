import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-telephone-accessoire',
  templateUrl: './telephone-accessoire.component.html',
  styleUrls: ['./telephone-accessoire.component.css']
})
export class TelephoneAccessoireComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll("6").subscribe(res => {
      this.dataArray = res;
    });
  }
}
