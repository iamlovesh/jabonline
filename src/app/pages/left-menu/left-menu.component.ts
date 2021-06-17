import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  policiesList = Array();

  rightPanel = [
    {
      name: 'About The Journal',
      subject: 'aboutus',
      link: '/aboutus'
    },
    {
      name: 'Editorial Board',
      subject: 'editorialBoard',
      link: '/editorialboard'
    },
    {
      name: 'Journal Policies',
      policies: this.policiesList,
    },
    {
      name: 'Author Guidelines',
      subject: 'authorGuidelines',
      link: '/authorsguideline'
    },
    {
      name: 'Publication Ethics',
      subject: 'publicationEthics',
      link: '/publicationEthics'
    },
    {
      name: 'Submit Manuscript',
      subject: 'submitManuscript',
      link: '/submitManuscript'
    },
    {
      name: 'Guidelines To Peer-Reviewers',
      subject: 'guidelinesToPeerReviewers',
      link: '/guidelinesPearReviewers'
    },
    {
      name: 'Terms & Conditions',
      subject: 'termsConditions',
      link: '/terms&conditions'
    },
  ];

  constructor(private api: ApiServiceService) { } 

  ngOnInit(): void {
    this.api.getPolicies().subscribe((res: any) => { for (let dataOfPolicies of res.getPolicies){this.policiesList.push(dataOfPolicies);}});
  }

}
