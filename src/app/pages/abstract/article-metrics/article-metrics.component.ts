import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-article-metrics',
  templateUrl: './article-metrics.component.html',
  styleUrls: ['./article-metrics.component.css']
})
export class ArticleMetricsComponent implements OnInit, AfterViewInit {

  @ViewChild('metrics') metrics: any; 
  @Input() articleMetricId: any;
  canvas: any;
  articleMetrics: any;
  color1 = [];
  color2 = [];
  Date =[];
  download =[];
  views = [];
  getTotalMetric: any;
  constructor(private api: ApiServiceService) { }

  ngAfterViewInit() {
     this.canvas = this.metrics.nativeElement;
     this.articleMetrics = this.canvas.getContext('2d');
      for (let i = 0; i < 120; i++) {
        this.color1.push('#17a2b8');
        this.color2.push('#fd7e14');
      }
      let myChart = new Chart(this.articleMetrics, {
      type: 'line',
      data: {
        labels: this.Date,
        datasets: [{
          label: 'Abstract',
          data: this.views,
          backgroundColor: this.color1,
          borderColor: ['#17a2b8'],
          borderWidth: 1,
          fill: false,
          //lineTension: 0
        },
        {
          label: 'PDF Download',
          data: this.download,
          backgroundColor: this.color2,
          borderColor: ['#fd7e14'],
          borderWidth: 1,
          fill: false,
          //lineTension: 0
        }
      ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  ngOnInit(): void {
    this.api.getArticleMetrics(this.articleMetricId).subscribe( res => { 
      
      for(let i =0; i<res.length;  i++) {
        let date1 = res[i].monthName + ' ' + res[i].yearname;
        this.Date.push(date1);
        this.download.push(res[i].Download);
        this.views.push(res[i].View);
      } 
    });

    this.api.getTotalMetrics(this.articleMetricId).subscribe(res => {
      this.getTotalMetric = res;
    });
  }


    

}
