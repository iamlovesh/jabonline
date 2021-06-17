import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiServiceService } from "../../../app/api-service.service";
import { Address } from '../../address';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit, AfterViewInit {
  archives: any;
  archivesYear: any;

  constructor(private service: ApiServiceService, private route: Router, private title:Title, private add: Address) { }
  imagesPath$ = this.add.imagesPath
  ngOnInit(): void { }

  ngAfterViewInit() {
    this.title.setTitle('Archives: Jabonline');
    this.service.showArchivessYear().subscribe((res: any) => { this.archivesYear = res.showArchivesYear; });
    this.service.showArchivess().subscribe((res: any) => { this.archives = res.showArchives; });
  }

  sendId(id: any){
    this.route.navigateByUrl(`/past/${id}`);
  }

}
