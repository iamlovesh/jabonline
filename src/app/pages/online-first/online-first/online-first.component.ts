import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { DialogData } from '../../current-issue/current-issue.component';

@Component({
  selector: 'app-online-first',
  templateUrl: './online-first.component.html',
  styleUrls: ['./online-first.component.css'],
})
export class OnlineFirstComponent extends Unsubscriber implements OnInit {
  mudit = 'kesharwani';
  muditt = 'varsha';
  onlinefirstArticle: any;
  onlinefirstArticleSubject: any;
  onlinefirstArticleDetails: any;
  pdfpath = this.add.pdfPath;
  imagepath = this.add.imagesPath;
  assets = this.add.assets;

  constructor(
    public dialog: MatDialog,
    private service: ApiServiceService,
    private add: Address,
    private router: Router,
    private title: Title
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('OnlineFirst: Jabonline');
    this.subscriptions.push(
      this.service.onlinefirstArticles().subscribe((res: any) => {
        this.onlinefirstArticle = res.onlinefirstArticle;
      }),
      this.service.onlinefirstArticleSubject().subscribe((res: any) => {
        this.onlinefirstArticleSubject = res.onlinefirstArticleSubject;
      }),
      this.service.onlinefirstArticleDetails().subscribe((res: any) => {
        this.onlinefirstArticleDetails = res.onlinefirstArticleDetails;
      })
    );
  }

  openDialog(data1: any): void {
    this.dialog.open(DialogImages, {
      data: { image: data1 },
    });
  }

  abstract(id: any, idss: any) {
    this.router
      .navigate(['/abstract.php'], {
        queryParams: { article_id: id, ids: idss, sts: 2 },
      })
      .then(() => {
        window.location.reload();
      });
    this.countView(id);
  }

  countView(id: any) {
    this.subscriptions.push(
      this.service.countView(id).subscribe((res) => {
        console.log(res);
      })
    );
  }

  countDownload(url: any, id: any) {
    window.open(url, '_blank');
    this.subscriptions.push(
      this.service.countDownload(id).subscribe((res) => {
        console.log(res);
      })
    );
  }
}

@Component({
  selector: 'dialog-images',
  templateUrl: 'dialog-images.html',
})
export class DialogImages {
  constructor(
    public dialogRef: MatDialogRef<DialogImages>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
