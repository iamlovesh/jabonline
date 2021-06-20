import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/address';
import { ApiServiceService } from '../../api-service.service';

export interface DialogData {
  image: any;
}

@Component({
  selector: 'app-past-issue',
  templateUrl: './past-issue.component.html',
  styleUrls: ['./past-issue.component.css']
})
export class PastIssueComponent implements OnInit, AfterViewInit {
  pastArticle: any;
  arcIssueArticleSubject: any;
  arcIssueArticleDetails: any;

  constructor(public dialog: MatDialog, private routes: ActivatedRoute, private api: ApiServiceService, private add: Address, private router: Router, private title: Title) { }
  _basePath$ = this.add.baseAdd;
  pdfpath = this.add.pdfPath;
  imagepath = this.add.imagesPath;
  assets = this.add.assets;


  ngOnInit(): void {
    this.title.setTitle('PastIssue: Jabonline');

  }
  ngAfterViewInit() {
    const route = this.routes.snapshot.params.id;
    this.pastArcticles(route);
  }
  pastArcticles(id: any) {
    this.api.arcIssueArticle(id).subscribe((res: any) => { this.pastArticle = res.arcIssueArticle; });
    this.api.arcIssueArticleSubject(id).subscribe((res: any) => {
      setTimeout(() => this.arcIssueArticleSubject = res.arcIssueArticleSubject);
    }, err => { console.log(err.message); });
  }

  openDialog(data1: any): void {
    const dialogRef = this.dialog.open(DialogImages, {
      // width:'50%',
      // height:'75%',
      data: { image: data1 }
    });

  }

  abstract(id: any, idss: any) {
    this.router.navigate(['/abstract.php'], { queryParams: { 'article_id': id, 'ids': idss, sts: 2 } }).then(() => { window.location.reload(); });
    this.countView(id);
  }

  countView(id: any) {
    this.api.countView(id).subscribe(res => { console.log(res); });
  }

  countDownload(url: any, id: any) {
    window.open(url, "_blank");
    this.api.countDownload(id).subscribe(res => { console.log(res); });
  }

}



@Component({
  selector: 'dialog-images',
  templateUrl: 'past-dialog.html',
})
export class DialogImages {

  constructor(
    public dialogRef: MatDialogRef<DialogImages>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {

    this.dialogRef.close();
  }

}
