import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { ApiServiceService } from 'src/app/api-service.service';
import { Unsubscriber } from 'src/app/utility/unsubscriber';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-guidelines',
  templateUrl: './authors-guidelines.component.html',
  styleUrls: ['./authors-guidelines.component.css']
})
export class AuthorsGuidelinesComponent extends Unsubscriber implements OnInit {
  authorsGuideline: any;

  @Input()
  slug= 'authorsguideline';
  
  constructor(
    private api: ApiServiceService,
    private title:Title
  ) { 
    super();
  }

  ngOnInit(): void {
    this.title.setTitle('AuthorsGuidelines: Jabonline');
    this.subscriptions.push(
      this.api.authorsGuidelines().subscribe((res: any) => { this.authorsGuideline = res.authorsGuidelines; })
    );
  }

  ngAfterViewChecked() {
    if (this.authorsGuideline ) {
      const anchors = document.getElementsByTagName('a');
      for (let i = 0; i < anchors.length; i++) {
        if (anchors[i].hash) {
          const hash = anchors[i].hash.replace('#', '');
          anchors[i].setAttribute('href', `/${this.slug}#${hash}`);
          anchors[i].setAttribute('fragment', `${hash}`);
          anchors[i].setAttribute('ng-reflect-fragment', `${hash}`);
          anchors[i].setAttribute('routerlink', `/${this.slug}`);
          anchors[i].setAttribute('ng-reflect-router-link', `/${this.slug}`);
        } else if (anchors[i].href.match(environment.site_url_regex)) { 
          const url = anchors[i].href.replace(environment.site_url, '');
          anchors[i].setAttribute('href', `${url}`);
          anchors[i].setAttribute('routerlink', `${url}`);
          anchors[i].setAttribute('ng-reflect-router-link', `${url}`);
        }
      }
    }
  }

}
