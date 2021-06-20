import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Address} from '../../../address';
import { ApiServiceService } from '../../../api-service.service';

declare var $: any;

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-content-carousell',
  templateUrl: './content-carousell.component.html',
  styleUrls: ['./content-carousell.component.css']
})
export class ContentCarousellComponent implements OnInit {
  arcIssueArticleDetails: any;

  pastAddress$ = document.location.href;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private add: Address, public dialog: MatDialog, private _snackBar: MatSnackBar, private api: ApiServiceService, private routes: ActivatedRoute) { }
  assets = this.add.assets;
  imgpath = this.add.imagesPath;
  email: string;
  _basePath$ = this.add.baseAdd;
  show= false
  

  ngOnInit(): void {
    const route = this.routes.snapshot.params.id;
    this.api.arcIssueArticleDetails(route).subscribe((res: any) => { this.arcIssueArticleDetails = res.arcIssueArticleDetails; }, err => { console.log(err.message); });
  }
  fullData(){
    if(this.show == true){
      this.show= false
      $('.disp').css('display','block')
    }else{
      this.show= true
      $('.disp').css('display','none')
   
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(tocDialog, {
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.api.subscribeTOC({'email':result},'').subscribe(res => { 
      this.email = result;
        if(res === 1){
          this._snackBar.open('Confirmation email sent', 'OK', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        }
      });
    });
  }

}


@Component({
  selector: 'toc',
  templateUrl: 'tocc-alert.html',
  styleUrls: ['./content-carousell.component.css']
})
export class tocDialog {
  model: string;
  modelChanged: Subject<string> = new Subject<string>();
  constructor(
    public dialogRef: MatDialogRef<tocDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ApiServiceService) { 
    this.modelChanged.pipe(debounceTime(750), distinctUntilChanged(), switchMap(data => this.api.subscribeTOC({ 'email': data }, 'mudit'))).subscribe((model: any) => {
        if(model == 0) { 
          this.model = 'You are already subscribed with us!';
        } 
        if(model == 1) {
          this.model = 'Available';
        }
    });
    }

  changed(text: string) {
    this.modelChanged.next(text);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
