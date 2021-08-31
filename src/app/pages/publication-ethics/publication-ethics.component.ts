import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-publication-ethics',
  templateUrl: './publication-ethics.component.html',
  styleUrls: ['./publication-ethics.component.css']
})
export class PublicationEthicsComponent extends Unsubscriber implements OnInit {
  getPublicationEthics: any;

  constructor(
    private title: Title,
    private api: ApiServiceService
  ) {
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('PublicationEthicsComponent: Jabonline');
    this.subscriptions.push(
      this.api.getPublicationEthics().subscribe((res: any) => {
        this.getPublicationEthics = [res.getPublicationEthics];
      })
    );
  }

}
