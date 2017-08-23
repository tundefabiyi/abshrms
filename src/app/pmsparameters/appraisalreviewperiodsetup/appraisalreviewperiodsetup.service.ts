import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppraisalReviewPeriod } from './appraisalreviewperiodsetup.model';

@Injectable()
export class AppraisalReviewPeriodService {
    private Url = 'api/appraisalReviewPeriod'; 
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getAppraisalReviewPeriods(): Promise<AppraisalReviewPeriod[]> {
        return this.http.get(this.Url)
            .toPromise()
            .then(response => response.json().data as AppraisalReviewPeriod[])
            .catch(this.handleError);
    }
    getAppraisalReviewPeriodList(appraisalid: string): Promise<AppraisalReviewPeriod[]> {
        const url = `${this.Url}/?appraisalperiodid=${appraisalid}`;
        return this.http.get(this.Url)
            .toPromise()
            .then(response => response.json().data as AppraisalReviewPeriod[])
            .catch(this.handleError);
    }
    getAppraisalReviewPeriod(id: string): Promise<AppraisalReviewPeriod> {
        const url = `${this.Url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as AppraisalReviewPeriod)
            .catch(this.handleError);
    }
   

    update(appraisalReviewPeriod: AppraisalReviewPeriod): Promise<AppraisalReviewPeriod> {
        const url = `${this.Url}/${appraisalReviewPeriod.id}`;
        return this.http
            .put(url, JSON.stringify(appraisalReviewPeriod), { headers: this.headers })
            .toPromise()
            .then(() => appraisalReviewPeriod)
            .catch(this.handleError);
    }
    create(appraisalReviewPeriod: AppraisalReviewPeriod): Promise<AppraisalReviewPeriod> {
        return this.http
            .post(this.Url, JSON.stringify(appraisalReviewPeriod), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as AppraisalReviewPeriod)
            .catch(this.handleError);
    }
    delete(id: string): Promise<void> {
        const url = `${this.Url}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
 
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
