import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit, AfterViewInit {

  _rightMenu: any = [
    {  nameid: "1", name: "Abstract" },
    {  nameid: "2", name: "HTML Full-Text" },
    {  nameid: "3", name: "References" },
    {  nameid: "4", name: "Supplementary Material" },
    {  nameid: "5", name: "Article Metrics" },
    {  nameid: "6", name: "Similar Articles" },
    {  nameid: "7", name: "Request Permission" },
    {  nameid: "8", name: "Related Search" },
    {  nameid: "9", name: "Comment On This Article" },
  ];
  getAbstractDatavalues: any;
  ids: any;
  similarArticles: any;
  relatedSearchss: any;
  similarArticlesIsFound: any;
  relatedSearchssIsFound: any;
  _ids: any;
  keywords: any;
  str1:any
  str2:any
  constructor(private routes: ActivatedRoute, private api: ApiServiceService, private router: Router, private add: Address, private _renderer2: Renderer2, private readonly elementRef: ElementRef,) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  imagePath2 = this.add.pdfPath2;

  ngOnInit(): void {
   
  }


  ngAfterViewInit() {
    this.routes.queryParams.subscribe(res => { this.ids = res.article_id, this._ids = res.ids; });
    this.getAbstractdata(this.ids);
    this.similarArticle(this.ids);
    this.relatedSearchs(this.ids);
    setTimeout(() => {
      const _script$ = this._renderer2.createElement('script');
      _script$.src = "//js.trendmd.com/trendmd.min.js";
      _script$.setAttribute ('data-trendmdconfig', '{"journal_id":"80178","element":"#trendmd-suggestions"}');
      this._renderer2.appendChild(this.elementRef.nativeElement, _script$);
    }, 1000);
  }


  public getAbstractdata(id: any) {
    this.api.getAbstractDatavalue(id).subscribe(res => {
      setTimeout(() => {
        this.getAbstractDatavalues = res.getAbstractDatavalue;
        this.keywords = res.getAbstractDatavalue[0].keywords.split(",");
      });
    });
  }

  public similarArticle(id: any) {
    this.api.similarArticle(id).subscribe((res: any) => { this.similarArticles = res.similarArticle; this.similarArticlesIsFound = res.similarArticle[0]; });
  }

  public selectArticle(id: any) {
    this.router.navigate(['/abstract.php'], { queryParams: { article_id: id, sts: 2 } });
  }

  public relatedSearchs(id: any){
    this.api.relatedSearch(id).subscribe((res: any) => { this.relatedSearchss = res.relatedSearch; this.relatedSearchssIsFound = res.relatedSearch[0]; });
  }

  public onKeyword(keywords: any) {
    this.router.navigate(['/keywords'], { queryParams: { keyword: keywords}});
  }
}
