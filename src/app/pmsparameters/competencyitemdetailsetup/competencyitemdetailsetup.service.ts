import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { webapibaseurl } from "../../app.model";

@Injectable()
export class CompetencyItemDetailSetupService {
  private Url = `${webapibaseurl}pmsparameters/`;
  private headers = new Headers({ "Content-Type": "application/json" });
  constructor(private http: Http) {}

  getlist() {
    var url = `${this.Url}fetchCompetencyItemDetailList`;

    return this.http.get(url).map((response: Response) => response.json());
  }

  create(competencyitemdetail: any) {
    let url = `${this.Url}createCompetencyItemDetail`;
    return this.http
      .post(url, competencyitemdetail)
      .map((response: Response) => response.json());
  }
  update(competencyitemdetail: any) {
    let url = `${this.Url}updateCompetencyItemDetail`;
    return this.http
      .post(url, competencyitemdetail)
      .map((response: Response) => response.json());
  }
  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
