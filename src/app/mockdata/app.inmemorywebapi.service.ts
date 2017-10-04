import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
  RequestInfoUtilities,
  ResponseOptions,
  ParsedRequestUrl,
  getStatusText
} from "angular-in-memory-web-api";
import { logindetails } from "../mockdata/selfservice/loginemployeeresponse.model";

export class AppInMemoryWebAPIService implements InMemoryDbService {
  createDb() {
    //Enums
    let appraisalattestationstatus = [
      {
        id: 1,
        description: "Pending"
      },
      {
        id: 2,
        description: "Accepted"
      },
      {
        id: 3,
        description: "Rejected"
      }
    ];

    let inputstatus = [
      {
        id: 1,
        description: "Pending"
      },
      {
        id: 2,
        description: "Started"
      },
      {
        id: 3,
        description: "Finished Input"
      }
    ];

    let measurementtemplateapplicationlevel = [
      {
        id: 1,
        description: "Global"
      },
      {
        id: 2,
        description: "JobFunction"
      },
      {
        id: 3,
        description: "Pending"
      }
    ];

    let appraisalperiods = [
      {
        id: "11",
        description: "2015 Period",
        startdate: "01-01-2015",
        enddate: "12-12-2015",
        allowgoalsetting: "true",
        allowappraisal: "true"
      },
      {
        id: "12",
        description: "2016 Period",
        startdate: "01-01-2016",
        enddate: "12-12-2016",
        allowgoalsetting: "true",
        allowappraisal: "false"
      },
      {
        id: "13",
        description: "2017 Period",
        startdate: "01-01-2017",
        enddate: "12-12-2017",
        allowgoalsetting: "true",
        allowappraisal: "false"
      }
    ];
    let appraisalReviewPeriod = [
      {
        id: "11",
        startdate: "01-01-2015",
        enddate: "12-12-2015",
        allowreview: "true",
        appraisalperiodid: "11"
      },
      {
        id: "12",
        startdate: "01-01-2016",
        enddate: "12-12-2016",
        allowreview: "true",
        appraisalperiodid: "11"
      },
      {
        id: "13",
        startdate: "01-01-2017",
        enddate: "12-12-2017",
        allowreview: "true",
        appraisalperiodid: "12"
      }
    ];

    let documentstatus = [
      {
        id: 1,
        description: "Pending"
      },
      {
        id: 2,
        description: "Submitted"
      },
      {
        id: 3,
        description: "Approved"
      }
    ];

    //End Enums

    let kpis = [
      {
        id: 1,
        description: "Staff Cost to Income Ratio",
        computationbasis: "(Total Staff cost/Total Income)* 100"
      },
      {
        id: 2,
        description: "Budget Variance",
        computationbasis:
          "((Actual Expenditure - Budgeted Expenditure for HR and Admin) / Budgeted Expenditure) * 100"
      }
    ];

    let performancecategories = [
      {
        id: 1,
        description: "Financial"
      },
      {
        id: 2,
        description: "Stakeholders"
      },
      {
        id: 3,
        description: "Internal Efficiency"
      },
      {
        id: 4,
        description: "Learning and Development"
      }
    ];

    let performancemeasurementtemplates = [
      {
        id: 1,
        performancetypeid: 1,
        templatedescription: "Financial Performance Measurement for HR",
        documentstatus: "Pending" //Pending, Submitted, Approved
      }
    ];

    let performancemeasurementtemplatelineitems = [
      {
        id: 1,
        performancemeasurementtemplateid: 1,
        kpiid: 1,
        weight: 10
      }
    ];

    let employees = [
      {
        employeeid: "1",
        staffid: "0001",
        fullname: "Fabiyi Tunde",
        jobfunctionid: "1",
        jobfunction: "Branch Manager",
        jobpositionid: "1",
        jobposition: "Branch Manager Lagos",
        imagedata: "xxxxxxx",
        supervisorstaffid: "0000",
        evaluationformstatus: "Pending",
        appraisalformstatus: "Started",
        goalsettingformstatus: "FinishedInput",
        assesmentscore: "56"
      },
      {
        employeeid: "2",
        staffid: "0002",
        fullname: "Adetayo James",
        jobfunctionid: "2",
        jobfunction: "Operations Manager",
        jobpositionid: "2",
        jobposition: "Operations Manager Lagos",
        imagedata: "xxxxxxx",
        supervisorstaffid: "0001",
        evaluationformstatus: "Pending",
        appraisalformstatus: "Started",
        goalsettingformstatus: "FinishedInput",
        assesmentscore: "56"
      },
      {
        employeeid: "3",
        staffid: "0003",
        fullname: "Emmanuel Luka",
        jobfunctionid: "3",
        jobfunction: "Marketer",
        jobpositionid: "3",
        jobposition: "Marketer Lagos",
        imagedata: "xxxxxxx",
        supervisorstaffid: "0001",
        evaluationformstatus: "Pending",
        appraisalformstatus: "Started",
        goalsettingformstatus: "FinishedInput",
        assesmentscore: "56"
      },
      {
        employeeid: "4",
        staffid: "0004",
        fullname: "John Paul",
        jobfunctionid: "3",
        jobfunction: "Marketer",
        jobpositionid: "3",
        jobposition: "Marketer Lagos",
        imagedata: "xxxxxxx",
        supervisorstaffid: "0001",
        evaluationformstatus: "Pending",
        appraisalformstatus: "Started",
        goalsettingformstatus: "FinishedInput",
        assesmentscore: "56"
      }
    ];

    let competencytypes = [
      {
        id: 1,
        description: "Shared Competencies"
      },
      {
        id: 2,
        description: "Leadership Competencies"
      },
      {
        id: 3,
        description: "Functional Competencies"
      }
    ];

    let proficiencytypes = [
      {
        id: 1,
        description: "Skilled"
      },
      {
        id: 2,
        description: "Advanced"
      },
      {
        id: 3,
        description: "Mastery"
      }
    ];

    let competencyitems = [
      {
        id: 1,
        description: "Effectiveness",
        competencytypeid: "1",
        code: "001",
        percentage: 2.0
      },
      {
        id: 2,
        description: "Knowledge and Skills",
        competencytypeid: "1",
        code: "002",
        percentage: 2.0
      },
      {
        id: 3,
        description: "Accountability",
        competencytypeid: "2",
        code: "003",
        percentage: 2.0
      },
      {
        id: 4,
        description: "Innovation",
        competencytypeid: "2",
        code: "004",
        percentage: 2.0
      },
      {
        id: 5,
        description: "Integrity/Honesty/Credibility",
        competencytypeid: "3",
        code: "005",
        percentage: 2.0
      }
    ];

    let competencyitemdetails = [
      {
        id: "1",
        description: "Ability To Manage Multiple Task With High",
        ordernos: "1"
      },
      { id: "2", description: "Applied Tools and Tools ", ordernos: "2" },
      {
        id: "3",
        description: "Ability To Manage Multiple Task With High",
        ordernos: "3"
      },
      {
        id: "4",
        description: "Ability To Manage Multiple Task With High",
        ordernos: "4"
      }
    ];

    let competencytemplates = [
      {
        id: "1",
        description: "Shared Competency Template For Branch Mahagers",
        competencytype: "Shared Competencies",
        lineitems: [
          {
            id: "1",
            competencyitem: "Effectiveness",
            proficiencylevel: "Skilled",
            competencyitemdetails: [
              {
                id: "1",
                description:
                  "Ability To Manage Multiple Task With High Priority"
              },
              {
                id: "2",
                description:
                  "Apply Tools And Techniques to facilitate performance improvement"
              },
              {
                id: "3",
                description:
                  "Manages time efficiently and effectively to deliver desired result"
              }
            ]
          },
          {
            id: "2",
            competencyitem: "Knowledge & Skills",
            proficiencylevel: "Skilled",
            competencyitemdetails: [
              {
                id: "4",
                description:
                  "Displays competence that specifies the relevant technical or professional knowledge and skills"
              }
            ]
          },
          {
            id: "3",
            competencyitem: "Accountability",
            proficiencylevel: "Skilled",
            competencyitemdetails: [
              {
                id: "5",
                description:
                  "Holds self and others responsible for measurable, high quality, timely and cost effective result"
              },
              {
                id: "6",
                description:
                  "Exhibits creative approach to solving current problem situation"
              },
              {
                id: "7",
                description:
                  "Demostrate the ability to drive discussions, idea generation and brain storming."
              }
            ]
          }
        ]
      }
    ];

    let goalsettingdetailactionplan = [
      {
        id: 1,
        competencytemplateid: "1",
        competencytemplatelineitemid: "1",
        actionplandescription: "I will do my best"
      }
    ];

    let appraisaldetailcompetencyrating = [
      {
        id: 1,
        appraisalmasterid: 1,
        competencymeasurementtemplateid: "1",
        competencymeasurementtemplatelineitemid: "1",
        jobholdercompetencyratingscaleid: 4
      }
    ];

    let evaluationmaster = [
      {
        id: 1,
        appraisalperiodid: "13",
        jobholderemployeeid: "1",
        supervisoremployeeid: "0",
        appraisalperiodreviewid: "13",
        jobholderinputstatus: "Pending",
        supervisorinputstatus: "Pending"
      }
    ];

    let evaluationdetailstrength = [
      {
        evaluationmasterid: 0,
        description: "Hallo Everybody"
      }
    ];

    return {
      appraisalperiods,
      appraisalReviewPeriod,
      kpis,
      performancecategories,
      performancemeasurementtemplates,
      performancemeasurementtemplatelineitems,
      employees,
      competencytypes,
      proficiencytypes,
      competencyitems,
      competencyitemdetails,
      competencytemplates,
      goalsettingdetailactionplan,
      appraisaldetailcompetencyrating,
      evaluationmaster,
      evaluationdetailstrength
    };
  }
  post(reqInfo: RequestInfo) {
    console.log("URL" + reqInfo.url);
    console.log("resourceUrl" + reqInfo.resourceUrl);
    const url = reqInfo.url;
    if (url === "api/selfservice/authenticateLogin") {
      return this.getAuthenticateResponse(reqInfo);
    } /*else if (url === "api/competencyitems") {
      return this.returnCreatedCompetencyItem(reqInfo);
    }*/

    return undefined; // let the default GET handle all others
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {
    const url = reqInfo.url;
    /*
    //Get the [[Entries]] property of the query string (Returns an iterator/generator)
    const queryIterator = reqInfo.query.entries();
    //Get the first entry (the first query paramemter)
    const competencytypeid = queryIterator.next().value[0][0];
    */
    if (url === "api/competencytypes") {
      return this.getCompetencyTypeItems(reqInfo);
    } else if (url.indexOf("competencyitems?competencytypeid=") != -1) {
      return this.getCompetencyItems(reqInfo);
    } else if (url.indexOf("competencytemplates?competencytype=") != -1) {
      return this.getCompetencyTemplates(reqInfo);
    } else if (url === "api/kpis" || url === "api/performancecategories") {
      return this.returnResponseAsItemlist(reqInfo);
    }

    return undefined; // let the default GET handle all others
  }

  put(reqInfo: RequestInfo) {
    const url = reqInfo.url;
    /*
    //Get the [[Entries]] property of the query string (Returns an iterator/generator)
    const queryIterator = reqInfo.query.entries();
    //Get the first entry (the first query paramemter)
    const competencytypeid = queryIterator.next().value[0][0];
    */
    if (url === "api/competencytemplates") {
      //Return the new updated list
      return this.handleCompetencyTemplateUpdate(reqInfo);
    }
    return undefined; // let the default PUT handle all others
  } //end put

  private getAuthenticateResponse(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: logindetails,
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  }

  private returnCreatedCompetencyItem(reqInfo: RequestInfo) {
    const response = reqInfo.collection;
  } //returnCreatedCompetencyItem

  private getCompetencyTypeItems(reqInfo) {
    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: {
          itemlist: reqInfo.collection
        },
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  } //getCompetencyTypeItems

  private getCompetencyItems(reqInfo) {
    /*//Get the [[Entries]] property of the query string (Returns an iterator/generator)
    const queryIterator = reqInfo.query.entries();
    //Get the first entry (the first query paramemter)
    const competencytypeid = queryIterator.next().value[0];
    */

    const competencytypeid = reqInfo.url.split("=")[1];

    const returnCollection = reqInfo.collection.filter(function(item) {
      return item.competencytypeid == competencytypeid;
    });

    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: {
          itemlist: returnCollection
        },
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  } //getCompetencyItems

  private getCompetencyTemplates(reqInfo) {
    const competencytype = reqInfo.url.split("=")[1];

    const returnCollection = reqInfo.collection.filter(function(item) {
      return item.competencytype == competencytype;
    });

    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: {
          itemlist: returnCollection
        },
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  } //getCompetencyTemplates

  private returnResponseAsItemlist(reqInfo) {
    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: {
          itemlist: reqInfo.collection
        },
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  } //returnResponseAsItemlist

  private handleCompetencyTemplateUpdate(reqInfo) {
    const competencytype = reqInfo.req._body.competencytype;

    const returnCollection = reqInfo.collection.filter(function(item) {
      return item.competencytype == competencytype;
    });

    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: {
          itemlist: returnCollection
        },
        status: STATUS.OK
      };
      return this.finishOptions(options, reqInfo);
    });
  } //getCompetencyTemplates

  private finishOptions(
    options: ResponseOptions,
    { headers, url }: RequestInfo
  ) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}