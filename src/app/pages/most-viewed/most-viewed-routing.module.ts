import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostViewedComponent } from './most-viewed/most-viewed.component';

const routes: Routes = [{
  path:'',
  component: MostViewedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostViewedRoutingModule { }
