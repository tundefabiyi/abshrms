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
  postdata: any = {};

  constructor(
    public router: Router,
    private pMSParametersService: PMSParametersService,
    private competencyMeasurementService: CompetencymeasurementService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Set the id of the lineitem
    this.postdata.competencytemplatelineitemid = this.competencyMeasurementService.selectedLineitem.id;
    //Fetch Competency Item Details
    this.loading = true;
    this.pMSParametersService.fetchCompetencyItemDetails().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.competencyitemdetails = JSON.parse(data.payload);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );

    //Initialize Competency Details
    this.lineitem.competencyitemdetails =
      this.lineitem.competencyitemdetails || [];
  }

  onCompetencyitemDetailSelected(selecteddetail) {
    this.postdata.competencyitemdetailid = selecteddetail.id;
  } //onCompetencyitemDetailSelected

  save() {
    this.loading = true;
    //Check if this item already exists
    //Create Item Detail
    this.competencyMeasurementService
      .createCompetencyTemplateLineItemDetail(this.postdata)
      .subscribe(
        data => {
          this.loading = false;
          //Return Updated template
          if (data.issuccessfull) {
            this.competencyTemplate = JSON.parse(data.payload);
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
  } //save

  delete(itemdetail) {
    if (confirm("Are you sure you want to delele this detail?")) {
      this.loading = true;
      this.competencyMeasurementService
        .deleteCompetencyTemplateLineItemDetail(itemdetail.id)
        .subscribe(
          data => {
            this.loading = false;
            if (data.issuccessfull) {
              this.competencyTemplate = JSON.parse(data.payload);
            } else {
              this.handleError(data.errorMsg);
            }
          },
          error => {
            this.handleError(error);
          }
        );
    }
  } //delete

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
