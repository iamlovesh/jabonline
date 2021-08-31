import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent extends Unsubscriber {
  policiesDataShow: any;

  constructor(
    private title: Title,
    private api: ApiServiceService,
    private routes: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('Policies: Jabonline');
    this.subscriptions.push(
      this.routes.params.subscribe(res => {
        const policies_id = res.id;
        this.subscriptions.push(
          this.api.getPoliciesById(policies_id).subscribe((res: any) => {
            this.policiesDataShow = res.getPoliciesById;
          })
        );
      })
    );
  }

}