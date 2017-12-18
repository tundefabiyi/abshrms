import { Component, OnInit } from "@angular/core";
import { PerformanceService } from "../performancetemplate/performance.service";
import { PMSParametersService } from "../pmsparameters.service";
import { AlertService } from "../../services/alert.service";
import _ from "lodash";
@Component({
  selector: "app-performancelineitem",
  templateUrl: "./performancelineitem.component.html",
  styleUrls: ["./performancelineitem.component.css"]
})
export class PerformancelineitemComponent implements OnInit {
  template: any = this.performanceservice.selectedTemplate;
  performancecategories: any[] = this.performanceservice.performancecategories;
  kpis: any[] = [];
  loading: boolean = false;
  selectedKpi: any;
  weight: number;
  postdata: any = {};
  editMode: boolean = false;
  constructor(
    private performanceservice: PerformanceService,
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    console.log(this.template);
    this.postdata.performancetemplateid = this.template.id;
    this.loading = true;
    //Load Kpis
    this.pMSParametersService.getkpilist().subscribe(
      data => {
        this.loading = false;
        if (data.issuccessfull) {
          this.kpis = JSON.parse(data.payload);
          console.log(this.kpis);
        } else {
          this.handleError(data.errorMsg);
        }
      },
      error => {
        this.handleError(error);
      }
    );

    //Initialize the lineitems
    this.template.lineitems = this.template.lineitems || [];
  }

  getPerformanceCategory() {
    return _.find(this.performancecategories, {
      id: this.template.performancetypeid
    });
  } //getPerformanceCategory

  onKpiSelected(selectedKpi) {
    this.postdata.kpiid = selectedKpi.id;
  } //onKpiSelected

  save() {
    this.loading = true;

    //Update template
    this.performanceservice
      .createPerformanceTemplateLineItem(this.postdata)
      .subscribe(
        data => {
          //Get the updated template
          this.template = JSON.parse(data.payload);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  } //save

  getKPI(kpiid) {
    return _.find(this.kpis, {
      id: kpiid
    });
  } //getKPI

  edit(lineitem) {
    this.selectedKpi = _.find(this.kpis, {
      id: lineitem.kpiid
    });

    this.postdata.weight = lineitem.weight;
  } //edit

  /* delete(lineitem) {
    const templateBeforeEdit = Object.assign({}, this.template);

    const reducedLineItems = _.filter(this.template.lineitems, item => {
      return item.id != lineitem.id;
    });

    this.template.lineitems = reducedLineItems;

    //Update template
    this.performanceservice.updateTemplate(this.template).subscribe(
      data => {
        //Get the updated list
        console.log(data);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;

        //Remove the Pushed Line Item
        this.template = templateBeforeEdit;
      }
    );
  } //delete */

  handleError(error) {
    this.alertService.error(error);
    this.loading = false;
  } //handleError
}
