import { webapibaseurl } from "./../../app.model";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class PerformanceService {
  templatesUrl: string = "api/performancemeasurementtemplates";
  selectedTemplate: any;
  performancecategories: any[];
  constructor(private http: Http) {}

  getPerformanceTemplateList(performancetypeid) {
    var url = `${webapibaseurl}pmsparameters/getPerformanceTemplateList?performancetypeid=${performancetypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getPerformanceTemplateList

  createPerformanceTemplate(template: any) {
    var url = `${webapibaseurl}pmsparameters/createperformancetemplate`;
    return this.http
      .post(url, template)
      .map((response: Response) => response.json());
  } //saveTemplate

  updatePerformanceTemplate(update: any) {
    var url = `${webapibaseurl}pmsparameters/updateperformancetemplate`;
    return this.http
      .post(this.templatesUrl, update)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  } //updatePerformanceTemplate

  createPerformanceTemplateLineItem(lineitem: any) {
    var url = `${webapibaseurl}pmsparameters/createPerformanceTemplateLineItem`;
    return this.http
      .post(this.templatesUrl, lineitem)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  } //createPerformanceTemplateLineItem

  gettemplate(performancetypeid) {
    var rootUrl = "api/getcurrentperformancetemplate";
    var url = rootUrl + `?performancetypeid=${performancetypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //gettemplate

  saveSubordinateCommitment(goal) {
    return this.http.put(this.templatesUrl, goal).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //saveSubordinateCommitment
}
