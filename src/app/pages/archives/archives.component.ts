import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { ApiServiceService } from "../../../app/api-service.service";
import { Address } from '../../address';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent extends Unsubscriber implements AfterViewInit {
  archives: any;
  archivesYear: any;

  constructor(
    private service: ApiServiceService,
    private route: Router,
    private title: Title,
    private add: Address
  ) {
    super();
  }
  imagesPath$ = this.add.imagesPath

  ngAfterViewInit() {
    this.title.setTitle('Archives: Jabonline');
    this.subscriptions.push(
      this.service.showArchivessYear().subscribe((res: any) => {
        setTimeout(() => this.archivesYear = res.showArchivesYear);
      }),
      this.service.showArchivess().subscribe((res: any) => {
        this.archives = res.showArchives;
      })
    );
  }

  sendId(id: any) {
    this.route.navigateByUrl(`/past/${id}`);
  }

}
