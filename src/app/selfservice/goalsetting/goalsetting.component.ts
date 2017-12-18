import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";
import { PMSParametersService } from "../../pmsparameters/pmsparameters.service";
import { AlertService } from "../../services/alert.service";
import { PerformanceService } from "../../pmsparameters/performancetemplate/performance.service";
import _ from "lodash";

@Component({
  selector: "app-goalsetting",
  templateUrl: "./goalsetting.component.html",
  styleUrls: ["./goalsetting.component.css"]
})
export class GoalsettingComponent implements OnInit {
  kpis: any[] = [];
  performancecategories: any[] = [];
  performancetemplates: any[] = [];
  goalsset: any[] = [];
  loading: boolean = false;
  selectedKpi: any = {};
  selectedLineItem: any = {};
  selectedPerformanceTemplate: any = {};
  commitment: number;

  constructor(
    private pmsservice: PMSParametersService,
    private performanceservice: PerformanceService,
    private selfservice: SelfserviceService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loading = true;

    //Load Performance Categories
    this.pmsservice.getperformancecategories().subscribe(
      data => {
        this.performancecategories = JSON.parse(data.payload);
        console.log(this.performancecategories);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

    //Load Kpis
    /* this.pmsservice.getkpilist().subscribe(
      data => {
        this.kpis = data.itemlist;
        console.log(this.kpis);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    ); */
  } //ngOnInit

  onPerformanceCategorySelected(selectedCategory) {
    //Get currently performance template in this category for this jobholder
    this.performanceservice.gettemplate(selectedCategory.id).subscribe(
      data => {
        this.selectedPerformanceTemplate = JSON.parse(data.payload);
        console.log(this.selectedPerformanceTemplate);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //onPerformanceCategorySelected

  onPerformanceTemplateSelected(selectedTemplate) {} //onPerformanceTemplateSelected

  onKpiSelected(kpi) {
    //Get the lineitem with this kpi
  } //onKpiSelected

  getKPI(kpiid) {
    return _.find(this.kpis, { id: kpiid }) || {};
  } //getKPI

  save() {
    this.loading = true;

    const goalCreated = {
      goalsettingmasterid: this.goalsset.length + 1,
      performancemeasurementtemplateid: this.selectedPerformanceTemplate.id,
      performancemeasurementtemplatelineitemid: this.selectedLineItem.id,
      percentagecommitment: this.commitment
    };

    this.performanceservice.saveSubordinateCommitment(goalCreated).subscribe(
      data => {
        this.loading = false;
        //Get updated template response structure
        this.selectedPerformanceTemplate = JSON.parse(data.payload);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //save

  /*  getGoalDetails(goal) {
    const template = _.find(this.performancetemplates, {
      id: goal.performancemeasurementtemplateid
    });
    const lineitem = _.find(template.lineitems, {
      id: goal.performancemeasurementtemplatelineitemid
    });

    const kpi = this.getKPI(lineitem.kpiid);

    return {
      goalsettingmasterid: goal.goalsettingmasterid,
      template: template.templatedescription,
      kpi: kpi.description,
      computationbasis: kpi.computationbasis,
      weight: lineitem.weight,
      percentagecommitment: goal.percentagecommitment
    };
  } */
}
