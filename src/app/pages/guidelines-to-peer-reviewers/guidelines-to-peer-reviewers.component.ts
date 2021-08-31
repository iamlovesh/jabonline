import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-guidelines-to-peer-reviewers',
  templateUrl: './guidelines-to-peer-reviewers.component.html',
  styleUrls: ['./guidelines-to-peer-reviewers.component.css']
})
export class GuidelinesToPeerReviewersComponent extends Unsubscriber implements OnInit {
  guidelinesPearReviewers: any;

  constructor(
    private title: Title,
    private api: ApiServiceService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('GuidelinesToPeerReviewersComponent: Jabonline');
    this.subscriptions.push(
      this.api.getGuidelinesPeerReviewers().subscribe((res: any) => {
        this.guidelinesPearReviewers = [res.getGuidelinesPeerReviewers];
      })
    );
  }

}
