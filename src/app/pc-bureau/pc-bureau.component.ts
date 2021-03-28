import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe(res => {
      this.dataArray = res;
    });
  }

}
