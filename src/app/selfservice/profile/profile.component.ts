import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  @Input() userdetails;
  @Output() goalsettingevent: EventEmitter<any>;
  @Output() appraisalevent: EventEmitter<any>;
  @Output() evaluationevent: EventEmitter<any>;
  constructor() {
    this.goalsettingevent = new EventEmitter<any>(); //Its very important that you 'new' up your event emitters
    this.appraisalevent = new EventEmitter<any>();
    this.evaluationevent = new EventEmitter<any>();
  }

  ngOnInit() {
    console.log(this.userdetails);
  }

  setGoals() {
    this.goalsettingevent.emit(this.userdetails);
  }

  triggerAppraisal() {
    this.appraisalevent.emit(this.userdetails);
  }

  evaluation() {
    this.evaluationevent.emit(this.userdetails);
  } //evaluation
}
