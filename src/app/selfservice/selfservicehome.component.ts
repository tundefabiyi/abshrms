import { AlertService } from "./../services/alert.service";
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
  loading: boolean = false;
  postdata: any = {};
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    public selfservice: SelfserviceService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Get User Details
    this.userdetails = JSON.parse(localStorage.getItem("currentUser"));

    /* this.userdetails.photo =
      "data:image/png;base64," + this.userdetails.imagedata;

    //Get Subordinates
    this.userdetails.subordinates = [];
    this.auth.getsubordinates(this.userdetails.staffid).subscribe(
      data => {
        console.log(data);
        this.userdetails.subordinates = JSON.parse(data.payload);
      },
      error => {}
    ); */
    this.loading = true;
    this.selfservice.getSelfserviceHome(this.userdetails.employeeid).subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.userdetails = JSON.parse(data.payload);
          this.userdetails.photo =
            "data:image/png;base64," + this.userdetails.imagedata;
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );
  } //end OnInit

  viewSubordinatePerformance(staff) {
    this.selfservice.selectedSubordinate = staff;
    this.router.navigate(["/selfservice/performanceresult"]);
  } //viewSubordinatePerformance

  setMyGoals() {
    //Set up goal settigng form and recieve goal setting form id
    this.loading = true;
    this.selfservice
      .startGoalsettingActionplan(this.userdetails.employeeid)
      .subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            this.selfservice.goalsettingformid = data.payload; //returns a string
            //Go to Goal Setting page
            this.router.navigate(["/selfservice/setgoals"]);
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
  } //setMyGoals

  handleAppraisal() {
    //Go to Self Appraisal Setting page
    this.router.navigate(["/selfservice/mycompetencyappraisal"]);
  } //handleAppraisal

  handleEvaluation() {
    //Go to Evaluation page
    this.router.navigate(["/selfservice/myevaluation"]);
  } //handleEvaluation

  handlePerfAppraisal() {
    //View Performance Appraisal
    this.router.navigate(["/selfservice/myperformanceappraisal"]);
  } //handlePerfAppraisal

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
