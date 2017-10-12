export const performanceappraisal = [
  {
    id: 1,
    performancetype: "Financial",
    description: "Financial Performance Measurement for HR",
    status: "Pending",
    lineitems: [
      {
        id: 1,
        kpi: "Staff Cost to Income Ratio",
        weight: 5.0,
        //Entered in by supervisor
        commitment: 28.0,
        computationbasis:
          "(Total Staff Cost/Total Income for the Period) * 100",
        rating: 4
      },
      {
        id: 2,
        kpi: "Budget Variance",
        computationbasis: "(Actual Expenditure - Budgeted Expenditure)",
        weight: 10.0,
        //Entered in by supervisor
        commitment: 90.0,
        rating: 8
      }
    ]
  },
  {
    id: 2,
    performancetype: "Learning and Development",
    description: "Learning and Development Performance Measurement for HR",
    status: "Pending",
    lineitems: [
      {
        id: 12,
        kpi: "Company-wide Training Coverage",
        weight: 5.0,
        computationbasis: "Employee Satisfaction survey score",
        //Entered in by supervisor
        commitment: 38.0,
        rating: 3
      },
      {
        id: 13,
        kpi: "Development of Individual Learning & Development Schedule",
        weight: 10.0,
        computationbasis: "Punctuality Index",
        //Entered in by supervisor
        commitment: 50.0,
        rating: 6
      }
    ]
  }
];
