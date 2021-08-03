import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private _renderer2: Renderer2,
    private elementRef: ElementRef
  ) {
    const script = this._renderer2.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-1259444-141';
    this._renderer2.appendChild(this.elementRef.nativeElement, script);

    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-1259444-141');
        `;
    document.head.appendChild(gaScript);
  }
  title = 'jabonline';
  ngOnInit(): void {
    this.cookie();
  }
  cookie() {
    if (isPlatformBrowser(this.platformId)) {
      const cookieContainer = this.document.querySelector('.cookie-container');
      const cookieButton = this.document.querySelector('.cookie-btn');
      const cookieRefuseButton = this.document.querySelector('.cookie-btn2');
      cookieButton.addEventListener('click', () => {
        cookieContainer.classList.remove('active');
        localStorage.setItem('cookieBannerDisplayed', 'true');
      });
      cookieRefuseButton.addEventListener('click', () => {
        cookieContainer.classList.remove('active');
      });
      setTimeout(() => {
        if (!localStorage.getItem('cookieBannerDisplayed'))
          cookieContainer.classList.add('active');
      }, 2000);
    }
  }
}
