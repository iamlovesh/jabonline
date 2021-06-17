import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentIssueComponent } from './current-issue.component';

const routes: Routes = [{
  path:'',
  component: CurrentIssueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentIssueRoutingModule { }
