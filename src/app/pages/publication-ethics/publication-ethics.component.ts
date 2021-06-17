import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-publication-ethics',
  templateUrl: './publication-ethics.component.html',
  styleUrls: ['./publication-ethics.component.css']
})
export class PublicationEthicsComponent implements OnInit {
  getPublicationEthics: any;

  constructor(private title:Title,private api: ApiServiceService) { }

  ngOnInit(): void {
    this.title.setTitle('PublicationEthicsComponent: Jabonline');
    this.api.getPublicationEthics().subscribe((res: any) => { this.getPublicationEthics = [res.getPublicationEthics];});
  }

}
