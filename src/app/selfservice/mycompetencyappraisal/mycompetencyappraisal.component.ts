import { SelfserviceService } from "./../selfservice.service";
import { AlertService } from "./../../services/alert.service";
import { CompetencymeasurementService } from "./../../pmsparameters/competencymeasurement/competencymeasurement.service";
import { PMSParametersService } from "./../../pmsparameters/pmsparameters.service";
import { Component, OnInit } from "@angular/core";
import _ from "lodash";

@Component({
  selector: "app-mycompetencyappraisal",
  templateUrl: "./mycompetencyappraisal.component.html",
  styleUrls: ["./mycompetencyappraisal.component.css"]
})
export class MycompetencyappraisalComponent implements OnInit {
  loading: boolean = false;
  selectedCompetencyType;
  selectedCompetencyItem;
  myActionPlan;
  appraisaldetails: any[] = [];
  competencytemplates: any[] = [];
  competencytypes: any[] = [];
  defaultTemplate = { id: "", lineitems: [] };
  myScaleRating;

  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private competencyMeasurementService: CompetencymeasurementService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    this.selectedCompetencyType = {};
    this.selectedCompetencyItem = {};
    //Fetch Competency Types
    this.pMSParametersService.fetchCompetencyTypeList().subscribe(
      data => {
        this.loading = false;
        this.competencytypes = data.itemlist;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  save() {
    const detail = {
      appraisalmasterid: 1,
      competencymeasurementtemplateid: this.defaultTemplate.id,
      competencymeasurementtemplatelineitemid: this.selectedCompetencyItem.id,
      jobholdercompetencyratingscaleid: this.myScaleRating
    };

    this.selfservice.saveAppraisalCompetencyRating(detail).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    /*this.selfservice.saveAppraisalDetailCompetencyRating(detail).subscribe(
      appraisal => {
        console.log(appraisal);
        //this.appraisaldetail = data;
        this.selfservice
          .getAppraisalDetailsCompetencyRatings(this.defaultTemplate.id)
          .subscribe(
            data => {
              this.appraisaldetails = data;
              console.log(this.appraisaldetails);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
          );
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );*/
  } //save

  onCompetencytypeSelected(selectedtype) {
    this.loading = true;
    //Fetch Competency Templates
    this.competencyMeasurementService.fetchTemplates(selectedtype).subscribe(
      data => {
        this.loading = false;
        this.defaultTemplate = data.itemlist[0] || {};

        this.selfservice
          .getAppraisalDetailsCompetencyRatings(this.defaultTemplate.id)
          .subscribe(
            data => {
              this.appraisaldetails = data;
              console.log(this.appraisaldetails);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
          );
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //onCompetencytypeSelected

  getCompetencyItem(competencyitemid) {
    return _.find(this.defaultTemplate.lineitems, { id: competencyitemid });
  } //getCompetencyItem

  onCompetencyItemSelected() {
    //this.appraisaldetail = {};
    /*this.selfservice
      .getAppraisalDetailsCompetencyRatings(
        this.selectedCompetencyType.id,
        this.selectedCompetencyItem.id
      )
      .subscribe(
        data => {
          this.appraisaldetail = data[0] || {};
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );*/
  } //onCompetencytypeSelected
}
