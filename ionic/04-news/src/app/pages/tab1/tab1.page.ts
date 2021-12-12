import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { NewsReponse } from '../interfaces';
import { Article } from '../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild( IonInfiniteScroll, {static: true} ) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit() {
    this.newsService.getTopHeadlines()
    .subscribe( articles => this.articles.push(...articles) );
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory( 'general', true )
      .subscribe( articles => {
        this.articles = articles;

        this.infiniteScroll.complete();
      });
  }

}
