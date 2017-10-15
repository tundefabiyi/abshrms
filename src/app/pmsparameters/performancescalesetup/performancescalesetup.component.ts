import { PMSParametersService } from "./../pmsparameters.service";
import { AlertService } from "./../../services/alert.service";
import { SelfserviceService } from "./../../selfservice/selfservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-performancescalesetup",
  templateUrl: "./performancescalesetup.component.html",
  styleUrls: ["./performancescalesetup.component.css"]
})
export class PerformancescalesetupComponent implements OnInit {
  ratings: any[] = [];
  loading: boolean = false;
  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    this.loading = true;
    //Get Performance Rating Scale
    this.selfservice.getPerformanceRatingScale().subscribe(
      data => {
        this.loading = false;
        this.ratings = JSON.parse(data.payload);
      },
      error => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  }

  save() {
    this.loading = true;
    const ratingdata = {};

    this.pMSParametersService.savePerformanceRating(ratingdata).subscribe(
      data => {
        this.loading = false;
        this.ratings = JSON.parse(data.payload);
        console.log(this.ratings);
      },
      error => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  } //save
}
