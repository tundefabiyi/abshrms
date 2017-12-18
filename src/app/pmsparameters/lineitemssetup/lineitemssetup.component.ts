import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";
import { CompetencymeasurementService } from "../competencymeasurement/competencymeasurement.service";
import { Router } from "@angular/router";
import _ from "lodash";

@Component({
  selector: "app-lineitemssetup",
  templateUrl: "./lineitemssetup.component.html",
  styleUrls: ["./lineitemssetup.component.css"]
})
export class LineitemssetupComponent implements OnInit {
  competencyTemplate: any = this.competencyMeasurementService.selectedTemplate;
  competencytypelist: any[] = [];
  competencyitems: any[] = [];
  proficiencytypes: any[] = [];
  loading: boolean = false;
  editMode: boolean = false;
  selectedlineitem: any;

  //Form Values
  selectedCompetencyitem;
  selectedProficiencytype;
  postdata: any = {};

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Fetch the Competency Items
    console.log(this.competencyTemplate);

    this.pMSParametersService
      .fetchCompetencyItemList(this.competencyTemplate.competencyclassid)
      .subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            this.competencyitems = JSON.parse(data.payload);
          } else {
            this.handleError(data.errormsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );

    //Get Proficiency Types
    this.pMSParametersService.getProficiencyTypes().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.proficiencytypes = JSON.parse(data.payload);
          console.log(this.proficiencytypes);
        } else {
          this.handleError(data.errormsg);
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    this.competencyTemplate.lineitems = this.competencyTemplate.lineitems || [];
  }

  onCompetencyitemSelected(selectedItem) {
    this.postdata.competencyitemid = selectedItem.id;
  } //onCompetencyitemSelected

  onProficiencytypeSelected(selectedProficiency) {
    this.postdata.proficiencylevelid = selectedProficiency.id;
  } //onProficiencytypeSelected

  save() {
    this.postdata.competencytemplateid = this.competencyTemplate.id;
    this.loading = true;
    if (!this.editMode) {
      //Create New
      this.postdata.competencyitemid = this.competencyTemplate.id;

      //Update template by adding new lineitem
      this.competencyMeasurementService
        .createCompetencyLineItem(this.postdata)
        .subscribe(
          data => {
            this.loading = false;
            if (data.issuccessfull) {
              //Return the updated template
              this.competencyTemplate = JSON.parse(data.payload);
              console.log(this.competencyTemplate);
            } else {
              this.handleError(data.errormsg);
            }
          },
          error => {
            this.handleError(error);
          }
        );
    } else {
      //NOTE: Server validates duplicates on edit

      //Update template by updating updated lineitem
      this.competencyMeasurementService
        .updateCompetencyLineItem(this.selectedlineitem)
        .subscribe(
          data => {
            this.loading = false;
            if (data.issuccessfull) {
              //Return the updated template
              this.competencyTemplate = JSON.parse(data.payload);
              console.log(this.competencyTemplate);
            } else {
              this.handleError(data.errormsg);
            }
          },
          error => {
            this.handleError(error);
          }
        );
    }
  } //save

  edit(lineitem: any) {
    this.editMode = true;

    this.selectedlineitem = lineitem;

    this.selectedCompetencyitem = _.find(this.competencyitems, {
      description: this.selectedlineitem.competencyitem
    });

    console.log(this.selectedCompetencyitem);

    this.selectedProficiencytype = _.find(this.proficiencytypes, {
      description: this.selectedlineitem.proficiencylevel
    });

    console.log(this.selectedProficiencytype);
  } //edit

  manage(lineitem: any) {
    this.competencyMeasurementService.selectedLineitem = lineitem;
    this.competencyMeasurementService.selectedTemplate = this.competencyTemplate;
    this.router.navigate(["/pmsparameters/addcompetencyitemdetail"]);
  } //manage

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
