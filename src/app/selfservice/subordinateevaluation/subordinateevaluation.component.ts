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
  constructor(private selfservice: SelfserviceService) {}

  ngOnInit() {
    this.user = this.selfservice.selectedSubordinate;
    //Get Appraisal summary
    this.selfservice.getAppraisalSummary(this.user.employeeid).subscribe(
      data => {
        this.appraisalsummary = JSON.parse(data.payload);
        console.log(this.appraisalsummary);
      },
      error => {}
    );
  }
}
