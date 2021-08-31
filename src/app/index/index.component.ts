import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, range } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import { Unsubscriber } from '../utility/unsubscriber';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent extends Unsubscriber implements OnInit {
  sliderCard = [
    {
      title: 'Latest Articles',
      subTitle:
        'Online first version of articles that are not yet assigned to an issue',
      showAll: '/onlinefirst',
      slideLoop: 'onlinefirstArticle',
    },
    {
      title: 'Current Issue',
      subTitle: '',
      showAll: '/current',
      slideLoop: 'currentIssueArticles',
    },
    {
      title: 'Trending Articles',
      subTitle: 'Rankings are updated daily for previous 30 days',
      showAll: '/trendingArticles',
      slideLoop: 'getTrending_articles',
    },
    {
      title: 'Most Viewed',
      subTitle: '',
      showAll: '/mostviewed',
      slideLoop: 'getMostViewArticleApi',
    },
  ];

  configg: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
  };

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
  };
  getMostViewArticleApi: any;
  currentIssueArticles: Observable<any>;
  onlinefirstArticle: any;
  getTrending_articles: any;
  newsAnnouncements: any;
  journamMatrix: any;
  getEditorsChoice: any;
  statisticsRecords: any;

  imagePath = this.add.imagesPath;
  assetsI = this.add.assetsI;
  assets = this.add.assets;

  constructor(
    private api: ApiServiceService,
    private add: Address,
    private title: Title,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('JABB');
    this.subscriptions.push(
      this.api.onlinefirstArticles().subscribe((res: any) => {
        this.onlinefirstArticle = res.onlinefirstArticle;
      }),
      this.api.currentIssueArticles().subscribe((res) => {
        this.currentIssueArticles = res.currentIssueArticle;
      }),
      this.api.getMostViewArticleApi().subscribe((res) => {
        this.getMostViewArticleApi = res.getMostViewArticleApi;
      }),
      this.api.getTrending_articles().subscribe((res) => {
        this.getTrending_articles = res.getTrending_articles;
      }),
      this.api.newsAnnouncements().subscribe((res) => {
        this.newsAnnouncements = res.newsAnnouncements;
      }),
      this.api.journamMatrix().subscribe((res) => {
        this.journamMatrix = [res];
      }),
      this.api.getEditorsChoice().subscribe((res) => {
        this.getEditorsChoice = res.getEditorsChoice;
      }),
      this.api.getStatistics().subscribe((res) => {
        this.statisticsRecords = [res];
      })
    );
  }

  editorChoice(id: any) {
    this.router
      .navigate(['/abstract.php'], {
        queryParams: { article_id: id, sts: 2 },
      })
      .then(() => {
        window.location.reload();
      });
  }
}
