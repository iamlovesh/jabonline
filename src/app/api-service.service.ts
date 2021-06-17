import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../app/address';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient, private add: Address) { }

  public getCurrentIssueTitles():Observable<any> {
    return this.http.get<any>(this.add.Add + 'current.php?getCurrentIssueTitle');
  }

  public currentIssueArticles():Observable<any> {
    return this.http.get<any>(this.add.Add + 'current.php?currentIssueArticle');
  }

  public currentIssueArticlesSubject(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'current.php?currentIssueArticleSubject');
  }

  public currentIssueArticleDetails(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'current.php?currentIssueArticleDetails');
  }

  public showArchivess():Observable<any> {
    return this.http.get<any>(this.add.Add + 'past_issue.php?showArchives');
  }

  public showArchivessYear(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'past_issue.php?showArchivesYear');
  }

  public onlinefirstArticles():Observable<any> {
    return this.http.get<any>(this.add.Add + 'online_first.php?onlinefirstArticle');
  }

  public onlinefirstArticleSubject(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'online_first.php?onlinefirstArticleSubject');
  }
  
  public onlinefirstArticleDetails(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'online_first.php?onlinefirstArticleDetails');
  }

  public arcIssueArticleSubject(id: any):Observable<any> {
    return this.http.get<any>(this.add.Add + `past-articles.php?arcIssueArticleSubject&issueid=${id}`);
  }

  public arcIssueArticle(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `past-articles.php?arcIssueArticle&issueid=${id}`);
  }

  public arcIssueArticleDetails(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `past-articles.php?arcIssueArticleDetails&issueid=${id}`);
  }

  public subscribeTOC(data: any, name: any):Observable<any> {

    if(name != '') {
      return this.http.post<any>(this.add.Add + 'subscriber.php?checked',data);
    } else {
      return this.http.post<any>(this.add.Add + 'subscriber.php?subscribe', data);
    }
  }

  public abstractHeader(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?abstractHeader&article_id=${id}`);
  }

  public abstractMeta(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?abstractMeta&article_id=${id}`);
  }

  public getAbstractDatavalue(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?getAbstractDatavalue&id=${id}`);
  }

  public getArticleMetrics(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?getArticleMetrics&article_id=${id}`);
  }

  public getTotalMetrics(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?getTotalMetrics&article_id=${id}`);
  }

  public countView(_id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?updateCountView&countview_id=${_id}`);
  }

  public countDownload(_id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?updateCountDownload&countdownload_id=${_id}`);
  }

  public similarArticle(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?similarArticle&id=${id}`);
  }


  public relatedSearch(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `abstract-header.php?relatedSearch&id=${id}`);
  }

  public authorArticles(data: any): Observable<any> {
    return this.http.post<any>(this.add.Add + 'author_article.php?authorArticle', data);
  }

  public authorAffiliation(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `author_article.php?authorAffiliation&id=${id}`);
  }

  public submitManuscript(): Observable<any> {
    return this.http.get<any>(this.add.Add + `submit-manuscript.php`);
  }

  public authorsGuidelines(): Observable<any> {
    return this.http.get<any>(this.add.Add + `authors-guidelines.php`);
  }

  public termsConditions(): Observable<any> {
    return this.http.get<any>(this.add.Add + `terms-conditions.php`);
  }

  public editorialBoard(): Observable<any> {
    return this.http.get<any>(this.add.Add + `editorial-board.php`);
  }

  public aboutUs(): Observable<any> {
    return this.http.get<any>(this.add.Add + `about_us.php`);
  }

  public commentArticle(data: any,id: any): Observable<any> {
    return this.http.post<any>(this.add.Add + `comment_article.php?commentArticle&id=${id}`, data);
  }

  public commentArticleFetch(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `comment_article.php?commentArticleFetch&id=${id}`);
  }

  public getMostViewArticleApi(): Observable<any> {
    return this.http.get<any>(this.add.Add + `most_viewed_api.php?getMostViewArticleApi`);
  }

  public getMostViewedArticleApi(): Observable<any> {
    return this.http.get<any>(this.add.Add + `most_viewed_api.php?getMostViewedArticleApi`);
  }


  public getTrendingArticlesArticleApi(): Observable<any> {
    return this.http.get<any>(this.add.Add + `trending_articles.php?getTrending_articlesApi`);
  }

  public getTrending_articles(): Observable<any> {
    return this.http.get<any>(this.add.Add + `trending_articles.php?getTrending_articles`);
  }

  public contactForm(data: any): Observable<any> {
    return this.http.post<any>(this.add.Add + 'contactus.php?contactForm', data);
  }

  public newsAnnouncements(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'home.php?newsAnnouncements');
  }

  public journamMatrix(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'metrics.php');
  }

  public getPublicationEthics(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'getPublicationEthics.php');
  }
  public getGuidelinesPeerReviewers(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'getGuidelinesPeerReviewers.php');
  }
  public getPolicies(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'getPolicies.php?getPolicies');
  }

  public getPoliciesById(id: any): Observable<any> {
    return this.http.get<any>(this.add.Add + `getPolicies.php?getPoliciesById&policies_id=${id}`);
  }

  public getEditorsChoice(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'getEditorsChoice.php?getEditorsChoice');
  }

  public searchArticle(data: any): Observable<any> {
    return this.http.post<any>(this.add.Add + 'search.php', data);
  }

  public searchKeywords(data: any): Observable<any> {
    return this.http.post<any>(this.add.Add + 'keywords.php', data);
  }

  public contactAdd(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'contactus.php?contact');
  }

  public getStatistics(): Observable<any> {
    return this.http.get<any>(this.add.Add + 'statistics.php');
  }
}