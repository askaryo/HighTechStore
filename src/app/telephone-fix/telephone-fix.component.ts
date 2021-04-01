import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-telephone-fix',
  templateUrl: './telephone-fix.component.html',
  styleUrls: ['./telephone-fix.component.css']
})
export class TelephoneFixComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll("5").subscribe(res => {
      this.dataArray = res;
    });
  }



}
