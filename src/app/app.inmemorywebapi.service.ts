import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AppInMemoryWebAPIService implements InMemoryDbService {
    createDb() {
        let appraisalperiods = [
            { id: "11", description: '2015 Period', startdate: "01-01-2015", enddate: "12-12-2015", allowgoalsetting: "true", allowappraisal: "true" },
            { id: "12", description: '2016 Period', startdate: "01-01-2016", enddate: "12-12-2016", allowgoalsetting: "true", allowappraisal: "false" },
            { id: "13", description: '2017 Period', startdate: "01-01-2017", enddate: "12-12-2017", allowgoalsetting: "true", allowappraisal: "false" },

        ];
        let appraisalReviewPeriod = [
            { id: "11", startdate: "01-01-2015", enddate: "12-12-2015", allowreview: "true", appraisalperiodid: "11" },
            { id: "12", startdate: "01-01-2016", enddate: "12-12-2016", allowreview: "true", appraisalperiodid: "11" },
            { id: "13", startdate: "01-01-2017", enddate: "12-12-2017", allowreview: "true", appraisalperiodid: "12" },

        ];
        let employees = [{ employeeid: "1", staffid: "0001", fullname: "Fabiyi Tunde", jobfunctionid: "1", jobfunction: "Branch Manager", jobpositionid: "1", jobposition: "Branch Manager Lagos", imagedata: "xxxxxxx", supervisorstaffid: "0000",evaluationformstatus :"Pending",appraisalformstatus:"Started",goalsettingformstatus:"FinishedInput",assesmentscore:"56" },
        { employeeid: "2", staffid: "0002", fullname: "Adetayo James", jobfunctionid: "2", jobfunction: "Operations Manager", jobpositionid: "2", jobposition: "Operations Manager Lagos", imagedata: "xxxxxxx", supervisorstaffid: "0001",evaluationformstatus :"Pending",appraisalformstatus:"Started",goalsettingformstatus:"FinishedInput",assesmentscore:"56" },
        { employeeid: "3", staffid: "0003", fullname: "Emmanuel Luka", jobfunctionid: "3", jobfunction: "Marketer", jobpositionid: "3", jobposition: "Marketer Lagos", imagedata: "xxxxxxx", supervisorstaffid: "0001",evaluationformstatus :"Pending",appraisalformstatus:"Started",goalsettingformstatus:"FinishedInput",assesmentscore:"56" },
        { employeeid: "4", staffid: "0004", fullname: "John Paul", jobfunctionid: "3", jobfunction: "Marketer", jobpositionid: "3", jobposition: "Marketer Lagos", imagedata: "xxxxxxx",supervisorstaffid: "0001",evaluationformstatus :"Pending",appraisalformstatus:"Started",goalsettingformstatus:"FinishedInput",assesmentscore:"56" }

        ];
        let competencyitemdetails = [
            { id: "1",description : "Ability To Manage Multiple Task With High",ordernos:"1"},
            { id: "2",description : "Applied Tools and Tools ",ordernos:"2"},
            { id: "3",description : "Ability To Manage Multiple Task With High",ordernos:"3"},
            { id: "4",description : "Ability To Manage Multiple Task With High",ordernos:"4"}


        ]
        return { appraisalperiods, appraisalReviewPeriod,employees,competencyitemdetails };
    }
}
