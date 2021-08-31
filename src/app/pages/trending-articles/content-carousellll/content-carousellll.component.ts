import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { DialoggData } from '../../current-issue/content-carouselll/content-carouselll.component';

@Component({
  selector: 'app-content-carousellll',
  templateUrl: './content-carousellll.component.html',
  styleUrls: ['./content-carousellll.component.css']
})
export class ContentCarousellllComponent extends Unsubscriber {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  assets = this.add.assets;
  email: string;
  _basePath$ = this.add.baseAdd;

  constructor(
    private add: Address,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private api: ApiServiceService
  ) {
    super();
  }

  openDialogg(): void {
    const dialogRef = this.dialog.open(tocDialoog, {
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
}

@Component({
  selector: 'tocc',
  templateUrl: './tocc-alert.html',
  styleUrls: ['./content-carousellll.component.css']
})
export class tocDialoog extends Unsubscriber {
  model: string;
  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    public dialogRef: MatDialogRef<tocDialoog>,
    @Inject(MAT_DIALOG_DATA) public data: DialoggData,
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
