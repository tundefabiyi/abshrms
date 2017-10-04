import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";

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
  constructor(
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.pMSParametersService.fetchCompetencyTypeList().subscribe(
      data => {
        this.loading = false;
        this.competencytypelist = data.itemlist;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  onCompetencytypeSelected(selecteditem) {
    //  $event.preventDefault();
    this.loading = true;

    this.selectedCompetencytype = selecteditem;
    console.log(
      "selected: " + selecteditem.id + " " + selecteditem.description
    );
    this.pMSParametersService
      .fetchCompetencyItemList(selecteditem.id)
      .subscribe(
        data => {
          setTimeout(() => {
            this.loading = false;
          }, 40000);
          this.loading = false;
          this.data = data.itemlist;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  save() {
    this.loading = true;
    if (this.isinSelectionMode == false) {
      this.pMSParametersService
        .createCompetencyItem(
          this.selectedCompetencytype.id,
          this.code,
          this.description,
          this.percentage
        )
        .subscribe(
          data => {
            this.loading = false;
            this.data.push(data);
            this.code = "";
            this.description = "";
            this.percentage = "";
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else {
      this.pMSParametersService
        .updateCompetecyitem(
          this.selectedcompetencyitem.id,
          this.description,
          this.percentage
        )
        .subscribe(
          data => {
            this.loading = false;
            this.data = data.itemlist;
            this.selectedcompetencyitem = {};
            this.isinSelectionMode = false;
            this.code = "";
            this.description = "";
            this.percentage = "";
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    }
  }
  oncompetencyitemselected(selectedcompetencyitem: any) {
    this.selectedcompetencyitem = selectedcompetencyitem;
    this.code = selectedcompetencyitem.code;
    this.description = selectedcompetencyitem.description;
    this.percentage = selectedcompetencyitem.percentage;
    this.isinSelectionMode = true;
  }
}
