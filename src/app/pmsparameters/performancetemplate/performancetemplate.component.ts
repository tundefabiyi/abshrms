import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PerformanceService } from "./performance.service";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/alert.service";
import _ from "lodash";

@Component({
  selector: "app-performancetemplate",
  templateUrl: "./performancetemplate.component.html",
  styleUrls: ["./performancetemplate.component.css"]
})
export class PerformancetemplateComponent implements OnInit {
  performancecategories: any[] = [];
  performancetemplates: any[] = [];
  loading: boolean = false;
  selectedPerformanceCategory: any;
  templateDescription: string;
  postdata: any = {};
  selectedPerformanceTemplate: any = {};
  editMode: boolean = false;
  constructor(
    public router: Router,
    private performanceservice: PerformanceService,
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loading = true;
    //Load Performance Categories
    this.pMSParametersService.getperformancecategories().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.performancecategories = this.performanceservice.performancecategories = JSON.parse(
            data.payload
          );
          console.log(this.performancecategories);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );
  } //ngOnInit

  onPerformanceCategorySelected(selectedCategory) {
    //Set the performance category id
    this.postdata.performancetypeid = selectedCategory.id;
    //Get Templates
    this.loading = true;
    this.performanceservice
      .getPerformanceTemplateList(selectedCategory.id)
      .subscribe(
        data => {
          this.loading = false;
          if (data.issuccessfull) {
            this.performancetemplates = JSON.parse(data.payload);
            console.log(this.performancetemplates);
          } else {
            this.handleError(data.errorMsg);
          }
        },
        error => {
          this.handleError(error);
        }
      );
  } //onPerformanceCategorySelected

  getPerformanceCategory(template) {
    return _.find(this.performancecategories, {
      id: template.performancetypeid
    });
  } //getPerformanceCategory

  save() {
    this.loading = true;

    if (!this.editMode) {
      this.performanceservice
        .createPerformanceTemplate(this.postdata)
        .subscribe(
          data => {
            this.loading = false;
            if (data.issuccessfull) {
              this.performancetemplates = JSON.parse(data.payload);
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
      this.selectedPerformanceTemplate.description = this.postdata.description;
      this.performanceservice
        .updatePerformanceTemplate(this.selectedPerformanceTemplate)
        .subscribe(
          data => {
            this.loading = false;
            if (data.issuccessfull) {
              this.performancetemplates = JSON.parse(data.payload);
              this.postdata = {};
              this.editMode = false;
            } else {
              this.handleError(data.errorMsg);
            }
          },
          error => {
            this.handleError(error);
          }
        );
    }
  } //save

  edit(template) {
    this.editMode = true;
    this.postdata.description = template.description;
    this.selectedPerformanceTemplate = template;
  } //edit

  manage(template) {
    this.performanceservice.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/performancelineitem"]);
  } //manage

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
