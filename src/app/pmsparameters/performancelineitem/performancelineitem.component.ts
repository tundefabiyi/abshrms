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
  constructor(
    private performanceservice: PerformanceService,
    private pMSParametersService: PMSParametersService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    console.log(this.template);

    //Load Kpis
    this.pMSParametersService.getkpilist().subscribe(
      data => {
        this.kpis = data.itemlist;
        console.log(this.kpis);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
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

  onKpiSelected() {} //onKpiSelected

  save() {
    var lineItemCreated = {
      id: this.template.lineitems.length + 1, //Increment id
      performancemeasurementtemplateid: this.template.id,
      kpiid: this.selectedKpi.id,
      weight: this.weight
    };

    //Check if this item already exists
    var duplicates = _.find(this.template.lineitems, {
      performancemeasurementtemplateid: this.template.id,
      kpiid: this.selectedKpi.id
    });

    if (!duplicates) {
      const templateBeforeEdit = Object.assign({}, this.template);
      //Push in the new item
      this.template.lineitems.push(lineItemCreated);
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
    } else {
      this.alertService.error("Item Already Exists");
    }
  } //save

  getKPI(kpiid) {
    return _.find(this.kpis, {
      id: kpiid
    });
  } //getKPI

  delete(lineitem) {
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
  } //delete
}
