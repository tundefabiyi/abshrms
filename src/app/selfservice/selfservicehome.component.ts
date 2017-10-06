import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/autentication.service";
import { SelfserviceService } from "./selfservice.service";

@Component({
  moduleId: module.id.toString(),
  templateUrl: "selfservicehome.component.html"
})
export class SelfServiceHomeComponent implements OnInit {
  userdetails: any;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    public selfservice: SelfserviceService
  ) {}

  ngOnInit() {
    //Get User Details
    this.userdetails = JSON.parse(localStorage.getItem("currentUser"));

    this.userdetails.photo =
      "data:image/png;base64," + this.userdetails.imagedata;

    //Get Subordinates
    this.userdetails.subordinates = [];
    this.auth.getsubordinates(this.userdetails.staffid).subscribe(
      data => {
        console.log(data);
        this.userdetails.subordinates = JSON.parse(data.payload);
      },
      error => {}
    );
  } //end OnInit

  viewSubordinatePerformance(staff) {
    this.selfservice.selectedSubordinate = staff;
    this.router.navigate(["/selfservice/performanceresult"]);
  } //viewSubordinatePerformance

  setMyGoals() {
    //Go to Goal Setting page
    this.router.navigate(["/selfservice/setgoals"]);
  } //setMyGoals

  handleAppraisal() {
    //Go to Self Appraisal Setting page
    this.router.navigate(["/selfservice/manageappraisal"]);
  } //handleAppraisal

  handleEvaluation() {
    //Go to Evaluation page
    this.router.navigate(["/selfservice/myevaluation"]);
  } //handleEvaluation
}
