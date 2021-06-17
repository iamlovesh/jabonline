import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';

export interface DialogData {
  image: any;
}

@Component({
  selector: 'app-author-article',
  templateUrl: './author-article.component.html',
  styleUrls: ['./author-article.component.css']
})
export class AuthorArticleComponent implements OnInit {
  authorArticles: any;

  constructor(public dialog: MatDialog, private routes: ActivatedRoute, private add: Address, private router: Router, private service: ApiServiceService, private title:Title) { }
  pdfpath = this.add.pdfPath;
  imagepath = this.add.imagesPath;
  assets = this.add.assets
  ngOnInit(): void {
    this.title.setTitle('AuthorArticle: Jabonline');
    this.routes.queryParams.subscribe(res => {
      this.service.authorArticles({ "author": res.authorArticleName }).subscribe(res => { this.authorArticles = res.get_articles; });
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

  openDialog(data1: any): void {
    const dialogRef = this.dialog.open(DialogImages, {
      data: { image: data1 }
    });

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