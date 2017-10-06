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
  constructor(
    public router: Router,
    private performanceservice: PerformanceService,
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //Load Performance Categories
    this.pMSParametersService.getperformancecategories().subscribe(
      data => {
        this.performancecategories = this.performanceservice.performancecategories = JSON.parse(
          data.payload
        );
        console.log(this.performancecategories);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //ngOnInit

  onPerformanceCategorySelected(selectedCategory) {
    //Get Templates
    this.performanceservice.gettemplates(selectedCategory.id).subscribe(
      data => {
        this.performancetemplates = JSON.parse(data.payload);
        console.log(this.performancetemplates);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //onPerformanceCategorySelected

  getPerformanceCategory(template) {
    return _.find(this.performancecategories, {
      id: template.performancetypeid
    });
  } //getPerformanceCategory

  save() {
    const template = {
      performancetypeid: this.selectedPerformanceCategory.id,
      templatedescription: this.templateDescription,
      documentstatus: "Pending"
    };

    this.performanceservice.saveTemplate(template).subscribe(
      data => {
        console.log(data);
        this.performancetemplates = JSON.parse(data.payload);

        this.templateDescription = "";
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //save

  manage(template) {
    this.performanceservice.selectedTemplate = template;
    this.router.navigate(["/pmsparameters/performancelineitem"]);
  } //manage
}
