import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { webapibaseurl } from '../../app.model';


@Injectable()
export class CompetencyItemDetailSetupService {


    private Url = 'api/competencyitemdetails';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getlist() {
        return this.http.get(this.Url).map((response: Response) => response.json().data);
    }

    create(competencyitemdetail: any) {

        return this.http.post(this.Url, competencyitemdetail).map((response: Response) => response.json());
    }
    update(competencyitemdetail: any) {
       
        return this.http.post(this.Url, competencyitemdetail).map((response: Response) => response.json());
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}