export const jobholderevaluation = {
  id: 1, //Evaluation Master ID
  //Kpis for the jobholder and the commitments set by the supervisor on them
  kpicommitments: [
    {
      kpi: "Budget Variance",
      commitment: "Not exceeding 10% of approved Budget"
    },
    {
      kpi: "IT Expense to Income Ratio",
      commitment: "Not exceeding 8%"
    },
    {
      kpi: "Stakeholder Relationship Mgt",
      commitment: "Above 50%"
    }
  ],
  functionalcompetencies: [
    {
      id: 1,
      description: "Business Continuity"
    },
    {
      id: 2,
      description: "IT Architecture Standards"
    },
    {
      id: 3,
      description: "Applications and Infrastructure Mgt"
    }
  ],
  jobholderassesment: null,
  jobholderstrengths: "", //To be filled by supervisor
  jobholderimprovementareas: "" //To be filled by supervisor
};
