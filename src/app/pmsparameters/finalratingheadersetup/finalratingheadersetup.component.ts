import { CompetencymeasurementService } from './../competencymeasurement/competencymeasurement.service';
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
  competencytypes: any[] = [];
  competencytemplates: any[] = [];
  //measurementForm = {};
  selectedCompetencyType;
  description: string;
  selectedTemplate: any = {};
  editMode: boolean = false;

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Fetch Competency Types
    this.pMSParametersService.fetchCompetencyTypeList().subscribe(
      data => {
        this.loading = false;
        this.competencytypes = JSON.parse(data.payload);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //End ngOnInit

  save() {
    this.loading = true;

    if (this.editMode) {
      //Only the description is bbeing updated here
      this.selectedTemplate.description = this.description;

      this.competencyMeasurementService.update(this.selectedTemplate).subscribe(
        data => {
          //Get the updated list
          console.log(data);
          this.competencytemplates = JSON.parse(data.payload);

          //Reset
          this.editMode = false;
          this.description = "";
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      this.competencyMeasurementService
        .create({
          competencytype: this.selectedCompetencyType.description,
          description: this.description,
          status: "Pending"
        })
        .subscribe(
          data => {
            this.loading = false;
            console.log(data);
            this.competencytemplates = JSON.parse(data.payload);
            this.description = "";
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
    this.selectedTemplate = template;
    this.description = template.description;
  } //edit

  detail(template: object) {
    this.competencyMeasurementService.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/competencytemplatedetail"]);
  }

  manage(template: object) {
    this.competencyMeasurementService.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/lineitemssetup"]);
  }
}