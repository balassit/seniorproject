import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Report } from './report';

@Injectable()
export class ReportService {
    private reportsUrl = 'http://127.0.0.1:8000/dashboard/api/reports/';  // URL to web api

    constructor(private http: Http) { }

    getReports(): Observable<Report[]> {
        return this.http.get(this.reportsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getReport(id: number): Observable<Report> {
        const url = `${this.reportsUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(report: Report): Observable<Report> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.reportsUrl}/${report.id}`;
        return this.http.put(url, JSON.stringify(report), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(title: string, module: string, severity: number): Observable<Report> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.reportsUrl, JSON.stringify([{module: module, severity: severity, title: title}]), options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
      const url = `${this.reportsUrl}/${id}`;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.delete(url, options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

}
