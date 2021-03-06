import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { webapibaseurl } from "../app.model";
import { AppraisalPeriod } from "./appraisalperiod.model";

@Injectable()
export class PMSParametersService {
  selectedFinalRatingTemplate;
  private headers = new Headers({ "Content-Type": "application/json" });
  constructor(private http: Http) {}

  getkpilist() {
    var url = `${webapibaseurl}pmsparameters/getkpilist`;
    //var url = "api/kpis";
    return this.http.get(url).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http
      .get("/api/users/" + id, this.jwt())
      .map((response: Response) => response.json());
  }

  createkpi(kpi: any) {
    var url = `${webapibaseurl}pmsparameters/createKPI`;
    //var url = "api/kpis";
    return this.http
      .post(url, kpi)
      .map((response: Response) => response.json());
  } //createkpi
  updatekpi(kpi: any) {
    var url = `${webapibaseurl}pmsparameters/updatekpi`;
    return this.http
      .post(url, kpi)
      .map((response: Response) => response.json());
  }

  getperformancecategories() {
    var url = `${webapibaseurl}pmsparameters/getperformancetypelist`;
    return this.http.get(url).map((response: Response) => response.json());
  } //getperformancecategories

  fetchCompetencyTypeList() {
    var url = `${webapibaseurl}pmsparameters/fetchCompetencyTypeList`;
    //var url = "api/competencytypes";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }
  fetchCompetencyItemList(competencytypeid: string) {
    var url = `${webapibaseurl}pmsparameters/fetchCompetencyItemList?competencytypeid=${competencytypeid}`;
    //var url = `api/competencyitems?competencytypeid=${competencytypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }

  fetchCompetencyItemDetails() {
    var url = `${webapibaseurl}pmsparameters/getCompetencyItemDetailList`;
    //var url = "api/competencyitemdetails";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //fetchCompetencyItemDetails

  createCompetencyItem(data) {
    var url = `${webapibaseurl}pmsparameters/createCompetencyItem`;
    //var url = "api/createcompetencyitem";
    var body = data;
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  }
  updateCompetecyitem(data) {
    var url = `${webapibaseurl}pmsparameters/updateCompetencyItem`;
    var body = data;
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  }

  submitCompetencyTemplate(templateid) {
    var url = `${webapibaseurl}pmsparameters/submitCompetencyTemplate?templateid=${templateid}`;
    //var url = "api/createcompetencyitem";
    var body = {};
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  } //submitCompetencyTemplate

  approveCompetencyTemplate(templateid) {
    var url = `${webapibaseurl}pmsparameters/approveCompetencyTemplate?templateid=${templateid}`;
    //var url = "api/createcompetencyitem";
    var body = {};
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  } //approveCompetencyTemplate

  returnCompetencyTemplate(templateid) {
    var url = `${webapibaseurl}pmsparameters/returnCompetencyTemplate?templateid=${templateid}`;
    //var url = "api/createcompetencyitem";
    var body = {};
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  } //returnCompetencyTemplate

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      let headers = new Headers({
        Authorization: "Bearer " + currentUser.token
      });
      return new RequestOptions({ headers: headers });
    }
  }

  getAppraisalPeriods(): Promise<AppraisalPeriod[]> {
    var Url = "api/appraisalperiods";
    return this.http
      .get(Url)
      .toPromise()
      .then(response => response.json().data as AppraisalPeriod[])
      .catch(this.handleError);
  }

  getProficiencyTypes() {
    var url = `${webapibaseurl}competencytemplate/getProficiencyLevelList`;
    return this.http.get(url).map((response: Response) => response.json());
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /* private getPerformanceRatings() {
    var url = "api/getperformanceratings";
    return this.http.get(url).map((response: Response) => response.json());
  } //getPerformanceRatings */

  savePerformanceRating(ratingdata) {
    var url = "api/saveperformancerating";
    return this.http
      .post(url, ratingdata)
      .map((response: Response) => response.json());
  } //savePerformanceRating

  saveCompetencyRating(ratingdata) {
    var url = "api/savecompetencyrating";
    return this.http
      .post(url, ratingdata)
      .map((response: Response) => response.json());
  } //saveCompetencyRating

  fetchAppraisalPeriods() {
    var url = "api/getappraisalperiods";
    return this.http.get(url).map((response: Response) => response.json());
  } //fetchAppraisalPeriods

  setCurrentAppraisalPeriod(selectedPeriod) {
    const url = "api/setcurrentappraisalperiod";
    return this.http.put(url, selectedPeriod).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //setCurrentAppraisalPeriod

  getFinalRatingTemplates() {
    var url = "api/getfinalappraisaltemplates";
    return this.http.get(url).map((response: Response) => response.json());
  } //getFinalRatingTemplates

  getApplicationLevels() {
    var url = "api/measurementtemplateapplicationlevel";
    return this.http.get(url).map((response: Response) => response.json());
  } //getApplicationLevels

  //Gets either job function or job position id based on application level selected
  getApplicationJobLevels(applicationlevel) {
    var url = `api/getapplicationjoblevels?applicationlevel=${applicationlevel}`;
    return this.http.get(url).map((response: Response) => response.json());
  } //getApplicationJobLevel

  saveFinalRatingTemplate(details: any) {
    var url = "api/savefinalratingtemplate";
    return this.http
      .post(url, details)
      .map((response: Response) => response.json());
  } //saveFinalRatingTemplate
}
