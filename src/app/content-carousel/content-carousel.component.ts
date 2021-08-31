import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Address } from '../address';
import { ApiServiceService } from '../api-service.service';
import { Unsubscriber } from '../utility/unsubscriber';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-content-carousel',
  templateUrl: './content-carousel.component.html',
  styleUrls: ['./content-carousel.component.css']
})
export class ContentCarouselComponent extends Unsubscriber {

  @Input() currentIssueArticleDetails: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  assets = this.add.assets;
  email: string;

  constructor(
    private add: Address,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private api: ApiServiceService
  ) {
    super()
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

  coverImage(): void {
    this.dialog.open(CoverImage, {
      width: '33%',
    });
  }

}

@Component({
  selector: 'toc',
  templateUrl: 'toc-alert.html',
  styleUrls: ['./content-carousel.component.css']
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

@Component({
  selector: 'coverImage',
  templateUrl: './cover-image.html',
}) export class CoverImage { }
