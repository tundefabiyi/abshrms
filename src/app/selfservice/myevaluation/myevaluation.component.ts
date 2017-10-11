import { AlertService } from "./../../services/alert.service";
import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-myevaluation",
  templateUrl: "./myevaluation.component.html",
  styleUrls: ["./myevaluation.component.css"]
})
export class MyevaluationComponent implements OnInit {
  evaluation;
  description: string;
  selfassessment;
  loading;
  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Get the Job holder's evaluation master
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.selfservice.getJobholderEvaluation(user.employeeid).subscribe(data => {
      this.evaluation = JSON.parse(data.payload);
      console.log(this.evaluation);
    });
  }

  save() {
    this.loading = true;
    const assessment = {
      evaluationmasterid: this.evaluation.id,
      description: this.description
    };

    this.selfservice.saveJobholderEvaluation(assessment).subscribe(
      data => {
        this.evaluation = JSON.parse(data.payload);
        console.log(this.evaluation);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //save
}
