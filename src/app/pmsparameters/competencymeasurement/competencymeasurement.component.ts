import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";
import { CompetencymeasurementService } from "./competencymeasurement.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-competencymeasurement",
  templateUrl: "./competencymeasurement.component.html",
  styleUrls: ["./competencymeasurement.component.css"]
})
export class CompetencymeasurementComponent implements OnInit {
  loading = false;
  competencytypes: any[] = [];
  competencytemplates: any[] = [];
  //measurementForm = {};
  selectedCompetencyType;
  description: string;
  selectedTemplate: any = {};
  editMode: boolean = false;
  postdata: any = {};

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Fetch Competency Types
    this.competencyMeasurementService.fetchCompetencyClassList().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.competencytypes = JSON.parse(data.payload);
        } else {
          this.handleError(data.errormsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );
  } //End ngOnInit

  onCompetencytypeSelected(selectedtype) {
    this.loading = true;
    this.postdata.competencyclassid = selectedtype.id;
    //Fetch Competency Templates
    console.log(selectedtype);
    this.competencyMeasurementService.fetchTemplates(selectedtype.id).subscribe(
      data => {
        if (data.issuccessfull) {
          this.loading = false;
          this.competencytemplates = JSON.parse(data.payload);
        } else {
          this.handleError(data.errormsg);
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //onCompetencytypeSelected

  save() {
    this.loading = true;
    console.log(this.postdata);
    if (this.editMode) {
      //Update the description
      this.selectedTemplate.description = this.postdata.description;

      this.competencyMeasurementService.update(this.selectedTemplate).subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            //Get the updated list
            console.log(data);
            this.competencytemplates = JSON.parse(data.payload);

            //Reset
            this.editMode = false;
            this.postdata = {};
          } else {
            this.handleError(data.errormsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    } else {
      this.competencyMeasurementService.create(this.postdata).subscribe(
        data => {
          this.loading = false;

          if (data.issuccessfull) {
            console.log(data);
            this.competencytemplates = JSON.parse(data.payload);
            this.description = "";
          } else {
            this.handleError(data.errormsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    }
  } //end save

  edit(template: any) {
    this.editMode = true;
    this.selectedTemplate = template;
    this.postdata.description = this.selectedTemplate.description;
  } //edit

  detail(template: object) {
    this.competencyMeasurementService.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/competencytemplatedetail"]);
  }

  manage(template: object) {
    this.competencyMeasurementService.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/lineitemssetup"]);
  }

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
