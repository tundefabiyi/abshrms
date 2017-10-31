import { Component, OnInit } from "@angular/core";
import { CompetencyItemDetailSetupService } from "./competencyitemdetailsetup.service";
import { AlertService } from "../../services/index";
import { Subject, Observable } from "rxjs/Rx";
@Component({
  moduleId: module.id.toString(),
  templateUrl: "competencyitemdetailsetup.component.html",
  providers: [CompetencyItemDetailSetupService]
})
export class CompetencyItemDetailSetupComponent implements OnInit {
  detaildescription: string;
  detailordernos: string;
  public data;
  selecteddetailitem: any = {};
  isinSelectionMode: boolean = false;
  loading = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  postdata: any = {};
  constructor(
    private competencyItemDetailSetupService: CompetencyItemDetailSetupService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.dtOptions = {
      paginationType: "full_numbers",
      displayLength: 10,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    };
    this.competencyItemDetailSetupService.getlist().subscribe(
      data => {
        this.loading = false;
        this.data = JSON.parse(data.payload);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  } //ngOnInit

  save() {
    this.loading = true;
    if (this.isinSelectionMode == false) {
      this.competencyItemDetailSetupService.create(this.postdata).subscribe(
        data => {
          this.data = JSON.parse(data.payload);
          this.postdata = {};
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    } else {
      this.competencyItemDetailSetupService.update(this.postdata).subscribe(
        data => {
          this.loading = false;
          this.data = JSON.parse(data.payload);
          this.postdata = {};

          this.selecteddetailitem = {};
          this.isinSelectionMode = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          this.selecteddetailitem = {};
          this.isinSelectionMode = false;
        }
      );
    }
  }
  onselectcompetencydetailitem(selecteddetailitem: any) {
    this.postdata = selecteddetailitem;
    this.isinSelectionMode = true;
  }
}
