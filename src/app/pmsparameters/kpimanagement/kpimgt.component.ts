import { Component, OnInit } from '@angular/core';
import { PMSParametersService } from '../pmsparameters.service';
import { AlertService } from '../../services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'kpimgt.component.html'
})
export class KPIMgtComponent implements OnInit {
    kpidescriprion: string;
    computationbasics: string;
   public data;
    selectedkpi: any = {};
    isinSelectionMode: boolean = false;
    loading = false;
     filterQuery = "";
     rowsOnPage = 10;
     sortBy = "description";
     sortOrder = "asc";
    constructor(private pMSParametersService: PMSParametersService,
        private alertService: AlertService) {

    }
    ngOnInit() {
        this.pMSParametersService.getkpilist()
            .subscribe(
            data => {
                this.loading = false;
                this.data = data.dto_KPIItemList;
                
            },
            error => {

                this.alertService.error(error);
                this.loading = false;
            });
    }
    savekpi() {
        this.loading = true;
        if (this.isinSelectionMode == false) {
            this.pMSParametersService.createkpi({id:"", description: this.kpidescriprion, computationbasics: this.computationbasics })
                .subscribe(
                data => {
                    this.loading = false;
                    this.data = data.dto_KPIItemList;
                    this.computationbasics = "";
                    this.kpidescriprion = "";
                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;
                });
        }
        else {

            this.pMSParametersService.updatekpi({ id: this.selectedkpi.id, description: this.kpidescriprion, computationbasics: this.computationbasics })
                .subscribe(
                data => {
                    this.loading = false;
                    this.data = data.dto_KPIItemList;
                    this.selectedkpi = {};
                    this.isinSelectionMode = false;
                     this.computationbasics = "";
                    this.kpidescriprion = "";
                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;
                    this.selectedkpi = {};
                    this.isinSelectionMode = false;
                });
        }

    }
    selectkpi(selectedkpi: any) {
        this.selectedkpi = selectedkpi;
        this.kpidescriprion = selectedkpi.description;
        this.computationbasics = selectedkpi.computationbasics;
        this.isinSelectionMode = true;
    }

}  