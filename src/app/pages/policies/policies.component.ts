import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent {
  policiesDataShow: any;

  constructor(private title: Title, private api: ApiServiceService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle('Policies: Jabonline');
    this.routes.params.subscribe(res => {
      const policies_id = res.id;
      this.api.getPoliciesById(policies_id).subscribe((res: any) => { this.policiesDataShow = res.getPoliciesById; });
    });
  }

}