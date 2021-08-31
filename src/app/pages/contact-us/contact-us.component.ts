import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent extends Unsubscriber implements OnInit, AfterViewInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  contactAddress: any;

  selectName: any = [{ "selectName": "Subscription of a Journal" }, { "selectName": "Submission of New Manuscript" }, { "selectName": "Submission of revised Manuscript" }, { "selectName": "Submission of Final Proof Corrections" }, { "selectName": "Processing Cost" }, { "selectName": "Joining as Editor Reviewer" }, { "selectName": "Abstracting/Indexing of a Journal" }, { "selectName": "Published Articles" }];

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    qualification: [''],
    address: [''],
    subject: [''],
    message: ['', Validators.required],
    recaptcha: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiServiceService,
    private title: Title,
    private _snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('ContactUs: Jabonline');
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.api.contactAdd().subscribe((res: any) => {
        this.contactAddress = res.contents;
      })
    );
  }

  onSubmit() {
    this.subscriptions.push(
      this.api.contactForm(this.contactForm.value).subscribe((res: any) => {
        this._snackBar.open(res.msg, 'End now', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: 'bg-primary',
        });
      })
    );
  }

}