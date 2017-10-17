import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HrService {
  selectedAppraisal;
  actionsUrl = "api/goalsettingdetailactionplan";
  constructor(private http: Http) {}

  getCurrentAppraisals() {
    var url = "api/getcurrentappraisals";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCurrentAppraisals

  //AppraisalCompetencyRating
  saveAppraisalCompetencyRating(detail) {
    var url = "api/appraisaldetailcompetencyrating";
    return this.http.post(url, detail).map((response: Response) => {
      return response.json();
    });
  } //saveAppraisalCompetencyRating
}
