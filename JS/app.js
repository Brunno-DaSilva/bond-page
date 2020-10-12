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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505291/neonbrand-zFSo6bnZJTw-unsplash_1_q3dvgg.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1602436709/small-libra_p0at5d.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505164/deleece-cook-zzjLGF_6dx4-unsplash_1_hjkqeh.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505085/tim-mossholder-WE_Kv_ZB1l0-unsplash_1_x8iqrj.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505052/cdc-GDokEYnOfnE-unsplash_1_fmcyhc.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598505021/ben-mullins-je240KkJIuA-unsplash_1_svdhzv.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598504075/friscoISD_sezpau.png",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1598502460/pencil_sl098k.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1602433185/hamilton-hs_siuobu.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1602433230/hc-const_vxrkcn.jpg",
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
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1602433275/hc-bus_znhbco.jpg",
  },
  {
    projectId: "ABC1241",
    title: "Land for Future School",
    description:
      "The new school will be located on donated land on the western side of the Texas Medical Center.Projected Cost: $28 million ",
    category: "New Schools",
    campus: "N/A",
    campusType: "Other",
    projectBudget: 40632000,
    isCompleted: false,
    projectCompletion: "MM/DD/YYYY",
    completionPercent: 90,
    finalCost: 45652000,
    actualCompletion: "MM/DD/YYYY",
    img:
      "https://res.cloudinary.com/duprwuo4j/image/upload/v1602436864/small-hs-plano_x3hktu.jpg",
  },
];

const htmlData = (data) => {
  return `
  <div class="searched-items">
    <div class="items-head">
    <div>
      <img src=${data.img} alt=${data.title} />
    </div>
      <div class="item-wrapper">
        <span class="item-title">
          Title:
        </span> 
        <span class="item">
          ${data.title}
        </span>
      </div>
    </div>
    <div class="items-body">
      <div class="item-wrapper">
        <span class="item-title">Campus Type: </span> 
        <span class="item">${data.campusType}</span>
      </div>
      <div class="item-wrapper">
        <span class="item-title">Category:</span> 
        <span class="item">${data.category}</span>
      </div>
      <div class="item-wrapper">
        <span class="item-title">Category:</span> 
        <span class="item">${data.category}</span>
      </div>
    </div>
  </div>
  `;
};

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
      return htmlData(data);
    })
    .join("");
  suggestions.innerHTML = html;
}

const errorMSG = document.querySelector("#error");

function selectDropdown() {
  const dataType = document.getElementById("dataType");
  const selectedValue = dataType.options[dataType.selectedIndex].value;

  if (selectedValue == "selectAll") {
    // alert("selectCard");

    const html2 = dataSet
      .map((data) => {
        return htmlData(data);
      })
      .join("");
    suggestions.innerHTML = html2;
  } else if (selectedValue == "highSchool") {
    const html3 = dataSet
      .map((data) => {
        if (data.campusType.match(/\b(\w*High\w*)\b/g)) {
          return htmlData(data);
        }
      })
      .join("");

    suggestions.innerHTML = html3;
  } else if (selectedValue == "elementarySchool") {
    const html4 = dataSet
      .map((data) => {
        if (data.campusType.match(/\b(\w*Elementary\w*)\b/g)) {
          return htmlData(data);
        }
      })
      .join("");
    suggestions.innerHTML = html4;
  } else if (selectedValue == "middleSchool") {
    const html5 = dataSet
      .map((data) => {
        if (data.campusType.match(/\b(\w*Middle\w*)\b/gi)) {
          return htmlData(data);
        }
      })
      .join("");
    suggestions.innerHTML = html5;
  } else if (selectedValue == "other") {
    const html6 = dataSet
      .map((data) => {
        if (data.campusType.match(/\b(\w*Other\w*)\b/gi)) {
          return htmlData(data);
        }
      })
      .join("");
    suggestions.innerHTML = html6;
  }
}

searchInput.addEventListener("keyup", displayMatches);
