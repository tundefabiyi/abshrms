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

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Fetch the Competency Items
    this.pMSParametersService
      .fetchCompetencyItemList(this.competencyTemplate.competencytype)
      .subscribe(
        data => {
          this.loading = false;
          this.competencyitems = JSON.parse(data.payload);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );

    //Get Proficiency Types
    this.pMSParametersService.getProficiencyTypes().subscribe(
      data => {
        this.loading = false;
        this.proficiencytypes = JSON.parse(data.payload);
        console.log(this.proficiencytypes);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    this.competencyTemplate.lineitems = this.competencyTemplate.lineitems || [];
  }

  onCompetencyitemSelected(selectedItem) {} //onCompetencyitemSelected

  onProficiencytypeSelected(selectedProficiency) {} //onProficiencytypeSelected

  save() {
    if (!this.editMode) {
      //Create New

      var lineItemCreated = {
        id: this.competencyTemplate.lineitems.length + 1, //Increment id
        competencyitem: this.selectedCompetencyitem.description,
        proficiencylevel: this.selectedProficiencytype.description
      };

      //Update template by adding new lineitem
      this.competencyMeasurementService
        .updateSingleTemplate(lineItemCreated)
        .subscribe(
          data => {
            //Return the updated template
            this.competencyTemplate = JSON.parse(data.payload);
            console.log(this.competencyTemplate);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else {
      //NOTE: Server validates duplicates on edit

      //Update template by updating updated lineitem
      this.competencyMeasurementService
        .updateSingleTemplate(this.competencyTemplate)
        .subscribe(
          data => {
            //Return the updated template
            this.competencyTemplate = JSON.parse(data.payload);
            console.log(this.competencyTemplate);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
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
}
