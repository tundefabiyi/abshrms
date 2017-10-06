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
        this.competencytypes = JSON.parse(data.payload);

        console.log(this.competencytypes);
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
    this.competencyMeasurementService
      .getSingleTemplate(selectedtype.description)
      .subscribe(
        data => {
          this.loading = false;
          //Get A full object of the template for the user and the user's action plans nested within it
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
    var postdata;

    if (!this.editMode) {
      postdata = {
        competencytemplateid: this.selectedCompetencyType.id,
        competencytemplatelineitemid: this.selectedCompetencyItem.id,
        actionplandescription: this.myActionPlan
      };

      this.selfservice.updateGoalsettingDetailActionplan(postdata).subscribe(
        data => {
          //Get back the update template struvture with action plan
          this.defaultTemplate = JSON.parse(data.payload);
          this.myActionPlan = "";
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      this.selectedCompetencyItem.actionplandescription = this.myActionPlan;

      postdata = this.selectedCompetencyItem;

      this.selfservice.updateGoalsettingDetailActionplan(postdata).subscribe(
        data => {
          //Get back the update template struvture with action plan
          this.defaultTemplate = JSON.parse(data.payload);
          this.editMode = false;
          this.myActionPlan = "";
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    }
  } //save

  getCompetencyItem(competencyitemid) {
    return _.find(this.defaultTemplate.lineitems, { id: competencyitemid });
  } //getCompetencyItem

  onCompetencyItemSelected() {} //onCompetencytypeSelected

  edit(lineitem) {
    this.editMode = true;

    this.selectedCompetencyItem = lineitem;
    this.myActionPlan = lineitem.actionplandescription;
  } //edit
}
