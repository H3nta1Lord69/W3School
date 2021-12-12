import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { Article } from '../interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild( IonInfiniteScroll, {static: true} ) infiniteScroll: IonInfiniteScroll;

  public categories: string[] = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  public selectedCategory: string = this.categories[0];

  public articles: Article[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit() {
    
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe( articles => {
        this.articles = [ ...articles ];
    });

  }

  segmentChanged( ev: Event ) {
    this.selectedCategory = (ev as CustomEvent).detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe( articles => {
        this.articles = [ ...articles ];
    });
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory( this.selectedCategory, true )
      .subscribe( articles => {
        this.articles = articles;

        this.infiniteScroll.complete();
      });
  }

}
