/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Possible Freelancers
const freeLanceName = [
  "Renaee",
  "Connor",
  "Anne",
  "Jim",
  "Cayden",
  "George",
  "Roy",
  "Patti",
  "Karen",
  "Nick",
  "Jeff",
  "Gerta",
  "Kiara",
  "John",
];

const freeLanceOccupation = [
  "Writer",
  "Designer",
  "Tutor",
  "Programmer",
  "Engineer",
];
const freeLanceRate = [90, 50, 30, 45, 60, 35, 40, 70, 55, 65, 80];
const maxList = 15;

const freeLancersList = [
  { name: "Alice", occupation: "Writer", rate: 30 },

  { name: "Bob", occupation: "Teacher", rate: 50 },
];

// `setInterval` will call `addFreelancer` every 1000 milliseconds (2 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.

const addFreelancerIntervalId = setInterval(addIntervalFreelancer, 2000);

init(); // We call this function once to create the initial state

function addHeader(parent, size, headerText, idValue) {
  // Assuming size will be in 1 - 6, not safe assumption I recognize
  const headerSize = "h" + size;
  const newHeader = document.createElement(headerSize);
  newHeader.id = idValue;
  newHeader.textContent = headerText;
  newHeader.style.textAlign = "center";
  console.log(`${headerSize} for ${headerText}`);

  parent.append(newHeader);

  // TODO - add bold/font attributes
}

function addDiv(parent, idValue) {
  const newDiv = document.createElement("div");
  newDiv.id = idValue;
  newDiv.backgroundColor = "grey";
  newDiv.style.alignContent = "center";
  newDiv.style.padding = "5vw 5vw 5vw 5vw";

  /* create the grid */
  newDiv.style.display = "grid";
  newDiv.style.gridAutoRows = "max-content";
  newDiv.style.gridAutoColumns = "30vw";
  newDiv.style.columnGap = "2vw";

  parent.append(newDiv);
}

function addFreelancerRows(parent, headerRow = true) {
  let newFreelancerRow = [
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
  ];

  if (headerRow === true) {
    newFreelancerRow[0].textContent = "Name";
    newFreelancerRow[0].style.textAlign = "center";
    newFreelancerRow[0].style.fontWeight = "800";
    newFreelancerRow[0].style.fontSize = "x-large";
    newFreelancerRow[0].style.gridColumn = "1 / 2";
    newFreelancerRow[0].style.gridRow = "1 / 2";

    newFreelancerRow[1].textContent = "Occupation";
    newFreelancerRow[1].style.textAlign = "center";
    newFreelancerRow[1].style.fontWeight = "800";
    newFreelancerRow[1].style.fontSize = "x-large";
    newFreelancerRow[1].style.gridColumn = "2 / 3";
    newFreelancerRow[1].style.gridRow = "1 / 2";

    newFreelancerRow[2].textContent = "Starting Price";
    newFreelancerRow[2].style.textAlign = "center";
    newFreelancerRow[2].style.fontWeight = "800";
    newFreelancerRow[2].style.fontSize = "x-large";
    newFreelancerRow[2].style.gridColumn = "3 / 4";
    newFreelancerRow[2].style.gridRow = "1 / 2";

    newFreelancerRow.forEach((element) => parent.append(element));
  }

  for (index = 0; index < freeLancersList.length; index++) {
    addFreelancer(parent, freeLancersList[index]);
  }
}

/**
 * Initialize the first setup for the window
 **/
function init() {
  const bodyToFill = document.querySelector("body");
  bodyToFill.style.backgroundColor = "lightblue";
  bodyToFill.style.height = "95vh";
  bodyToFill.style.width = "95vw";
  bodyToFill.style.color = "black";

  // Add the headers
  addHeader(bodyToFill, "1", "Freelancer Forum", "mainHeader");
  addHeader(
    bodyToFill,
    "3",
    `The average starting price is $${averageFreelancerRate().toFixed(2)}`,
    "rateHeader"
  );
  addHeader(bodyToFill, "2", "Available Freelancers", "availHeader");

  // add the list div container and the first set freelancer rows to the display
  let listDivId = "listDiv";
  addDiv(bodyToFill, listDivId);
  let divFreelancerList = document.querySelector("#" + listDivId);
  let headerRow = true;
  addFreelancerRows(divFreelancerList, headerRow);
}

/**
 * Add a random free lancer to the freelancer array ...
 */

function averageFreelancerRate() {
  /* use the global freelancer list to calculate the current average rate to display */

  let avgRate = 0;
  for (index = 0; index < freeLancersList.length; index++) {
    avgRate += freeLancersList[index].rate;

    console.log(avgRate);
    console.log(freeLancersList[index].rate);
  }

  avgRate /= freeLancersList.length;
  return avgRate;
}

function addIntervalFreelancer() {
  const name = freeLanceName[Math.floor(Math.random() * freeLanceName.length)];
  const occupation =
    freeLanceOccupation[Math.floor(Math.random() * freeLanceOccupation.length)];
  const rate = freeLanceRate[Math.floor(Math.random() * freeLanceRate.length)];

  freeLancersList.push({ name: name, occupation: occupation, rate: rate });

  if (freeLancersList.length >= maxList) {
    clearInterval(addFreelancerIntervalId);
  }

  // add the new freelancer
  let divFreelancerList = document.querySelector("#listDiv");
  addFreelancer(divFreelancerList, freeLancersList[freeLancersList.length - 1]);

  // update the average rate
  let currentRateHeader = document.querySelector("#rateHeader");
  currentRateHeader.textContent = `The average starting price is $${averageFreelancerRate().toFixed(
    2
  )}`;
}

function addFreelancer(parent, currentFreeLancer) {
  let newFreelancerRow = [
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
  ];

  for (innerIndex = 0; innerIndex < newFreelancerRow.length; innerIndex++) {
    newFreelancerRow[innerIndex].style.textAlign = "center";
    newFreelancerRow[innerIndex].style.fontWeight = "400";
    newFreelancerRow[innerIndex].style.fontSize = "large";
  }

  newFreelancerRow[0].textContent = currentFreeLancer.name;
  newFreelancerRow[1].textContent = currentFreeLancer.occupation;
  newFreelancerRow[2].textContent = currentFreeLancer.rate.toFixed(2);
  newFreelancerRow.forEach((element) => parent.append(element));
}
