import { performanceappraisal } from "./performanceappraisal.model";
import { goalsettingsupervisor } from "./goalsettingsupervisor.model";
export const appraisalsummary = {
  employeeid: "002",
  fullname: "Adetayo James",
  jobfunction: "Branch Manager",
  jobposition: "Edo State Branch Manager",
  performanceappraisal: performanceappraisal,
  competencyappraisal: [
    {
      id: "1000",
      description: "Shared Competency Template For Branch Mahagers",
      competencytype: "Shared Competency",
      appraisalperiod: "8th Jan - 8th April",
      apprailsalperioddescription: "1st Quater Appraisal",
      appraisalheader: "Section A - Shared Competencies - 10%",
      status: "Pending",
      lineitems: [
        {
          id: "1",
          competencyitem: "Effectiveness",
          proficiencylevel: "Skilled",
          competencyitemdetails: [
            {
              id: "1",
              description: "Ability To Manage Multiple Task With High Priority"
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
          ],

          jobholderrating: { id: 1, description: "Always", rating: 2 },
          supervisorrating: { id: 2, description: "Regularly", rating: 1.6 }
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
          ],
          jobholderrating: { id: 2, description: "Regularly", rating: 2 },
          supervisorrating: { id: 4, description: "Sometimes", rating: 0.8 }
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
          ],
          actionplandescription: "I will not steal government money",
          jobholderrating: {}, //Return Empty object for undone ratings
          supervisorrating: {}
        }
      ]
    }
  ],
  totalperformancescore: "49%",
  totalcompetencyscore: "30%",
  totalscore: "79%",
  attestation: "Accepted"
};
