import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll("4").subscribe(res => {
      this.dataArray = res;
    });
  }
}
