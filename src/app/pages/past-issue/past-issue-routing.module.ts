import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastIssueComponent } from './past-issue.component';

const routes: Routes = [{
  path:'',
  component: PastIssueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastIssueRoutingModule { }
