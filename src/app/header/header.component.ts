import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Address} from '../address';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: any;
  constructor(private add: Address, private router: Router) { }
  assets = this.add.assets;
  
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  search() {
    this.router.navigate(["/search"], { queryParams: this.searchForm.value });
  }


  ngOnInit(): void {
    this.getRandomInt();
  }
  getRandomInt() {
    this.users = Math.floor(Math.random() * Math.floor(30))+1;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px 0px";
        document.getElementById("navbar").style.backgroundColor = "rgb(197 255 204)";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("dropdown").style.marginTop = "0.5rem";
      } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("navbar").style.backgroundColor = "#fff";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("dropdown").style.marginTop = "1.75rem";
      }
  }

}
