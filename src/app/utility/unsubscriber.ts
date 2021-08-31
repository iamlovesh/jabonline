import { Component } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  template: ''
})
export class Unsubscriber {
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}