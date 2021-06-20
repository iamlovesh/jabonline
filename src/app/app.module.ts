import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { IndexComponent } from './index/index.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiServiceService } from "./api-service.service";
import { HttpClientModule } from "@angular/common/http";
import { Address } from "../app/address";
import { PagesComponent } from './pages/pages.component';
import { MaterialModule } from './material.module';
import { ContentCarouselComponent, tocDialog } from './content-carousel/content-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExportPipeModule } from './export-pipe.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PoliciesComponent } from './pages/policies/policies.component';
import { AbstractComponent } from './pages/abstract/abstract.component';
import { AbstractHeaderComponent } from './pages/abstract/abstract-header/abstract-header.component';
import { AuthorArticleComponent, DialogImages } from './pages/author-article/author-article.component';
import { FullHtmlComponent, InnerHrefToFragment } from './pages/abstract/full-html/full-html.component';
import { ArticleMetricsComponent } from './pages/abstract/article-metrics/article-metrics.component';
import { LeftMenuComponent } from './pages/left-menu/left-menu.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AuthorsGuidelinesComponent } from './pages/authors-guidelines/authors-guidelines.component';
import { EditorialBoardComponent } from './pages/editorial-board/editorial-board.component';
import { SubmitManuscriptComponent } from './pages/submit-manuscript/submit-manuscript.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ArticleCommentComponent } from './pages/abstract/article-comment/article-comment.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { GuidelinesToPeerReviewersComponent } from './pages/guidelines-to-peer-reviewers/guidelines-to-peer-reviewers.component';
import { PublicationEthicsComponent } from './pages/publication-ethics/publication-ethics.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IndexComponent,
    PagesComponent,
    tocDialog,
    ContentCarouselComponent,
    PoliciesComponent,
    AbstractComponent,
    AbstractHeaderComponent,
    AuthorArticleComponent,
    DialogImages,
    FullHtmlComponent,
    ArticleMetricsComponent,
    LeftMenuComponent,
    AboutusComponent,
    AuthorsGuidelinesComponent,
    EditorialBoardComponent,
    SubmitManuscriptComponent,
    ContactUsComponent,
    ArticleCommentComponent,
    GuidelinesToPeerReviewersComponent,
    PublicationEthicsComponent,
    InnerHrefToFragment,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
    MatFormFieldModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ExportPipeModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [
    { provide: ApiServiceService },
    { provide: Address },
    { provide: Title },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
