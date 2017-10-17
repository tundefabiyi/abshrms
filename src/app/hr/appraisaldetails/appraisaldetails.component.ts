import { Router } from "@angular/router";
import { HrService } from "./../hr.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-appraisaldetails",
  templateUrl: "./appraisaldetails.component.html",
  styleUrls: ["./appraisaldetails.component.css"]
})
export class AppraisaldetailsComponent implements OnInit {
  currentAppraisal;
  constructor(private hrservice: HrService, private router: Router) {}

  ngOnInit() {
    this.currentAppraisal = this.hrservice.selectedAppraisal;
  }

  resolveCompetency() {
    this.router.navigate(["hr/resolvecompetency"]);
  }

  resolvePerformance() {
    this.router.navigate(["hr/resolveperformance"]);
  } //resolvePerformance
}
