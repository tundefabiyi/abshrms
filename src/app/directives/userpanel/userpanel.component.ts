import { Component,OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'user-panel',
  templateUrl: 'userpanel.component.html'
})
export class UserPanelComponent implements OnInit { 
    name :string;
    jobposition :string;
    imagedata : string;
   constructor() {
       
    }
     ngOnInit() {
         var staffinfo = JSON.parse(localStorage.getItem('currentUser'));
        this.jobposition = staffinfo.jobposition;
        this.name = staffinfo.fullname;
        this.imagedata = 'data:image/png;base64,' + staffinfo.imagedata;
    }
}  