import { AlertService } from "./../../services/alert.service";
import { PMSParametersService } from "./../pmsparameters.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-setappraisalperiod",
  templateUrl: "./setappraisalperiod.component.html",
  styleUrls: ["./setappraisalperiod.component.css"]
})
export class SetappraisalperiodComponent implements OnInit {
  loading: boolean = false;
  appraisalperiods: any[] = [];
  selectedAppraisalPeriod;
  constructor(
    private pmsParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.pmsParametersService.fetchAppraisalPeriods().subscribe(
      data => {
        this.loading = false;
        this.appraisalperiods = JSON.parse(data.payload);
        console.log(this.appraisalperiods);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  setCurrentAppraisalPeriod(selectedPeriod) {
    this.loading = true;
    this.pmsParametersService
      .setCurrentAppraisalPeriod(selectedPeriod)
      .subscribe(
        data => {
          this.loading = false;
          this.appraisalperiods = JSON.parse(data.payload);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
}
