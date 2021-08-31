import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-abstract-header',
  templateUrl: './abstract-header.component.html',
  styleUrls: ['./abstract-header.component.css'],
})
export class AbstractHeaderComponent extends Unsubscriber implements OnInit, AfterViewInit {
  id: any;
  abstractHeader: any;
  fileSize: any;
  authors: any[];
  authorAffiliation: any;
  found: any;
  authorsName: any;
  addd = this.add;
  assets = this.add.assets;
  pdfPath$ = this.add.pdfPath;
  _basePath$ = document.location.href;

  constructor(
    private add: Address,
    private routes: ActivatedRoute,
    private titleService: Title,
    private metaTag: Meta,
    private api: ApiServiceService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.routes.queryParams.subscribe(
        (res) => {
          this.id = res.article_id;
        },
        (err) => {
          console.log(err.message);
        }
      ),

      this.api.abstractHeader(this.id).subscribe(
        (res: any) => {
          this.abstractHeader = res.abstractHeader;
          this.titleService.setTitle(
            res.abstractHeader[0].title.replace(/<.*?>/g, '')
          );
        },
        (err) => {
          console.log(err.message);
        }
      ),

      this.api.authorAffiliation(this.id).subscribe((res: any) => {
        this.authorAffiliation = res.authorAffiliation[0].description;
      }),

      this.api.abstractMeta(this.id).subscribe((res: any) => {
        this.metaTag.addTags(res);
      })
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://crossmark-cdn.crossref.org/widget/v2.0/widget.js';
      document.getElementsByTagName('head')[0].appendChild(script);

      const _script = document.createElement('script');
      _script.async = true;
      _script.src = 'https://badge.dimensions.ai/badge.js';
      _script.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(_script);

      const _script$ = document.createElement('script');
      _script$.type = 'text/javascript';
      _script$.src = '//cdn.plu.mx/widget-popup.js';
      _script$.charset = 'utf-8';
      _script$.async = true;
      document.getElementsByTagName('head')[0].appendChild(_script$);
    }, 1000);
  }

  authorArticle(authorNameById: any) {
    this.router.navigate(['/authorArticle'], {
      queryParams: { authorArticleName: authorNameById },
    });
  }

  previous() {
    this.router
      .navigate(['/abstract.php'], {
        queryParams: { article_id: this.id - 1, sts: 2 },
      })
      .then(() => {
        window.location.reload();
      });
  }

  next() {
    this.router
      .navigate(['/abstract.php'], {
        queryParams: { article_id: +this.id + +1, sts: 2 },
      })
      .then(() => {
        window.location.reload();
      });
  }

  countDownload(url: any, id: any) {
    window.open(url, '_blank');
    this.subscriptions.push(
      this.api.countDownload(id).subscribe(
        (res) => {
          res;
        },
        (err) => {
          console.log(err.message);
        }
      )
    );
  }

  print() {
    window.print();
  }
}
