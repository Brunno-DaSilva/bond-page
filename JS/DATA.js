export const BOND_DATA = [
  {
    projectId: "ABC1234",
    title: "2021 New High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Buildings",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 26632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 26652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1235",
    title: "2021 New High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Buildings",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 26632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 26652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1236",
    title: "2021 New High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Buildings",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 26632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 26652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1237",
    title: "2021 New High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Buildings",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 26632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 26652000,
    actualCompletion: "MM/DD/YYYY",
  },
];

export function getData() {
  fetch("https://randomuser.me/api/?gender=female&results=10")
    .then((res) => {
      res.json();
    })
    .then((response) => {
      console.log(response);
    });
}
