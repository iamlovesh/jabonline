import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';

@Component({
  selector: 'app-editorial-board',
  templateUrl: './editorial-board.component.html',
  styleUrls: ['./editorial-board.component.css']
})
export class EditorialBoardComponent extends Unsubscriber implements OnInit {
  editoralBoard: any;

  constructor(
    private api: ApiServiceService,
    private title:Title
  ) {
    super();
   }

  ngOnInit(): void {
    this.title.setTitle('EditorialBoard: Jabonline');
    this.subscriptions.push(
      this.api.editorialBoard().subscribe((res: any) => {
        this.editoralBoard = res.authorsGuidelines;
      })
    );
  }

}
