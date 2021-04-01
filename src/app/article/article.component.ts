import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private idArticle: string ;
  public dataArray: Array<string> | any;
  private authentificationService: AuthentificationService;
  public isAdmin: boolean;
  public isLoggedIn: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private authService: AuthentificationService, private router: Router) {
    this.idArticle = '';
    this.route.params.subscribe( params => this.idArticle = params.id);
    this.authentificationService = authService;
    this.isLoggedIn = this.authentificationService.isLoggedIn;
    this.isAdmin = this.authentificationService.isAdmin;
    console.log(this.isLoggedIn);
    console.log(this.isAdmin);
    console.log(this.idArticle);
  }

  ngOnInit(): void {
    this.articleService.getArticlesById(this.idArticle).subscribe(res => {
      this.dataArray = res;
    });
    this.authentificationService.isConnected().subscribe(connected => {
      this.isLoggedIn = this.authentificationService.isLoggedIn;
      this.isAdmin = this.authentificationService.isAdmin;

    });
  }
  update(): any {
    // @ts-ignore
    this.router.navigate(['UpdateProduct/' + this.idArticle]);

  }
  delete(): any {
    if (confirm('Are you sure you want to delete this article ?')) {
      this.articleService.deleteRequest(this.idArticle);
    }
  }


}
