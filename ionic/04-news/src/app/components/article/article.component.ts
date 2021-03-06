// Angular / Ionic
import { Component, Input } from '@angular/core';
import {
  ActionSheetButton,
  ActionSheetController,
  Platform,
} from '@ionic/angular';
// Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
// Own code
import { StorageService } from '../../services/storage.service';
import { Article } from '../../pages/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private storageService: StorageService
  ) {}

  openArticle() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, '_blank');
  }

  async onOpenMenu() {
    const articleInFavorite = this.storageService.articleInFavorites(
      this.article
    );

    const btns: ActionSheetButton[] = [
      {
        text: articleInFavorite ? 'Remove favorite' : 'Favorite',
        icon: articleInFavorite ? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite(),
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
      },
    ];

    const shareBtn: ActionSheetButton = {
      text: 'Share',
      icon: 'share-outline',
      handler: () => this.onShareArticle(),
    };

    if (this.platform.is('capacitor')) {
      btns.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons: btns,
    });

    await actionSheet.present();
  }

  onShareArticle() {
    const { title, source, url } = this.article;

    this.socialSharing.share(title, source.name, null, url);
  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
  }
}
