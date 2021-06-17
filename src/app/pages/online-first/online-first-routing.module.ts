import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineFirstComponent } from './online-first/online-first.component';

const routes: Routes = [{
  path:'',
  component: OnlineFirstComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFirstRoutingModule { }
