import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";
import { CompetencymeasurementService } from "../competencymeasurement/competencymeasurement.service";
import { Router } from "@angular/router";
import _ from "lodash";

@Component({
  selector: "app-addcompetencyitemdetail",
  templateUrl: "./addcompetencyitemdetail.component.html",
  styleUrls: ["./addcompetencyitemdetail.component.css"]
})
export class AddcompetencyitemdetailComponent implements OnInit {
  competencyTemplate: any = this.competencyMeasurementService.selectedTemplate;
  lineitem: any = this.competencyMeasurementService.selectedLineitem;
  competencyitemdetails: any[] = [];
  loading: boolean = false;
  selectedCompetencyitemDetail: any;

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Fetch Competency Item Details
    this.pMSParametersService.fetchCompetencyItemDetails().subscribe(
      data => {
        this.loading = false;
        this.competencyitemdetails = data;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    //Initialize Competency Details
    this.lineitem.competencyitemdetails =
      this.lineitem.competencyitemdetails || [];
  }

  onCompetencyitemDetailSelected(selecteddetail) {} //onCompetencyitemDetailSelected

  save() {
    //Check if this item already exists
    var duplicates = _.find(this.lineitem.competencyitemdetails, {
      description: this.selectedCompetencyitemDetail.description
    });

    if (!duplicates) {
      const templateBeforeEdit = Object.assign({}, this.competencyTemplate);

      this.lineitem.competencyitemdetails.push(
        this.selectedCompetencyitemDetail
      );

      //Update the lineItem
      this.competencyTemplate.lineitems = _.map(function(lineItem) {
        if (lineItem.id == this.lineitem.id) {
          //Return the updated line item
          return this.lineitem;
        }

        return lineItem;
      });

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
    } else {
      this.alertService.error("Item Already Exists");
    }
  } //save
}
