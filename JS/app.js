const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const baseURL = `https://jsonplaceholder.typicode.com/users`;

const dataSet = [
  {
    projectId: "ABC1230",
    title: "Prosper Middle School",
    description:
      "Areas Addressed: Additional Safety & Security, Facility Maintenance, Refresh & Renewal, Recruitment & Retention",
    category: "Security",
    campus: "N/A",
    campusType: "Middle School",
    projectBudget: 56632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 56652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1231",
    title: "Frisco SomeWhat Middle School",
    description:
      "Areas Addressed: Additional Safety & Security, Facility Maintenance, Refresh & Renewal, Recruitment & Retention",
    category: "Security",
    campus: "N/A",
    campusType: "Middle School",
    projectBudget: 26632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 26652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1232",
    title: "Independence W. Elementary School",
    description:
      "Areas Addressed: Additional Safety & Security, Facility Maintenance, Refresh & Renewal, Recruitment & Retention",
    category: "Security",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 35632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 37652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1233",
    title: "Independence W. Middle School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Schools",
    campus: "N/A",
    campusType: "Middle School",
    projectBudget: 35632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 37652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1234",
    title: "Custer W. High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center. ",
    category: "New Schools",
    campus: "N/A",
    campusType: "High School",
    projectBudget: 36632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 36652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1235",
    title: "Frisco Elementary School",
    description:
      "Maintain regular preventative maintenance, repair and replacement cycles for buildings",
    category: "Renovation",
    campus: "N/A",
    campusType: "Elementary School",
    projectBudget: 16632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 19652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1236",
    title: "Main ST Middle School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center.Projected Cost: $28 million ",
    category: "New Schools",
    campus: "N/A",
    campusType: "Middle School",
    projectBudget: 50632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 50652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1237",
    title: "Abraham Lincoln Frisco High School",
    description:
      "Areas Addressed: Additional Safety & Security, Facility Maintenance, Refresh & Renewal, Recruitment & Retention",
    category: "Security",
    campus: "N/A",
    campusType: "High School",
    projectBudget: 21632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 27652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1238",
    title: "Navy Frisco High School",
    description:
      "Areas Addressed: Additional Safety & Security, Facility Maintenance, Refresh & Renewal, Recruitment & Retention",
    category: "Security",
    campus: "N/A",
    campusType: "High School",
    projectBudget: 29632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 29652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1239",
    title: "Military Frisco High School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center.Projected Cost: $28 million ",
    category: "New Schools",
    campus: "N/A",
    campusType: "High School",
    projectBudget: 23632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 24652000,
    actualCompletion: "MM/DD/YYYY",
  },
  {
    projectId: "ABC1240",
    title: "Waren Universal Middle School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center.Projected Cost: $28 million ",
    category: "New Schools",
    campus: "N/A",
    campusType: "Middle School",
    projectBudget: 30632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 30652000,
    actualCompletion: "MM/DD/YYYY",
  },
];

const findMatches = (wordToMatch, dataSet) => {
  return dataSet.filter((data) => {
    //regex
    const regex = new RegExp(wordToMatch, "gi");

    return (
      data.title.match(regex) ||
      data.campusType.match(regex) ||
      data.category.match(regex)
    );
  });
};

function displayMatches() {
  const matchArray = findMatches(this.value, dataSet);

  const html = matchArray
    .map((data) => {
      return `
      <div class="searched-items">
        <li>
          <span class="name"><span class="title">Title:</span> ${data.title}</span>
        </li>
        <li>
          <span class="email"><span class="title-2">Campus Type</span> ${data.campusType}</span>
          <span class="email"><span class="title">Category:</span> ${data.category}</span>
        </li>
      </div>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const errorMSG = document.querySelector("#error");

function selectDropdown() {
  const dataType = document.getElementById("dataType");
  const selectedValue = dataType.options[dataType.selectedIndex].value;

  if (selectedValue == "selectCard") {
    // alert("selectCard");

    const html2 = dataSet
      .map((data) => {
        return `
            <div class="searched-items">
              <li>
                <span class="name"><span class="title">Title:</span> ${data.title}</span>
              </li>
              <li>
                <span class="email"><span class="title-2">Campus Type</span> ${data.campusType}</span>
                <span class="email"><span class="title">Category:</span> ${data.category}</span>
              </li>
            </div>
            `;
      })
      .join("");
    suggestions.innerHTML = html2;
  } else if (selectedValue == "title") {
    const html3 = dataSet
      .map((data) => {
        return `
            <li>
            <span class="email">${data.campusType}</span>
            </li>
            `;
      })
      .join("");
    suggestions.innerHTML = html3;
  } else if (selectedValue == "campusType") {
    const html4 = dataSet
      .map((data) => {
        return `
            <li>
            <span class="email">${data.title}</span>
            </li>
            `;
      })
      .join("");
    suggestions.innerHTML = html4;
  }
}

searchInput.addEventListener("keyup", displayMatches);
