import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Address } from '../address';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  users: any;
  constructor(
    private add: Address,
    private router: Router,
    private meta: Meta,
    private _renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}
  assets = this.add.assets;

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  search() {
    this.router.navigate(['/search'], { queryParams: this.searchForm.value });
  }

  metas = [
    {
      name: 'google-site-verification',
      content: 'CiNSrzOYcfflLM3ZJ-iAIpnvEi09zA53fwWYSP6xx4U',
    },
    {
      name: 'msvalidate.01',
      content: 'DAAD88B626A3C291116C2205F859FA8B',
    },
    {
      name: 'ahrefs-site-verification',
      content:
        '77e225a461d3094b1e882a079b7ee9911e7445f1abc47617d04e817d408b4912',
    },
  ];

  ngOnInit(): void {
    this.getRandomInt();
    this.meta.addTags(this.metas);
  }
  getRandomInt() {
    this.users = Math.floor(Math.random() * Math.floor(30)) + 1;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById('navbar').style.padding = '0px 0px';
      document.getElementById('navbar').style.backgroundColor =
        'rgb(197 255 204)';
      document.getElementById('logo').style.fontSize = '25px';
      document.getElementById('dropdown').style.marginTop = '0.5rem';
    } else {
      document.getElementById('navbar').style.padding = '20px 10px';
      document.getElementById('navbar').style.backgroundColor = '#fff';
      document.getElementById('logo').style.fontSize = '35px';
      document.getElementById('dropdown').style.marginTop = '1.75rem';
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const script = this._renderer2.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-1259444-141';
      this._renderer2.appendChild(this.elementRef.nativeElement, script);

      window['dataLayer'] = window['dataLayer'] || [];
      function gtag() {
        window['dataLayer'].push({
          js: new Date(),
          config: 'UA-1259444-141',
        });
      }
    }, 1000);
  }
}
