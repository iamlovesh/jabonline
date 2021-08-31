import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-article-metrics',
  templateUrl: './article-metrics.component.html',
  styleUrls: ['./article-metrics.component.css']
})
export class ArticleMetricsComponent extends Unsubscriber implements OnInit, AfterViewInit {

  @ViewChild('metrics') metrics: any;
  @Input() articleMetricId: any;
  canvas: any;
  articleMetrics: any;
  color1 = [];
  color2 = [];
  Date = [];
  download = [];
  views = [];
  getTotalMetric: any;

  constructor(
    private api: ApiServiceService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    super();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.canvas = this.metrics.nativeElement;
      this.articleMetrics = this.canvas.getContext('2d');
      for (let i = 0; i < 120; i++) {
        this.color1.push('#17a2b8');
        this.color2.push('#fd7e14');
      }
    }
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.api.getArticleMetrics(this.articleMetricId).subscribe(res => {

        for (let i = 0; i < res.length; i++) {
          let date1 = res[i].monthName + ' ' + res[i].yearname;
          this.Date.push(date1);
          this.download.push(res[i].Download);
          this.views.push(res[i].View);
        }
      }),

      this.api.getTotalMetrics(this.articleMetricId).subscribe(res => {
        this.getTotalMetric = res;
      })
    );
  }
}
