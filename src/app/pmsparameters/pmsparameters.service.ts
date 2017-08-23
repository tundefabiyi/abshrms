import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { webapibaseurl } from '../app.model';
import { AppraisalPeriod } from './appraisalperiod.model';


@Injectable()
export class PMSParametersService {
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getkpilist() {
        var url = `${webapibaseurl}pmsparameters/getkpilist?searchtext=`;
        return this.http.get(url).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    createkpi(kpi: any) {
        var url = `${webapibaseurl}pmsparameters/createkpi`;
        return this.http.post(url, kpi).map((response: Response) => response.json());
    }
    updatekpi(kpi: any) {
        var url = `${webapibaseurl}pmsparameters/updatekpi`;
        return this.http.post(url, kpi).map((response: Response) => response.json());
    }

    fetchCompetencyTypeList() {
        var url = `${webapibaseurl}pmsparameters/fetchCompetencyTypeList`;
        return this.http.get(url).map((response: Response) => response.json());
    }
    fetchCompetencyItemList(competencytypeid: string) {
        var url = `${webapibaseurl}pmsparameters/fetchCompetencyItemList?competencytypeid=${competencytypeid}`;
        return this.http.get(url).map((response: Response) => response.json());
    }
    createCompetencyItem(competencytypeId: string, code: string, description: string, percentage: string) {
        var url = `${webapibaseurl}pmsparameters/createCompetencyItem`;
        var body = { competencytypeId, code, description, percentage };
        return this.http.post(url, body).map((response: Response) => response.json());
    }
    updateCompetecyitem(id: string, description: string, percentage: string) {
        var url = `${webapibaseurl}pmsparameters/updateCompetecyitem`;
        var body = { id, description, percentage };
        return this.http.post(url, body).map((response: Response) => response.json());
    }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    getAppraisalPeriods(): Promise<AppraisalPeriod[]> {
        var Url = 'api/appraisalperiods';
        return this.http.get(Url)
            .toPromise()
            .then(response => response.json().data as AppraisalPeriod[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}