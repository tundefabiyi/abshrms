import { webapibaseurl } from "./../../app.model";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class CompetencymeasurementService {
  public selectedTemplate;
  public selectedLineitem;
  private Url = `${webapibaseurl}competencytemplate/`;
  private headers = new Headers({ "Content-Type": "application/json" });
  constructor(private http: Http) {}

  fetchCompetencyClassList() {
    var url = `${this.Url}getCompetencyClassList`;
    //var url = "api/competencytypes";
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());

      return response.json();
    });
  }

  fetchTemplates(competencytypeid: any) {
    var url = `${
      this.Url
    }getCompetencyTemplateList?competencyclassid=${competencytypeid}`;
    return this.http.get(url).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //fetchCompetencyTemplates

  getSingleTemplate(competencytype: any) {
    var url = "api/gettemplate";
    return this.http
      .get(url + `?competencytype=${competencytype}`)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  } //getSingleTemplate

  create(template: any) {
    let url = `${webapibaseurl}competencytemplate/createcompetencytemplate`;
    return this.http.post(url, template).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  }

  update(template: any) {
    let url = `${webapibaseurl}competencytemplate/updatecompetencytemplate`;
    return this.http.put(url, template).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  }

  updateSingleTemplate(data) {
    var url = "api/updatecompetencytemplate";
    return this.http.put(url, data).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //updateSingleTemplateLineitem

  createCompetencyLineItem(lineitem: any) {
    var url = this.Url + "createCompetencyTemplateLineItem";
    return this.http.post(url, lineitem).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //createCompetencyLineItem

  updateCompetencyLineItem(update: any) {
    var url = this.Url + "updateCompetencyLineItem";
    return this.http.post(url, update).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //updateCompetencyLineItem

  createCompetencyTemplateLineItemDetail(detail: any) {
    var url = this.Url + "createCompetencyTemplateLineItemDetail";
    return this.http.post(url, detail).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //createCompetencyTemplateLineItemDetail

  deleteCompetencyTemplateLineItemDetail(detailid) {
    var url = this.Url + "deleteCompetencyTemplateLineItemDetail";
    return this.http.post(url, detailid).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  } //deleteCompetencyTemplateLineItemDetail
}
