import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { Address } from '../../../address';
import { ApiServiceService } from '../../../api-service.service';

declare var $: any;

export interface DialogData {
  email: string;
}
export interface DialogData {
  image: any;
}

@Component({
  selector: 'app-content-carousell',
  templateUrl: './content-carousell.component.html',
  styleUrls: ['./content-carousell.component.css']
})
export class ContentCarousellComponent extends Unsubscriber implements OnInit {
  @ViewChild("wordOfOnTheCover") wordOfOnTheCover: ElementRef;
  hiding: boolean = false;

  arcIssueArticleDetails: any;
  pastAddress$ = document.location.href;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  assets = this.add.assets;
  imgpath = this.add.imagesPath;
  email: string;
  _basePath$ = this.add.baseAdd;
  show = false

  constructor(
    private add: Address,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private api: ApiServiceService,
    private routes: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const route = this.routes.snapshot.params.id;
    this.subscriptions.push(
      this.api.arcIssueArticleDetails(route).subscribe((res: any) => {
        this.arcIssueArticleDetails = res.arcIssueArticleDetails;
      }, err => { console.log(err.message); })
    );
  }

  fullData() {
    if (this.show == true) {
      this.show = false
      $('.disp').css('display', 'block')
    } else {
      this.show = true
      $('.disp').css('display', 'none')
    }
  }

  openDialogg(data1: any): void {
    this.dialog.open(DialogImages, {
      data: { image: data1 }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(tocDialog, {
      data: { email: this.email }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(result => {
        this.subscriptions.push(
          this.api.subscribeTOC({ 'email': result }, '').subscribe(res => {
            this.email = result;
            if (res === 1) {
              this._snackBar.open('Confirmation email sent', 'OK', {
                duration: 3000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
              });
            }
          })
        );
      })
    );
  }

  onTheCover(data: any) {
    this.hiding = true;
    this.wordOfOnTheCover.nativeElement.innerText = data;
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

@Component({
  selector: 'toc',
  templateUrl: 'tocc-alert.html',
  styleUrls: ['./content-carousell.component.css']
})
export class tocDialog extends Unsubscriber {
  model: string;
  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    public dialogRef: MatDialogRef<tocDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: ApiServiceService
  ) {
    super();

    this.subscriptions.push(
      this.modelChanged.pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap(data => this.api.subscribeTOC({ 'email': data }, 'mudit'))
      ).subscribe((model: any) => {
        if (model == 0) {
          this.model = 'You are already subscribed with us!';
        }
        if (model == 1) {
          this.model = 'Available';
        }
      })
    );
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
