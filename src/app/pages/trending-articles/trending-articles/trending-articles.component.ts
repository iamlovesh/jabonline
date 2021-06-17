import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';
import { DialogData } from '../../current-issue/current-issue.component';

@Component({
  selector: 'app-trending-articles',
  templateUrl: './trending-articles.component.html',
  styleUrls: ['./trending-articles.component.css']
})
export class TrendingArticlesComponent implements OnInit {

  getTrendingArticlesArticleApi: any;

  constructor(public dialog: MatDialog, private service: ApiServiceService, private add: Address, private router: Router, private title:Title) { }
  pdfpath = this.add.pdfPath;
  imagepath = this.add.imagesPath;
  assets = this.add.assets;

  ngOnInit(): void {
    this.title.setTitle('TrendingArticles: Jabonline');
    this.service.getTrendingArticlesArticleApi().subscribe(res => { this.getTrendingArticlesArticleApi = res.getTrending_articlesApi; });
  }


  openDialog(data1: any): void {
    const dialogRef = this.dialog.open(DialogImages, {
      data: { image: data1 }
    });

  }

  abstract(id: any, idss: any) {
    this.router.navigate(['/abstract.php'], { queryParams: { 'article_id': id, 'ids': idss, sts: 2 } }).then(() => { window.location.reload(); });
    this.countView(id);
  }

  countView(id: any) {
    this.service.countView(id).subscribe(res => { console.log(res); });
  }

  countDownload(url: any, id: any) {
    window.open(url, "_blank");
    this.service.countDownload(id).subscribe(res => { console.log(res); });
  }

}


@Component({
  selector: 'dialog-images',
  templateUrl: 'dialog-images.html',
})
export class DialogImages {

  constructor(
    public dialogRef: MatDialogRef<DialogImages>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {

    this.dialogRef.close();
  }

}
