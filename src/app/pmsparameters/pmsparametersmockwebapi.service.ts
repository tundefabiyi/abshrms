import { InMemoryDbService } from 'angular-in-memory-web-api';
export class PMSParametersMockWebApiervice implements InMemoryDbService {
    createDb() {
        let appraisalperiods = [
            { id: "11", description: '2015 Period', startdate: "01-01-2015", enddate: "12-12-2015", allowgoalsetting: "true", allowappraisal: "true" },
            { id: "12", description: '2016 Period', startdate: "01-01-2016", enddate: "12-12-2016", allowgoalsetting: "true", allowappraisal: "false" },
            { id: "13", description: '2017 Period', startdate: "01-01-2017", enddate: "12-12-2017", allowgoalsetting: "true", allowappraisal: "false" },

        ];
        let appraisalReviewPeriod = [
            { id: "11", startdate: "01-01-2015", enddate: "12-12-2015", allowreview: "true", appraisalperiodid: "11"},
            { id: "12",  startdate: "01-01-2016", enddate: "12-12-2016", allowreview: "true", appraisalperiodid: "11" },
            { id: "13",  startdate: "01-01-2017", enddate: "12-12-2017", allowreview: "true", appraisalperiodid: "12" },

        ];
        return { appraisalperiods, appraisalReviewPeriod };
    }
}
