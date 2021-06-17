import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Address } from 'src/app/address';
import { ApiServiceService } from 'src/app/api-service.service';
import { DialoggData } from '../../current-issue/content-carouselll/content-carouselll.component';

@Component({
  selector: 'app-content-carousellll',
  templateUrl: './content-carousellll.component.html',
  styleUrls: ['./content-carousellll.component.css']
})
export class ContentCarousellllComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private add: Address, public dialog: MatDialog, private _snackBar: MatSnackBar, private api: ApiServiceService) { }
  assets = this.add.assets;
  email: string;
  _basePath$ = this.add.baseAdd;


  openDialogg(): void {
    const dialogRef = this.dialog.open(tocDialoog, {
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.api.subscribeTOC({ 'email': result }, '').subscribe(res => {
        this.email = result;
        if (res === 1) {
          this._snackBar.open('Confirmation email sent', 'OK', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });
    });
  }

  ngOnInit(): void {
    // console.log(this.currentIssueArticleDetails);
  }

}


@Component({
  selector: 'tocc',
  templateUrl: './tocc-alert.html',
  styleUrls: ['./content-carousellll.component.css']
})
export class tocDialoog {
  model: string;
  modelChanged: Subject<string> = new Subject<string>();
  constructor(
    public dialogRef: MatDialogRef<tocDialoog>,
    @Inject(MAT_DIALOG_DATA) public data: DialoggData, private api: ApiServiceService) {
    this.modelChanged.pipe(debounceTime(750), distinctUntilChanged(), switchMap(data => this.api.subscribeTOC({ 'email': data }, 'mudit'))).subscribe((model: any) => {
      if (model == 0) {
        this.model = 'You are already subscribed with us!';
      }
      if (model == 1) {
        this.model = 'Available';
      }
    });
  }

  changed(text: string) {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

