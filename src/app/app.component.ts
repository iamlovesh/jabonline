import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WindowRef } from "windows";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef
  ) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(this.windowRef.nativeWindow);
    }
  }
  title = 'jabonline';
  ngOnInit(): void {
    this.cookie();
  }
  cookie() {
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    const cookieRefuseButton = document.querySelector(".cookie-btn2");
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
