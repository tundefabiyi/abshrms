import { CompetencymeasurementService } from "./../competencymeasurement/competencymeasurement.service";
import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";
import { Router } from "@angular/router";
@Component({
  selector: "app-finalratingheadersetup",
  templateUrl: "./finalratingheadersetup.component.html",
  styleUrls: ["./finalratingheadersetup.component.css"]
})
export class FinalratingheadersetupComponent implements OnInit {
  loading = false;
  templates: any[] = [];
  applevels: any[] = [];
  joblevels: any[] = [];
  description: string;
  selectedTemplate: any = {};
  editMode: boolean = false;
  showJobLevels: boolean = false;
  postdata: any;

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.postdata = {};
    //Fetch Templates
    this.pMSParametersService.getFinalRatingTemplates().subscribe(
      data => {
        this.loading = false;
        this.templates = JSON.parse(data.payload);

        console.log(this.templates);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    //Fetch Application Levels
    this.pMSParametersService.getApplicationLevels().subscribe(
      data => {
        this.loading = false;
        this.applevels = JSON.parse(data.payload);

        console.log(this.applevels);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //End ngOnInit

  onAppLevelSelected(applevelid) {
    if (applevelid != 0) {
      this.loading = true;
      this.showJobLevels = true;
      //Get Job Functions/ Job Positions
      this.pMSParametersService.getApplicationJobLevels(applevelid).subscribe(
        data => {
          this.joblevels = JSON.parse(data.payload);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      //Empty the job levels list if prepopulated
      this.joblevels = [];
      this.showJobLevels = false;
    }
  } //onAppLevelSelected

  save() {
    this.loading = true;

    if (this.editMode) {
      this.pMSParametersService
        .saveFinalRatingTemplate(this.postdata)
        .subscribe(
          data => {
            //Get the updated list
            console.log(data);
            this.templates = JSON.parse(data.payload);
            console.log(this.templates);
            //Reset
            this.editMode = false;
            this.postdata = {};
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else {
      this.pMSParametersService
        .saveFinalRatingTemplate(this.postdata)
        .subscribe(
          data => {
            this.loading = false;
            console.log(data);
            this.templates = JSON.parse(data.payload);
            this.postdata = {};
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    }
  } //end save

  edit(template: any) {
    this.editMode = true;
    this.postdata = template;
  } //edit

  detail(template: object) {
    this.pMSParametersService.selectedFinalRatingTemplate = template;
    this.router.navigate(["/pmsparameters/finalratingdetail"]);
  }

  manage(template: object) {
    this.pMSParametersService.selectedFinalRatingTemplate = template;
    this.router.navigate(["/pmsparameters/finalratinglineitemssetup"]);
  }
}
