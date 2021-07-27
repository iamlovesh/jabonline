import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Address} from '../../../address';
import { ApiServiceService } from '../../../api-service.service';


export interface DialoggData  {
  email: string;
}
export interface DialogData {
  image: any;
}


@Component({
  selector: 'app-content-carouselll',
  templateUrl: './content-carouselll.component.html',
  styleUrls: ['./content-carouselll.component.css']
})
export class ContentCarouselllComponent implements OnInit {
  @Input() currentIssueArticleDetails: string;

  @ViewChild("wordOfOnTheCover") wordOfOnTheCover: ElementRef;


  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private add: Address, public dialog: MatDialog, private _snackBar: MatSnackBar, private api: ApiServiceService) { }
  assets = this.add.assets;
  imgpath = this.add.imagesPath;
  email: string;
  _basePath$ = document.location.href;
  hiding: boolean = false;


  openDialogg(): void {
    const dialogRef = this.dialog.open(tocDialoog, {
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

  onTheCover(data: any) {
    this.hiding = true;
    this.wordOfOnTheCover.nativeElement.innerText = data;
  }

  ngOnInit(): void {
  }
  openDialog(data1: any): void {
    const dialogRef = this.dialog.open(DialogImages, {
      data: { image : data1 }
    });

  }

}


@Component({
  selector: 'tocc',
  templateUrl: './tocc-alert.html',
  styleUrls: ['./content-carouselll.component.css']
})
export class tocDialoog {
  model: string;
  modelChanged: Subject<string> = new Subject<string>();
  constructor(
    public dialogRef: MatDialogRef<tocDialoog>,
    @Inject(MAT_DIALOG_DATA) public data: DialoggData, private api: ApiServiceService) { 
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


@Component({
  selector: 'dialog-images',
  templateUrl: 'dialog-images.html',
})
export class DialogImages {

constructor(
  public dialogRef: MatDialogRef < DialogImages >, 
  @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

onNoClick(): void {

  this.dialogRef.close();
}

}