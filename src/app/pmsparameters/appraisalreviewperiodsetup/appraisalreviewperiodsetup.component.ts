import { Component, OnInit } from '@angular/core';
import { AppraisalReviewPeriodService } from './appraisalreviewperiodsetup.service';
import { PMSParametersService } from '../pmsparameters.service';
import { AlertService } from '../../services/index';
import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { AppraisalReviewPeriod } from './appraisalreviewperiodsetup.model'

import * as map from 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'appraisalreviewperiodsetup.component.html',
    providers: [AppraisalReviewPeriodService]
})
export class AppraisalReviewPeriodSetupComponent implements OnInit {
    startdate: string;
    enddate: string;
    allowreview; boolean;
    public data;
    selectedperiod: any = {};
    selectedreviewperiod: any = {};
    isinSelectionMode: boolean = false;
    loading = false;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    appraisalperiodlist: any[] = [];

    constructor(private appraisalReviewPeriodService: AppraisalReviewPeriodService,
        private alertService: AlertService, private pMSParametersService: PMSParametersService) {

    }
    ngOnInit() {
        this.pMSParametersService.getAppraisalPeriods()
            .then(
            data => {
                this.loading = false;
                this.appraisalperiodlist = [];
                this.appraisalperiodlist = data;
            },
            error => {

                this.alertService.error(error);
                this.loading = false;
            });
    }

    onAppraisalPeriodSelected(selecteditem) {
        //  $event.preventDefault();
        this.loading = true;
        this.selectedperiod = selecteditem;
        this.appraisalReviewPeriodService.getAppraisalReviewPeriodList(selecteditem.id)
            .then(
            data => {
                // setTimeout(() => { this.loading = false }, 4000)
                this.loading = false;
                this.data = data;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });

    }
    save() {
        this.loading = true;
        var model = new AppraisalReviewPeriod();
        model.allowreview = this.allowreview;        
        model.enddate = new Date(this.enddate);
        model.startdate = new Date(this.startdate);
        if (this.isinSelectionMode == false) {
            model.appraisalperiodid = this.selectedperiod.id;
            this.appraisalReviewPeriodService.create(model)
                .then(
                data => {
                    this.loading = false;
                    this.data = data;
                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;
                });
        }
        else {
        model.id = this.selectedreviewperiod.id;
            this.appraisalReviewPeriodService.update(model)
                .then(
                data => {
                    this.loading = false;
                    this.data = data;
                    this.isinSelectionMode = false;
                },
                error => {

                    this.alertService.error(error);
                    this.loading = false;

                });
        }
    }
    onAppraisalReviewPerioditemselected(selectedappraisalreviewperioditem: any) {
        this.selectedreviewperiod = selectedappraisalreviewperioditem;
        this.allowreview = selectedappraisalreviewperioditem.allowreview;
        this.enddate = selectedappraisalreviewperioditem.enddate;
        this.startdate = selectedappraisalreviewperioditem.startdate;
        this.isinSelectionMode = true;
    }
}  