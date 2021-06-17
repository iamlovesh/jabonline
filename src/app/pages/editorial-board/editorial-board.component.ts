import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-editorial-board',
  templateUrl: './editorial-board.component.html',
  styleUrls: ['./editorial-board.component.css']
})
export class EditorialBoardComponent implements OnInit {
  editoralBoard: any;

  constructor(private api: ApiServiceService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('EditorialBoard: Jabonline');
    this.api.editorialBoard().subscribe((res: any) => { this.editoralBoard = res.authorsGuidelines;});
  }

}
