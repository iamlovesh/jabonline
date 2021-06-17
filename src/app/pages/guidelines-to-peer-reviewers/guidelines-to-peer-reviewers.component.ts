import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-guidelines-to-peer-reviewers',
  templateUrl: './guidelines-to-peer-reviewers.component.html',
  styleUrls: ['./guidelines-to-peer-reviewers.component.css']
})
export class GuidelinesToPeerReviewersComponent implements OnInit {
  guidelinesPearReviewers: any;

  constructor(private title:Title,private api : ApiServiceService) { }

  ngOnInit(): void {
    this.title.setTitle('GuidelinesToPeerReviewersComponent: Jabonline');
    this.api.getGuidelinesPeerReviewers().subscribe((res: any) => { this.guidelinesPearReviewers = [res.getGuidelinesPeerReviewers]; });
  }

}
