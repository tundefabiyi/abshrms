export const goalsettingjobholder = {
  id: "1000",
  description: "Shared Competency Template For Branch Mahagers",
  goalsettingformid: 3,
  competencytype: "Shared Competency",
  status: "Pending",
  lineitems: [
    {
      id: "1",
      competencyitem: "Effectiveness",
      updaterecordid: 1, //Id to be passed back to update the record
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
      actionplandescription: "I will ensure i am highly effective"
    },
    {
      id: "2",
      competencyitem: "Knowledge & Skills",
      updaterecordid: 2, //Id to be passed back to update the record
      proficiencylevel: "Skilled",
      competencyitemdetails: [
        {
          id: "4",
          description:
            "Displays competence that specifies the relevant technical or professional knowledge and skills"
        }
      ],
      actionplandescription: "I will not sleep at work"
    },
    {
      id: "3",
      competencyitem: "Accountability",
      updaterecordid: 3, //Id to be passed back to update the record (action plan in this case)
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
      actionplandescription: "I will not steal government money"
    }
  ]
};
