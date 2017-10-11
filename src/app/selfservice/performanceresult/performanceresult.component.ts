import { Component, OnInit } from "@angular/core";
import { SelfserviceService } from "../selfservice.service";
import { AuthenticationService } from "../../services/autentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-performanceresult",
  templateUrl: "./performanceresult.component.html",
  styleUrls: ["./performanceresult.component.css"]
})
export class PerformanceresultComponent implements OnInit {
  user;
  constructor(
    private router: Router,
    public selfservice: SelfserviceService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.user = this.selfservice.selectedSubordinate;
    this.user.photo = "data:image/png;base64," + this.user.imagedata;

    this.user.subordinates = [];
    /*this.auth.getsubordinates(this.user.staffid).subscribe(
      data => {
        console.log(data);
        this.user.subordinates = data;
      },
      error => {}
    );*/
  }

  setSubordinateGoal(user) {
    this.selfservice.selectedSubordinate = user;
    console.log(user);

    this.router.navigate(["/selfservice/goalsetting"]);
  } //setSubordinateGoal

  handleAppraisal() {
    this.router.navigate(["/selfservice/subordinatecompetencyappraisal"]);
  } //handleAppraisal

  handleEvaluation() {
    this.router.navigate(["/selfservice/subordinateevaluation"]);
  } //handleEvaluation

  handlePerfAppraisal() {
    this.router.navigate(["/selfservice/subordinateperformanceappraisal"]);
  } //handlePerfAppraisal
}
