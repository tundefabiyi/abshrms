import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SelfserviceService {
  selectedSubordinate;
  actionsUrl = "api/goalsettingdetailactionplan";
  constructor(private http: Http) {}

  //Action Plans/Goals

  saveGoalsettingDetailActionplan(actionplan) {
    return this.http
      .post(this.actionsUrl, actionplan)
      .map((response: Response) => response.json().data);
  }

  updateGoalsettingDetailActionplan(update: any) {
    return this.http.put(this.actionsUrl, update).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //updatePerformanceTemplate

  getActionPlans(templateid) {
    var url = this.actionsUrl + `?competencytemplateid=${templateid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json().data;
    });
  } //getActionPlans

  //AppraisalCompetencyRating
  saveAppraisalCompetencyRating(detail) {
    var url = "api/appraisaldetailcompetencyrating";
    return this.http.post(url, detail).map((response: Response) => {
      return response.json().data;
    });
  } //saveAppraisalCompetencyRating

  updateAppraisalDetailCompetencyRating(update: any) {
    return this.http.put(this.actionsUrl, update).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //updatePerformanceTemplate

  getAppraisalDetailsCompetencyRatings(templateid) {
    const rootUrl = "api/appraisaldetailcompetencyrating";

    var url = rootUrl + `?competencymeasurementtemplateid=${templateid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json().data;
    });
  } //getActionPlans

  //Evaluation
  getJobholderEvaluationMaster(employeeid) {
    const rootUrl = "api/evaluationmaster";

    var url = rootUrl + `?jobholderemployeeid=${employeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json().data;
    });
  } //getStaffEvaluationMaster

  saveEvaluationDetailStrength(strength) {
    var url = "api/evaluationdetailstrength";
    return this.http
      .post(url, strength)
      .map((response: Response) => response.json().data);
  } //saveEvaluationDetailStrength
}
