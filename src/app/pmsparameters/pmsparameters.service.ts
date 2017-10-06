import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { webapibaseurl } from "../app.model";
import { AppraisalPeriod } from "./appraisalperiod.model";

@Injectable()
export class PMSParametersService {
  private headers = new Headers({ "Content-Type": "application/json" });
  constructor(private http: Http) {}

  getkpilist() {
    //var url = `${webapibaseurl}pmsparameters/getkpilist?searchtext=`;
    var url = "api/kpis";
    return this.http.get(url).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http
      .get("/api/users/" + id, this.jwt())
      .map((response: Response) => response.json());
  }

  createkpi(kpi: any) {
    //var url = `${webapibaseurl}pmsparameters/createkpi`;
    var url = "api/kpis";
    return this.http
      .post(url, kpi)
      .map((response: Response) => response.json());
  }
  updatekpi(kpi: any) {
    var url = `${webapibaseurl}pmsparameters/updatekpi`;
    return this.http
      .post(url, kpi)
      .map((response: Response) => response.json());
  }

  getperformancecategories() {
    var url = "api/performancecategories";
    return this.http.get(url).map((response: Response) => response.json());
  } //getperformancecategories

  fetchCompetencyTypeList() {
    //var url = `${webapibaseurl}pmsparameters/fetchCompetencyTypeList`;
    var url = "api/competencytypes";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }
  fetchCompetencyItemList(competencytypeid: string) {
    //var url = `${webapibaseurl}pmsparameters/fetchCompetencyItemList?competencytypeid=${competencytypeid}`;
    var url = `api/competencyitems?competencytypeid=${competencytypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }

  fetchCompetencyItemDetails() {
    //var url = `${webapibaseurl}pmsparameters/fetchCompetencyTypeList`;
    var url = "api/competencyitemdetails";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //fetchCompetencyItemDetails

  createCompetencyItem(
    competencytypeId: string,
    code: string,
    description: string,
    percentage: string
  ) {
    //var url = `${webapibaseurl}pmsparameters/createCompetencyItem`;
    var url = "api/competencyitems";
    var body = { competencytypeId, code, description, percentage };
    return this.http
      .post(url, body)
      .map((response: Response) => response.json().data);
  }
  updateCompetecyitem(id: string, description: string, percentage: string) {
    var url = `${webapibaseurl}pmsparameters/updateCompetecyitem`;
    var body = { id, description, percentage };
    return this.http
      .post(url, body)
      .map((response: Response) => response.json());
  }
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
    var url = "api/proficiencytypes";
    return this.http.get(url).map((response: Response) => response.json());
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
