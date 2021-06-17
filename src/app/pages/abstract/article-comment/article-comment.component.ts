import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.css']
})
export class ArticleCommentComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  submitted: boolean = false;
  @Input() articleComment: any;
  comment: any;
  commentArticleFetch: any;
  constructor(private fb: FormBuilder, private api: ApiServiceService, private _snackBar: MatSnackBar) { }

  commentForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    comment: ['',Validators.required],
    recaptcha: ['', Validators.required],
  });

  get f(){
    return this.commentForm.controls;
  }

  onComment() {
    this.submitted = true;
    this.comment = [this.commentForm.value];
    this.api.commentArticle(this.commentForm.value, this.articleComment).subscribe(res => { 
      if (res){
        // this.commentForm.reset();
        this._snackBar.open('Successfully Commented', 'End now', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ["bg-success","text-white"]
        });
      }

      if (!res) {
        this._snackBar.open('Already Commented', 'End now', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ["bg-danger","text-white"]
        });
      }
    });
  }

  ngOnInit(): void {
    this.api.commentArticleFetch(this.articleComment).subscribe(res => { this.commentArticleFetch = res; });
  }

}
