import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { ApiServiceService } from '../../../app/api-service.service';
import { Address } from '../../address';

export interface DialogData {
  image: any;
}

@Component({
  selector: 'app-current-issue',
  templateUrl: './current-issue.component.html',
  styleUrls: ['./current-issue.component.css'],
})
export class CurrentIssueComponent extends Unsubscriber implements OnInit {
  currentIssueArticles: any;
  currentIssueArticlesSubject: any;
  currentIssueArticleDetails: any;

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
    this.title.setTitle('CurrentIssue: Jabonline');
    this.subscriptions.push(
      this.service.currentIssueArticles().subscribe((res: any) => {
        this.currentIssueArticles = res.currentIssueArticle;
      }),
      this.service.currentIssueArticlesSubject().subscribe((res: any) => {
        this.currentIssueArticlesSubject = res.currentIssueArticleSubject;
      }),
      this.service.currentIssueArticleDetails().subscribe((res: any) => {
        this.currentIssueArticleDetails = res.currentIssueArticleDetails;
      })
    );
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

  openDialog(data1: any): void {
    this.dialog.open(DialogImages, {
      data: { image: data1 },
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
