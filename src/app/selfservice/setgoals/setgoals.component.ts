import { PMSParametersService } from "./../../pmsparameters/pmsparameters.service";
import { CompetencymeasurementService } from "./../../pmsparameters/competencymeasurement/competencymeasurement.service";
import { AlertService } from "./../../services/alert.service";
import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";
import _ from "lodash";

@Component({
  selector: "app-setgoals",
  templateUrl: "./setgoals.component.html",
  styleUrls: ["./setgoals.component.css"]
})
export class SetgoalsComponent implements OnInit {
  loading: boolean = false;
  selectedCompetencyType;
  selectedCompetencyItem;
  myActionPlan;
  actionplans: any[] = [];
  competencytemplates: any[] = [];
  competencytypes: any[] = [];
  competencyitems: any[] = [];
  defaultTemplate = { id: "", lineitems: [] };
  editMode: boolean = false;
  selectedActionPlan: any = {};
  postdata: any = {};

  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private competencyMeasurementService: CompetencymeasurementService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    //Set Goal Setting Form Id
    this.postdata.goalsettingformid = this.selfservice.goalsettingformid;
    this.selectedCompetencyItem = {};
    //this.actionplan = {};
    //Fetch Competency Types

    this.loading = true;
    this.selfservice.getCompetencyClassList().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.competencytypes = JSON.parse(data.payload);

          console.log(this.competencytypes);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );
  }

  onCompetencytypeSelected(selectedtype) {
    //Set competency type
    this.loading = true;
    //Fetch Competency Items
    this.selfservice.getCompetencyItemList(selectedtype.id).subscribe(
      data => {
        this.loading = false;
        //Get competency items
        if (data.issuccessfull) {
          this.competencyitems = JSON.parse(data.payload);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );

    //Fetch Action Plans
    this.selfservice
      .getCompetencyClassActionPlanDetails({
        goalsettingformid: this.selfservice.goalsettingformid,
        competencyclassid: selectedtype.id
      })
      .subscribe(
        data => {
          this.loading = false;

          if (data.issuccessfull) {
            var goalsettingform = JSON.parse(data.payload);
            this.actionplans = goalsettingform.lineitems;
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
  } //onCompetencytypeSelected

  onCompetencyItemSelected(selectedItem) {
    this.postdata.selectedlineitemid = selectedItem.id;
  } //onCompetencyItemSelected

  save() {
    this.loading = true;
    if (!this.editMode) {
      this.selfservice.saveGoalSettingActionPlan(this.postdata).subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            //Returns Goal Setting Form which Contains lineitems and other info
            var goalsettingform = JSON.parse(data.payload);
            this.actionplans = goalsettingform.lineitems;
            this.postdata.actionplantext = "";
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    } else {
      this.selectedActionPlan.actionplandescription = this.postdata.actionplantext;
      this.selfservice
        .updateGoalsettingDetailActionplan(this.postdata)
        .subscribe(
          data => {
            if (data.issuccessfull) {
              //Returns Goal Setting Form which Contains lineitems and other info
              var goalsettingform = JSON.parse(data.payload);
              this.actionplans = goalsettingform.lineitems;
              this.postdata.actionplantext = "";
              this.editMode = false;
            } else {
              this.handleError(data.errorMsg);
            }
          },
          error => {
            this.handleError(error);
          }
        );
    }
  } //save

  getCompetencyItem(competencyitemid) {
    return _.find(this.defaultTemplate.lineitems, { id: competencyitemid });
  } //getCompetencyItem

  edit(lineitem) {
    this.editMode = true;

    this.selectedActionPlan = lineitem;

    this.selectedCompetencyItem = _.find(this.competencyitems, {
      id: lineitem.competencyitemid
    });
    this.postdata.actionplantext = lineitem.actionplandescription;
  } //edit

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
