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
    this.pMSParametersService.fetchCompetencyTypeList().subscribe(
      data => {
        this.loading = false;
        this.competencytypelist = data.itemlist;

        //Fetch Competency id of the Competency type for the template
        var competencytype = _.find(this.competencytypelist, {
          description: this.competencyTemplate.competencytype
        });

        //Fetch the Competency Items
        this.pMSParametersService
          .fetchCompetencyItemList(competencytype.id)
          .subscribe(
            data => {
              this.loading = false;
              this.competencyitems = data.itemlist;
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
            this.proficiencytypes = data;
            console.log(this.proficiencytypes);
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

      //Check if this item already exists
      var duplicates = _.find(
        this.competencyTemplate.lineitems,
        lineItemCreated
      );

      if (!duplicates) {
        //Push in the new item
        this.competencyTemplate.lineitems.push(lineItemCreated);
        //Update template
        this.competencyMeasurementService
          .update(this.competencyTemplate)
          .subscribe(
            data => {
              //Get the updated list
              console.log(data.itemlist);
              //this.competencyTemplate.lineitems.push(lineItemCreated);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;

              //Remove the Pushed Line Item
              this.competencyTemplate.lineitems = this.competencyTemplate.lineitems.filter(
                lineitem => {
                  return !(
                    lineitem.competencyitem == lineItemCreated.competencyitem &&
                    lineitem.proficiencylevel ==
                      lineItemCreated.proficiencylevel
                  );
                }
              );
            }
          );
      } else {
        this.alertService.error("Item Already Exists");
      }
    } else {
      //NOTE: Server validates duplicates on edit
      var editedLineItems = _.map(
        this.competencyTemplate.lineitems,
        lineitem => {
          if (lineitem.id == this.selectedlineitem.id) {
            return {
              id: this.selectedlineitem.id,
              competencyitem: this.selectedCompetencyitem.description,
              proficiencylevel: this.selectedProficiencytype.description
            };
          } else {
            return lineitem;
          }
        }
      );

      const templateBeforeEdit = Object.assign({}, this.competencyTemplate);

      console.log(templateBeforeEdit);

      this.competencyTemplate.lineitems = editedLineItems;

      //Update template
      this.competencyMeasurementService
        .update(this.competencyTemplate)
        .subscribe(
          data => {
            //Get the updated list
            console.log(data.itemlist);
            //this.competencyTemplate.lineitems.push(lineItemCreated);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;

            //Revert the template back to previous form
            this.competencyTemplate = templateBeforeEdit;
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
