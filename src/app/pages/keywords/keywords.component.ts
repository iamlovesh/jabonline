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
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {

  getMostViewedArticleApi: any;


  constructor(public dialog: MatDialog, private service: ApiServiceService, private add: Address, private router: Router, private title: Title, private routes: ActivatedRoute) { }
  pdfpath = this.add.pdfPath;
  imagepath = this.add.imagesPath;
  assets = this.add.assets;

  ngOnInit(): void {
    this.title.setTitle('Keyword: Jabonline');
    this.routes.queryParams.subscribe(res => { const searchRes = res.keyword; 
      this.service.searchKeywords({ 'keywords': searchRes }).subscribe((res: any) => { 
        this.getMostViewedArticleApi = res.getKeywords;
      });
    });
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
