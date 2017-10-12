import { CompetencymeasurementService } from "./../competencymeasurement/competencymeasurement.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-competencytemplatedetail",
  templateUrl: "./competencytemplatedetail.component.html",
  styleUrls: ["./competencytemplatedetail.component.css"]
})
export class CompetencytemplatedetailComponent implements OnInit {
  template = this.competencyMeasurementService.selectedTemplate;
  constructor(
    private competencyMeasurementService: CompetencymeasurementService
  ) {}

  ngOnInit() {}
}
