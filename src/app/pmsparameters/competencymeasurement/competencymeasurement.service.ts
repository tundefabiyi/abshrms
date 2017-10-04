import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Injectable()
export class CompetencymeasurementService {
  public selectedTemplate;
  public selectedLineitem;
  private Url = "api/competencytemplates";
  private headers = new Headers({ "Content-Type": "application/json" });
  constructor(private http: Http) {}

  fetchTemplates(competencytype: any) {
    return this.http
      .get(this.Url + `?competencytype=${competencytype.description}`)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  } //fetchCompetencyTemplates

  create(template: any) {
    return this.http.post(this.Url, template).map((response: Response) => {
      console.log(response.json().data);
      return response.json().data;
    });
  }

  update(template: any) {
    return this.http.put(this.Url, template).map((response: Response) => {
      console.log(response.json());
      return response.json();
    });
  }
}
