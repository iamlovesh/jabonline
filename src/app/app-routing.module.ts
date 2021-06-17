import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AbstractComponent } from './pages/abstract/abstract.component';
import { FullHtmlComponent } from './pages/abstract/full-html/full-html.component';
import { AuthorArticleComponent } from './pages/author-article/author-article.component';
import { AuthorsGuidelinesComponent } from './pages/authors-guidelines/authors-guidelines.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EditorialBoardComponent } from './pages/editorial-board/editorial-board.component';
import { GuidelinesToPeerReviewersComponent } from './pages/guidelines-to-peer-reviewers/guidelines-to-peer-reviewers.component';
import { PagesComponent } from './pages/pages.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { PublicationEthicsComponent } from './pages/publication-ethics/publication-ethics.component';
import { SubmitManuscriptComponent } from './pages/submit-manuscript/submit-manuscript.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: BodyComponent}, 
  { path: '', component: PagesComponent, 
    children: [
      { path: 'current', loadChildren: () => import('../app/pages/current-issue/current-issue.module').then(m => m.CurrentIssueModule) },
      { path: 'authorsguideline', component: AuthorsGuidelinesComponent},
      { path: 'editorialboard', component: EditorialBoardComponent},
      { path: 'archives', loadChildren: () => import('../app/pages/archives/archives.module').then(m => m.ArchivesModule) },
      { path: 'past/:id', loadChildren: () => import('../app/pages/past-issue/past-issue.module').then(m => m.PastIssueModule) },
      { path: 'onlinefirst', loadChildren: () => import('../app/pages/online-first/online-first.module').then(m => m.OnlineFirstModule) },
      { path: 'mostviewed', loadChildren: () => import('../app/pages/most-viewed/most-viewed.module').then(m => m.MostViewedModule) },
      { path: 'trendingArticles', loadChildren: () => import('../app/pages/trending-articles/trending-articles.module').then(m => m.TrendingArticlesModule) },
      { path: 'policies/:id', component: PoliciesComponent },
      { path: 'abstract.php', component: AbstractComponent },
      { path: 'authorArticle', component: AuthorArticleComponent },
      { path: 'fullText/:id', component: FullHtmlComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'submitManuscript', component: SubmitManuscriptComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'terms&conditions', component: TermsConditionsComponent },
      { path: 'guidelinesPearReviewers', component: GuidelinesToPeerReviewersComponent },
      { path: 'publicationEthics', component: PublicationEthicsComponent },
      { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
      { path: 'keywords', loadChildren: () => import('./pages/keywords/keywords.module').then(m => m.KeywordsModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' }

    ] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // relativeLinkResolution: 'legacy' 
    scrollPositionRestoration: 'enabled',
    // useHash: true,
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
