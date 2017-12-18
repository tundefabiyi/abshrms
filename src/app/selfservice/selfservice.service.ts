import { webapibaseurl } from "./../app.model";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SelfserviceService {
  selectedSubordinate;
  goalsettingformid;
  actionsUrl = `${webapibaseurl}api/selfservice/`;
  constructor(private http: Http) {}

  getSelfserviceHome(employeeid: any) {
    var url = this.actionsUrl + `getSelfServiceHome?employeeid=${employeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getSelfserviceHome

  getSubordinateSelfServiceHome(subordinateemployeeid: any) {
    var url =
      this.actionsUrl +
      `getSubordinateSelfServiceHome?subordinateemployeeid=${subordinateemployeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getSubordinateSelfServiceHome

  //Action Plans/Goals

  startGoalsettingActionplan(employeeid) {
    var url = `${this.actionsUrl}startGoalsettingActionplan`;
    return this.http
      .post(url, { employeeid: employeeid })
      .map((response: Response) => response.json());
  } //startGoalsettingActionplan

  getCompetencyClassList() {
    var url = `${this.actionsUrl}getCompetencyClassList`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCompetencyClassList

  getCompetencyItemList(competencytypeid) {
    var url = `${
      this.actionsUrl
    }getCompetencyItemList?competencytypeid=${competencytypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCompetencyItemList

  getCompetencyItemDetail(goalsettingformid) {
    var url = `${
      this.actionsUrl
    }getCompetencyItemDetail?goalsettingformid=${goalsettingformid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCompetencyItemDetail

  getCompetencyClassActionPlanDetails(competencytypeid) {
    var url = `${
      this.actionsUrl
    }getCompetencyClassActionPlanDetails?competencytypeid=${competencytypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCompetencyClassActionPlanDetails

  saveGoalSettingActionPlan(actionplan) {
    var url = `${this.actionsUrl}saveGoalSettingActionPlan`;
    return this.http
      .post(url, actionplan)
      .map((response: Response) => response.json());
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
      return response.json();
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
  getJobholderEvaluation(employeeid) {
    const rootUrl = "api/getjobholderevaluation";

    var url = rootUrl + `?jobholderemployeeid=${employeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getStaffEvaluationMaster

  saveJobholderEvaluation(assesmentdata) {
    var url = "api/savejobholderevaluation";
    return this.http
      .post(url, assesmentdata)
      .map((response: Response) => response.json());
  } //saveEvaluationDetailStrength

  getCompetencyAppraisal(details) {
    const url = "api/getcompetencyappraisal";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getCompetencyAppraisal

  getJobHolderPerformanceAppraisal(employeeid) {
    const url = `api/getperformanceappraisal?employeeid=${employeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getJobHolderPerformanceAppraisal

  getSubordinatePerformanceAppraisal(subordinateid) {
    const url = `api/getsubordinateperformanceappraisal?employeeid=${subordinateid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getSubordinatePerformanceAppraisal

  savePerformanceRatingForSubordinate(data) {
    var url = "api/savesubordinateperformanceappraisal";
    return this.http
      .post(url, data)
      .map((response: Response) => response.json());
  } //savePerformanceRatingForSubordinate

  getCompetencyRatingScale() {
    const url = `api/getcompetencyratingscale`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getPerformanceRatingScale

  getPerformanceRatingScale() {
    const url = `api/getperformanceratingscale`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getPerformanceRatingScale

  getAppraisalSummary(employeeid) {
    const url = `api/getappraisalsummary?employeeid=${employeeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }
}
