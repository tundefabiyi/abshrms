import { Component,OnInit } from '@angular/core';
import  {dto_MenuGroup} from './dto_MenuGroup.model';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit { 
    menugrouplist: dto_MenuGroup[] = [];
   constructor() {
       
    }
     ngOnInit() {
         var staffinfo = JSON.parse(localStorage.getItem('currentUser'));
        this.menugrouplist = staffinfo.dto_MenuGroupList;
    }
}  