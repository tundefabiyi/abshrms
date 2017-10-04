export const competencyappraisal = {
    id: "1000",
    name:"Fabiyi Tunde",
    designation: "Branch Manager",
    gradelevel: "Senior Manager",
    period: "January 2017",   
    competencytypeinformation: "Shared Competency - 10%",
    lineitems: [
        {
            id: "1", competencyitem: "Effectiveness", proficiencylevel: "Skilled", competencyitemdetails: [
                { id: "1", description: "Ability To Manage Multiple Task With High Priority" }
                , { id: "2", description: "Apply Tools And Techniques to facilitate performance improvement" }
                , { id: "3", description: "Manages time efficiently and effectively to deliver desired result" }

            ],
            jobholderrating:{rating1:false,rating2:false,rating3:true,rating4:false,rating5:false},
             supervisorrating:{rating1:false,rating2:false,rating3:true,rating4:false,rating5:false}
           
        },
        {
            id: "2", competencyitem: "Knowledge & Skills", proficiencylevel: "Skilled", competencyitemdetails: [
                { id: "4", description: "Displays competence that specifies the relevant technical or professional knowledge and skills" }

            ]
        },
        {
            id: "3", competencyitem: "Accountability", proficiencylevel: "Skilled", competencyitemdetails: [
                { id: "5", description: "Holds self and others responsible for measurable, high quality, timely and cost effective result" }
                , { id: "6", description: "Exhibits creative approach to solving current problem situation" }
                , { id: "7", description: "Demostrate the ability to drive discussions, idea generation and brain storming." }
            ]
        }
    ]
} 