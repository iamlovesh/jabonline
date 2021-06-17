import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingArticlesComponent } from './trending-articles/trending-articles.component';

const routes: Routes = [{
  path:'',
  component: TrendingArticlesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingArticlesRoutingModule { }
