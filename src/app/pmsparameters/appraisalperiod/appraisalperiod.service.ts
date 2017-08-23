import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppraisalPeriod } from '../appraisalperiod.model';

@Injectable()
export class AppraisalPeriodService {
    private Url = 'api/appraisalperiods'; 
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    
    getAppraisalPeriod(id: string): Promise<AppraisalPeriod> {
        const url = `${this.Url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as AppraisalPeriod)
            .catch(this.handleError);
    }
   

    update(appraisalPeriod: AppraisalPeriod): Promise<AppraisalPeriod> {
        const url = `${this.Url}/${appraisalPeriod.id}`;
        return this.http
            .put(url, JSON.stringify(appraisalPeriod), { headers: this.headers })
            .toPromise()
            .then(() => appraisalPeriod)
            .catch(this.handleError);
    }
    create(appraisalPeriod: AppraisalPeriod): Promise<AppraisalPeriod> {
        return this.http
            .post(this.Url, JSON.stringify(appraisalPeriod), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as AppraisalPeriod)
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
