import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class PerformanceService {
  templatesUrl: string = "api/performancemeasurementtemplates";
  selectedTemplate: any;
  performancecategories: any[];
  constructor(private http: Http) {}

  gettemplates(performancetypeid) {
    var url = this.templatesUrl + `?performancetypeid=${performancetypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  } //getperformancetemplates

  saveTemplate(template: any) {
    return this.http
      .post(this.templatesUrl, template)
      .map((response: Response) => response.json());
  } //saveTemplate

  updateTemplate(update: any) {
    return this.http
      .put(this.templatesUrl, update)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  } //updatePerformanceTemplate

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
