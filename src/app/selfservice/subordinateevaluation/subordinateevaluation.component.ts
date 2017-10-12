import { AlertService } from "./../../services/alert.service";
import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subordinateevaluation",
  templateUrl: "./subordinateevaluation.component.html",
  styleUrls: ["./subordinateevaluation.component.css"]
})
export class SubordinateevaluationComponent implements OnInit {
  user;
  appraisalsummary;
  subordinateStrength: string;
  subordinateImprovementAreas: string;
  loading: boolean = false;
  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loading = true;

    this.user = this.selfservice.selectedSubordinate;
    //Get Appraisal summary
    this.selfservice.getAppraisalSummary(this.user.employeeid).subscribe(
      data => {
        this.loading = false;
        this.appraisalsummary = JSON.parse(data.payload);
        console.log(this.appraisalsummary);
      },
      error => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  }

  save() {
    this.loading = true;
    const evaluationData = {};

    this.selfservice.saveJobholderEvaluation(evaluationData).subscribe(
      data => {
        this.subordinateStrength = "";
        this.subordinateImprovementAreas = "";
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  } //save
}
