import { Component, OnInit } from '@angular/core';
import { CompetencyItemDetailSetupService } from './competencyitemdetailsetup.service';
import { AlertService } from '../../services/index';
import { Subject, Observable } from 'rxjs/Rx';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'competencyitemdetailsetup.component.html',
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
    constructor(private competencyItemDetailSetupService: CompetencyItemDetailSetupService,
        private alertService: AlertService) {

    }
    ngOnInit() {
        this.dtOptions = {
            paginationType: 'full_numbers',
            displayLength: 10,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        };
        this.competencyItemDetailSetupService.getlist()
            .subscribe(
            data => {
                this.loading = false;
                this.data = [];
                this.data = data;

            },
            error => {

                this.alertService.error(error);
                this.loading = false;
            });
    }
    save() {
        this.loading = true;
        if (this.isinSelectionMode == false) {
            this.competencyItemDetailSetupService.create({ id: "", description: this.detaildescription, ordernos: this.detailordernos })
                .subscribe(
                data => {
                   this.data.push(data);
                    // this.competencyItemDetailSetupService.getlist().subscribe(data => {
                    //     this.loading = false;
                    //     this.data = [];
                    //     this.data = data;
                  //  })
                    //  this.data = data.dto_KPIItemList;
                    this.detaildescription = "";
                    this.detailordernos = "";

                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;
                });
        }
        else {

            this.competencyItemDetailSetupService.update({ id: this.selecteddetailitem.id, description: this.detaildescription, ordernos: this.detailordernos })
                .subscribe(
                data => {
                    this.competencyItemDetailSetupService.getlist().subscribe(data => {
                        this.loading = false;
                        this.data = [];
                        this.data = data;
                    })
                    //  this.data = data.dto_KPIItemList;
                    this.detaildescription = "";
                    this.detailordernos = "";

                    this.selecteddetailitem = {};
                    this.isinSelectionMode = false;

                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;
                    this.selecteddetailitem = {};
                    this.isinSelectionMode = false;
                });
        }

    }
    onselectcompetencydetailitem(selecteddetailitem: any) {
        this.selecteddetailitem = selecteddetailitem;
        this.detaildescription = selecteddetailitem.description;
        this.detailordernos = selecteddetailitem.ordernos;
        this.isinSelectionMode = true;
    }

}  