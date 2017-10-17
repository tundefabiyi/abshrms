import { HrService } from "./../hr.service";
import { SelfserviceService } from "./../../selfservice/selfservice.service";
import { PMSParametersService } from "./../../pmsparameters/pmsparameters.service";
import { AlertService } from "./../../services/alert.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resolveperformance",
  templateUrl: "./resolveperformance.component.html",
  styleUrls: ["./resolveperformance.component.css"]
})
export class ResolveperformanceComponent implements OnInit {
  performanceData;
  performancecategories: any[] = [];
  loading: boolean = false;
  selectedPerformanceCategory;
  performanceratingscale;
  selectedLineItem;
  selectedRating;
  supervisorComment;
  constructor(
    private selfservice: SelfserviceService,
    private hrservice: HrService,
    private alertService: AlertService,
    private pmsservice: PMSParametersService
  ) {}

  ngOnInit() {
    this.loading = true;

    //Get Performance Categories
    this.pmsservice.getperformancecategories().subscribe(
      data => {
        this.loading = false;
        this.performancecategories = JSON.parse(data.payload);
        console.log(this.performancecategories);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    //Get Performance Rating Scale
    this.selfservice.getPerformanceRatingScale().subscribe(
      data => {
        this.performanceratingscale = JSON.parse(data.payload);
      },
      error => {
        this.alertService.error(error);
      }
    );
  } //ngOnInit

  onPerformanceCategorySelected(selectedCategory) {
    this.selfservice
      .getSubordinatePerformanceAppraisal(
        this.hrservice.selectedAppraisal.employeeid
      )
      .subscribe(
        data => {
          this.loading = false;
          this.performanceData = JSON.parse(data.payload);
          console.log(this.performanceData);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  } //onPerformanceCategorySelected

  saveRating() {
    const postData = {};

    this.selfservice.savePerformanceRatingForSubordinate(postData).subscribe(
      data => {
        this.loading = false;
        this.performanceData = JSON.parse(data.payload);
        console.log(this.performanceData);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //saveRating
}
