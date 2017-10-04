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
  defaultTemplate = { id: "", lineitems: [] };
  editMode: boolean = false;
  selectedActionPlan;

  constructor(
    private selfservice: SelfserviceService,
    private alertService: AlertService,
    private competencyMeasurementService: CompetencymeasurementService,
    private pMSParametersService: PMSParametersService
  ) {}

  ngOnInit() {
    this.selectedCompetencyItem = {};
    //this.actionplan = {};
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
    if (!this.editMode) {
      const actionplan = {
        competencytemplateid: this.selectedCompetencyType.id,
        competencytemplatelineitemid: this.selectedCompetencyItem.id,
        actionplandescription: this.myActionPlan
      };

      this.selfservice.saveGoalsettingDetailActionplan(actionplan).subscribe(
        newplan => {
          console.log(newplan);
          //this.actionplan = data;
          this.selfservice.getActionPlans(this.defaultTemplate.id).subscribe(
            data => {
              /*this.actionplan =
                  _.find(data, {
                    competencytemplateid: this.selectedCompetencyType.id,
                    competencytemplatelineitemid: this.selectedCompetencyItem.id
                  }) || {};*/
              this.actionplans = data;
              console.log(this.actionplans);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
          );
          this.myActionPlan = "";
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      this.selectedActionPlan.actionplandescription = this.myActionPlan;

      this.selfservice
        .updateGoalsettingDetailActionplan(this.selectedActionPlan)
        .subscribe(
          update => {
            console.log(update);
            //this.actionplan = data;
            this.selfservice.getActionPlans(this.defaultTemplate.id).subscribe(
              data => {
                /*this.actionplan =
                  _.find(data, {
                    competencytemplateid: this.selectedCompetencyType.id,
                    competencytemplatelineitemid: this.selectedCompetencyItem.id
                  }) || {};*/
                this.actionplans = data;
                console.log(this.actionplans);
                this.editMode = false;
              },
              error => {
                this.alertService.error(error);
                this.loading = false;
              }
            );
            this.myActionPlan = "";
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    }
  } //save

  onCompetencytypeSelected(selectedtype) {
    this.loading = true;
    //Fetch Competency Templates
    this.competencyMeasurementService.fetchTemplates(selectedtype).subscribe(
      data => {
        this.loading = false;
        this.defaultTemplate = data.itemlist[0] || {};

        //Load Action Plans
        this.selfservice.getActionPlans(this.defaultTemplate.id).subscribe(
          data => {
            /*this.actionplan =
              _.find(data, {
                competencytemplateid: this.selectedCompetencyType.id,
                competencytemplatelineitemid: this.selectedCompetencyItem.id
              }) || {};*/

            this.actionplans = data;
            console.log(this.actionplans);
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
    /*
    this.selfservice
      .getActionPlans(
        this.selectedCompetencyType.id
      )
      .subscribe(
        data => {
          

          this.actionplans = data;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );*/
  } //onCompetencytypeSelected

  edit(actionplan) {
    this.editMode = true;

    this.selectedActionPlan = actionplan;
    this.myActionPlan = actionplan.actionplandescription;
  } //edit
}
