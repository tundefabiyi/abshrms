import { SelfserviceService } from "./../selfservice.service";
import { AlertService } from "./../../services/alert.service";
import { CompetencymeasurementService } from "./../../pmsparameters/competencymeasurement/competencymeasurement.service";
import { PMSParametersService } from "./../../pmsparameters/pmsparameters.service";
import { Component, OnInit } from "@angular/core";
import _ from "lodash";

@Component({
  selector: "app-subordinatecompetencyappraisal",
  templateUrl: "./subordinatecompetencyappraisal.component.html",
  styleUrls: ["./subordinatecompetencyappraisal.component.css"]
})
export class SubordinatecompetencyappraisalComponent implements OnInit {
  loading: boolean = false;
  selectedCompetencyType;
  selectedCompetencyItem;
  myActionPlan;
  appraisaldetails: any[] = [];
  competencytemplates: any[] = [];
  competencytypes: any[] = [];
  defaultTemplate = { id: "", lineitems: [] };
  myScaleRating;
  user;

  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private competencyMeasurementService: CompetencymeasurementService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    this.selectedCompetencyType = {};
    this.selectedCompetencyItem = {};
    this.user = this.selfservice.selectedSubordinate;
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
    const detail = {
      appraisalmasterid: 1,
      competencymeasurementtemplateid: this.defaultTemplate.id,
      competencymeasurementtemplatelineitemid: this.selectedCompetencyItem.id,
      jobholdercompetencyratingscaleid: this.myScaleRating
    };

    this.selfservice.saveAppraisalCompetencyRating(detail).subscribe(
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

  getCompetencyItem(competencyitemid) {
    return _.find(this.defaultTemplate.lineitems, { id: competencyitemid });
  } //getCompetencyItem

  onCompetencyItemSelected() {} //onCompetencytypeSelected
}
