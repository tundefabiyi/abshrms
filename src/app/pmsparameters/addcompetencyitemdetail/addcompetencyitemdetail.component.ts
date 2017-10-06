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
        this.competencyitemdetails = JSON.parse(data.payload);
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
    //Update template
    this.competencyMeasurementService
      .updateSingleTemplate(this.selectedCompetencyitemDetail)
      .subscribe(
        data => {
          //Return Updated template
          this.competencyTemplate = JSON.parse(data.payload);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  } //save
}
