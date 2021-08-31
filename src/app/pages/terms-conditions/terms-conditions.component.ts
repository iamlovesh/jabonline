import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent extends Unsubscriber implements OnInit {
  termsConditions: any;

  constructor(
    private api: ApiServiceService,
    private title: Title
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('Terms and Conditions: Jabonline');
    this.subscriptions.push(
      this.api.termsConditions().subscribe((res: any) => {
        this.termsConditions = res.termsConditions;
      })
    );
  }
}
