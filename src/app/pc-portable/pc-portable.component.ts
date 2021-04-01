import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  public dataArray: Array<string> | any;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll("1").subscribe(res => {
      this.dataArray = res;
    });
  }
}
