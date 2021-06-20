import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }
  title = 'jabonline';
  ngOnInit(): void {
    this.cookie();
  }
  cookie() {
    if (isPlatformBrowser(this.platformId)) {
      const cookieContainer = this.document.querySelector(".cookie-container");
      const cookieButton = this.document.querySelector(".cookie-btn");
      const cookieRefuseButton = this.document.querySelector(".cookie-btn2");
      cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBannerDisplayed", "true");
      });
      cookieRefuseButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
      })
      setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed"))
          cookieContainer.classList.add("active");
      }, 2000);
    }
  }
}
