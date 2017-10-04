import { SelfserviceService } from "./../selfservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-myevaluation",
  templateUrl: "./myevaluation.component.html",
  styleUrls: ["./myevaluation.component.css"]
})
export class MyevaluationComponent implements OnInit {
  evaluationMaster;
  description: string;
  strength;
  constructor(private selfservice: SelfserviceService) {}

  ngOnInit() {
    //Get the Job holder's evaluation master
    const user = JSON.parse(localStorage.getItem("currentUser"));
    this.selfservice
      .getJobholderEvaluationMaster(user.employeeid)
      .subscribe(data => {
        this.evaluationMaster = data[0];
        console.log(this.evaluationMaster);
      });
  }

  save() {
    const strength = {
      evaluationmasterid: this.evaluationMaster.id,
      description: this.description
    };

    console.log(strength);

    this.selfservice.saveEvaluationDetailStrength(strength).subscribe(data => {
      this.strength = data;

      console.log(this.strength);
    });
  } //save
}
