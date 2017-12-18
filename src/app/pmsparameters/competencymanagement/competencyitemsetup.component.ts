import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";
import _ from "lodash";

@Component({
  moduleId: module.id.toString(),
  templateUrl: "competencyitemsetup.component.html"
})
export class CompetencyItemSetupComponent implements OnInit {
  competencytypeId: string;
  code: string;
  description: string;
  percentage: string;
  competencytypelist: any[] = [];
  selectedCompetencytype: any;
  data;
  isinSelectionMode: boolean = false;
  selectedcompetencyitem: any;
  loading = false;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";
  postdata: any = {};
  constructor(
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.pMSParametersService.fetchCompetencyTypeList().subscribe(
      data => {
        this.loading = false;
        this.competencytypelist = JSON.parse(data.payload);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  onCompetencytypeSelected(selecteditem) {
    this.postdata.competencytypeid = selecteditem.code;
    //  $event.preventDefault();
    this.loading = true;

    this.selectedcompetencyitem = _.find(this.competencytypelist, {
      id: selecteditem.code
    });

    this.pMSParametersService
      .fetchCompetencyItemList(selecteditem.code)
      .subscribe(
        data => {
          setTimeout(() => {
            this.loading = false;
          }, 40000);
          this.loading = false;
          this.data = JSON.parse(data.payload);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  save() {
    console.log(this.postdata);
    this.loading = true;
    if (this.isinSelectionMode == false) {
      this.pMSParametersService.createCompetencyItem(this.postdata).subscribe(
        data => {
          if (data.issuccessfull) {
            this.loading = false;
            this.data = JSON.parse(data.payload);
            this.postdata.code = "";
            this.postdata.description = "";
            this.postdata.percentage = "";
          } else {
            this.handleError(data.errormsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    } else {
      this.pMSParametersService.updateCompetecyitem(this.postdata).subscribe(
        data => {
          this.loading = false;
          this.isinSelectionMode = false;

          if (data.issuccessfull) {
            this.loading = false;
            this.data = JSON.parse(data.payload);
            this.postdata.code = "";
            this.postdata.description = "";
            this.postdata.percentage = "";
          } else {
            this.handleError(data.errormsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    }
  }
  oncompetencyitemselected(selectedcompetencyitem: any) {
    this.postdata = selectedcompetencyitem;
    this.isinSelectionMode = true;
  }

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
