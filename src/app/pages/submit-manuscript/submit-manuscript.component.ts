import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-submit-manuscript',
  templateUrl: './submit-manuscript.component.html',
  styleUrls: ['./submit-manuscript.component.css']
})
export class SubmitManuscriptComponent extends Unsubscriber implements OnInit {
  submitManuscript: any;

  constructor(
    private api: ApiServiceService,
    private title: Title
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('SubmitManuscript: Jabonline');
    this.subscriptions.push(
      this.api.submitManuscript().subscribe((res: any) => {
        this.submitManuscript = res.submit_menuscript;
      })
    );
  }

}
