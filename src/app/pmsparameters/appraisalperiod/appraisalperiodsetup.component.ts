import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { PMSParametersService } from '../pmsparameters.service';
import { AlertService } from '../../services/index';
import { AppraisalPeriodService } from './appraisalperiod.service';
import { AppraisalPeriod } from '../appraisalperiod.model';
import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';

import * as map from 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'appraisalperiodsetup.component.html',
    providers: [AppraisalPeriodService]
})
export class AppraisalPeriodSetupComponent implements OnInit {
    description: string;
    startdate: string;
    enddate: string;
    allowgoalsetting: boolean;
    allowappraisal: boolean;

    public data;
    selectedperiod: any = {};
    isinSelectionMode: boolean = false;
    loading = false;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();

    public tableWidget: any;
    constructor(private appraisalPeriodService: AppraisalPeriodService,
        private alertService: AlertService, private pmsparametersService: PMSParametersService) {

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
        this.reloadlist();

    }

    onappraisalperiodselected(selectedperiod: any) {

        this.selectedperiod = selectedperiod;
        this.description = selectedperiod.description;
        this.startdate = new Date(selectedperiod.startdate).toLocaleDateString("en-GB");
        this.enddate = new Date(selectedperiod.enddate).toLocaleDateString("en-GB");
        this.allowappraisal = selectedperiod.allowappraisal.toString() === "true";
        this.allowgoalsetting = selectedperiod.allowgoalsetting.toString() === "true";
        this.isinSelectionMode = true;


    }
    saveappraisalperiod() {
        var model = new AppraisalPeriod();
        model.allowappraisal = this.allowappraisal;
        model.allowgoalsetting = this.allowgoalsetting;
        model.description = this.description;
        model.enddate = new Date(this.enddate);
        model.startdate = new Date(this.startdate);
        if (this.isinSelectionMode) {
            model.id = this.selectedperiod.id;
            this.appraisalPeriodService.update(model).then(res => {

                // var foundIndex = this.data.findIndex(x => x.id == res.id);
                // this.data[foundIndex] = model;
                this.reloadlist();
                this.resetcontrolls();
            }, error => {

                this.onerror(error);
            });
        }
        else {


            model.id = Date.now().toString();

            this.appraisalPeriodService.create(model).then(res => {
                // this.data.push(res);
                this.reloadlist();
                this.resetcontrolls();
            }, error => {

                this.onerror(error);
            });
        }
    }
    reloadlist() {


        this.pmsparametersService.getAppraisalPeriods()
            .then(
            data => {
                this.loading = false;
                this.data = [];
                this.data = data;
                this.dtTrigger.next();

            },
            error => {

                this.alertService.error(error);
                this.loading = false;
            });
    }
    resetcontrolls() {
        this.allowappraisal = false;
        this.allowgoalsetting = false;
        this.description = "";
        this.startdate = "";
        this.enddate = "";
        this.isinSelectionMode = false;

    }
    onerror(error: any) {
        this.alertService.error(error);
        this.loading = false;
        this.selectedperiod = {};
        this.isinSelectionMode = false;
    }
    private extractData(res: Response) {
        const body = res.json();
        return body.data || {};
    }
}  