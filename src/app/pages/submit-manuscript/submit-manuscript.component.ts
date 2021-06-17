import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-submit-manuscript',
  templateUrl: './submit-manuscript.component.html',
  styleUrls: ['./submit-manuscript.component.css']
})
export class SubmitManuscriptComponent implements OnInit {
  submitManuscript: any;

  constructor(private api: ApiServiceService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('SubmitManuscript: Jabonline');
    this.api.submitManuscript().subscribe((res:any) => { this.submitManuscript = res.submit_menuscript;});
  }

}
