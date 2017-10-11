import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-myperformanceappraisal",
  templateUrl: "./myperformanceappraisal.component.html",
  styleUrls: ["./myperformanceappraisal.component.css"]
})
export class MyperformanceappraisalComponent implements OnInit {
  performanceAppraisal;

  constructor(private selfservice: SelfserviceService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.selfservice
      .getJobHolderPerformanceAppraisal(user.employeeid)
      .subscribe(data => {
        this.performanceAppraisal = JSON.parse(data.payload);
      });
  }
}
