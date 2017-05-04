import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Report } from './report';

@Injectable()
export class ReportService {
    private reportsUrl = 'api/reports';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getReports(): Promise<Report[]> {
        return this.http.get(this.reportsUrl)
            .toPromise()
            .then(response => response.json().data as Report[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getReport(id: number): Promise<Report> {
        const url = `${this.reportsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Report)
            .catch(this.handleError);
    }

    update(report: Report): Promise<Report> {
        const url = `${this.reportsUrl}/${report.id}`;
        return this.http
            .put(url, JSON.stringify(report), { headers: this.headers })
            .toPromise()
            .then(() => report)
            .catch(this.handleError);
    }
    
    create(id: number, name: string, status: number, severity: number, module: string, comment:string, title: string, date: number): Promise<Report> {
      return this.http
        .post(this.reportsUrl, JSON.stringify({name: name, title: title, comment: comment, module:module, severity:severity, status:status, id:id, date:date}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
  const url = `${this.reportsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}
