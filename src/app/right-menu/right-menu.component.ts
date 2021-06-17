import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor(private add: Address) { }
  assets = this.add.assets;
  ngOnInit(): void {
  }

}
