import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private add: Address) { }
  assets = this.add.assets;
  ngOnInit(): void {
  }

}
