import { Router } from "@angular/router";
import { AlertService } from "./../../services/alert.service";
import { HrService } from "./../hr.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hrappraisallist",
  templateUrl: "./hrappraisallist.component.html",
  styleUrls: ["./hrappraisallist.component.css"]
})
export class HrappraisallistComponent implements OnInit {
  loading: boolean = false;
  appraisals: any[] = [];
  constructor(
    private hrservice: HrService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    //Get all current appraisals
    this.loading = true;
    this.hrservice.getCurrentAppraisals().subscribe(
      data => {
        this.loading = false;
        this.appraisals = JSON.parse(data.payload);
      },
      error => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  }

  view(appraisal) {
    this.hrservice.selectedAppraisal = appraisal;
    this.router.navigate(["hr/appraisaldetails"]);
  } //view
}
