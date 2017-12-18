import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/index";

@Component({
  moduleId: module.id.toString(),
  templateUrl: "kpimgt.component.html"
})
export class KPIMgtComponent implements OnInit {
  kpidescriprion: string;
  computationbasics: string;
  public data;
  selectedkpi: any = {};
  isinSelectionMode: boolean = false;
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
    this.loading = true;
    this.pMSParametersService.getkpilist().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.data = JSON.parse(data.payload);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );
  }
  savekpi() {
    this.loading = true;
    if (this.isinSelectionMode == false) {
      this.pMSParametersService.createkpi(this.postdata).subscribe(
        data => {
          this.loading = false;
          if (data.issuccessful) {
            this.data = JSON.parse(data.payload);
            this.postdata = {};
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
    } else {
      this.pMSParametersService.updatekpi(this.postdata).subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            this.data = JSON.parse(data.payload);
            this.selectedkpi = {};
            this.isinSelectionMode = false;
            this.postdata = {};
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
          this.selectedkpi = {};
          this.isinSelectionMode = false;
        }
      );
    }
  }
  selectkpi(selectedkpi: any) {
    this.selectedkpi = this.postdata = selectedkpi;
    this.isinSelectionMode = true;
  }

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
