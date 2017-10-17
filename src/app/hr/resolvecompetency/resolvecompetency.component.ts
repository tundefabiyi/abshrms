import { competencyappraisal } from "./../../mockdata/selfservice/competencyappraisal.model";
import { HrService } from "./../hr.service";
import { SelfserviceService } from "./../../selfservice/selfservice.service";
import { AlertService } from "./../../services/alert.service";
import { CompetencymeasurementService } from "./../../pmsparameters/competencymeasurement/competencymeasurement.service";
import { PMSParametersService } from "./../../pmsparameters/pmsparameters.service";
import { Component, OnInit } from "@angular/core";
import _ from "lodash";

@Component({
  selector: "app-resolvecompetency",
  templateUrl: "./resolvecompetency.component.html",
  styleUrls: ["./resolvecompetency.component.css"]
})
export class ResolvecompetencyComponent implements OnInit {
  loading: boolean = false;
  selectedCompetencyType;
  selectedCompetencyItem;
  myActionPlan;
  appraisaldetails: any[] = [];
  competencytemplates: any[] = [];
  competencytypes: any[] = [];
  defaultTemplate: any;
  postdata: any;

  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private hrservice: HrService,
    private competencyMeasurementService: CompetencymeasurementService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    this.selectedCompetencyType = {};
    this.selectedCompetencyItem = {};
    //this.defaultTemplate = this.hrservice.selectedAppraisal.competencyappraisal;
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
  }

  onCompetencytypeSelected(selectedtype) {
    this.loading = true;
    //Fetch Competency Templates
    this.selfservice.getCompetencyAppraisal(selectedtype).subscribe(
      data => {
        this.loading = false;
        this.defaultTemplate = JSON.parse(data.payload);
        console.log(this.defaultTemplate);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //onCompetencytypeSelected

  save() {
    this.loading = true;

    this.selfservice.saveAppraisalCompetencyRating(this.postdata).subscribe(
      data => {
        this.loading = false;
        this.defaultTemplate = JSON.parse(data.payload);
        console.log(data);
      },
      error => {
        console.log(error);

        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //save

  onCompetencyItemSelected() {} //onCompetencyItemSelected
}
