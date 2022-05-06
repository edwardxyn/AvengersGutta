// async function getStudents() {
//   let url = "http://hp-api.herokuapp.com/api/characters";
//   try {
//     let res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// /** No clue how to make this work */
// async function filterHouses() {
//   let users = await getStudents();
//   if (users.filter((user) => user.house === "Gryffindor")) {
//     console.log("Gryffindor");
//   }
//   if ((user) => user.house === "Slytherin") {
//     console.log("Slytherin");
//   }
//   if ((user) => user.house === "Ravenclaw") {
//     console.log("Ravenclaw");
//   }
//   if ((user) => user.house === "Hufflepuff") {
//     console.log("Hufflepuff");
//   }
//   if ((user) => user.house === "") {
//     console.log("No house");
//   }
// }

// var gryffindorArray = [];
// var slytherinArray = [];
// var ravenclawArray = [];
// var hufflepuffArray = [];
// var teacherArray = [];

// potionClass();
// renderTeachers();
// filterHouses();
// studentRender();
// teacherRender();

// /** Function only places students into an array, but functions themselves do not use the array itself to produce student cards, this also goes for the teacher array function */
// async function studentRender() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (user.hogwartsStudent === true && user.house === "Gryffindor") {
//       let htmlSegment = ``;

//       html += htmlSegment;
//       gryffindorArray.push({
//         name: user.name,
//       });
//     }
//     if (user.hogwartsStudent === true && user.house === "Slytherin") {
//       let htmlSegment = ``;

//       html += htmlSegment;
//       slytherinArray.push({
//         name: user.name,
//       });
//     }
//     if (user.hogwartsStudent === true && user.house === "Ravenclaw") {
//       let htmlSegment = ``;

//       html += htmlSegment;
//       ravenclawArray.push({
//         name: user.name,
//       });
//     }
//     if (user.hogwartsStudent === true && user.house === "Hufflepuff") {
//       let htmlSegment = ``;

//       html += htmlSegment;
//       hufflepuffArray.push({
//         name: user.name,
//       });
//     }
//   });
//   let container = document.querySelector(".container");
//   container.innerHTML = html;
//   console.log(gryffindorArray, slytherinArray, hufflepuffArray, ravenclawArray);
// }

// async function teacherRender() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (user.hogwartsStudent === false) {
//       let htmlSegment = ``;

//       html += htmlSegment;
//       teacherArray.push({
//         name: user.name,
//       });
//     }
//   });
//   let container = document.querySelector(".container");
//   container.innerHTML = html;
//   console.log(teacherArray);
// }

// /** Function for generating student cards for students in Gryffindor */
// async function renderUsersG() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (
//       user.house === "Gryffindor" &&
//       user.hogwartsStudent === true &&
//       user.alive === true &&
//       user.yearOfBirth
//     ) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:${"2020" - user.yearOfBirth}</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//         </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (
//       user.house === "Gryffindor" &&
//       user.hogwartsStudent === true &&
//       user.alive === true
//     ) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card ${user.house}" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:Unknown</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     } else if (
//       user.house === "Gryffindor" &&
//       user.hogwartsStudent === true &&
//       user.alive === false
//     ) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h3>Dead</h3></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     }
//   });

//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }
// /** Function for generating student cards for students in Slytherin */
// async function renderUsersS() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (
//       user.house === "Slytherin" &&
//       user.hogwartsStudent === true &&
//       user.alive === true &&
//       user.yearOfBirth
//     ) {
//       let htmlSegment = `<div class="Sborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:${"2020" - user.yearOfBirth}</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (
//       user.house === "Slytherin" &&
//       user.hogwartsStudent === true &&
//       user.alive === true
//     ) {
//       let htmlSegment = `<div class="Sborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:Unknown</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     } else if (
//       user.house === "Slytherin" &&
//       user.hogwartsStudent === true &&
//       user.alive === false
//     ) {
//       let htmlSegment = `<div class="Sborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h3>Dead</h3></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     }
//   });

//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }

// /** Function for generating student cards for students in Ravenclaw */
// async function renderUsersR() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (
//       user.house === "Ravenclaw" &&
//       user.hogwartsStudent === true &&
//       user.alive === true &&
//       user.yearOfBirth
//     ) {
//       let htmlSegment = `<div class="Rborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:${"2020" - user.yearOfBirth}</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (
//       user.house === "Ravenclaw" &&
//       user.hogwartsStudent === true &&
//       user.alive === true
//     ) {
//       let htmlSegment = `<div class="Rborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:Unknown</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     } else if (
//       user.house === "Ravenclaw" &&
//       user.hogwartsStudent === true &&
//       user.alive === false
//     ) {
//       let htmlSegment = `<div class="Rborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h3>Dead</h3></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     }
//   });

//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }

// /** Function for generating student cards for students in Hufflepuff */
// async function renderUsersH() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (
//       user.house === "Hufflepuff" &&
//       user.hogwartsStudent === true &&
//       user.alive === true &&
//       user.yearOfBirth
//     ) {
//       let htmlSegment = `
//       <div class="Hborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2 class="student">${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:${"2020" - user.yearOfBirth} </h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (
//       user.house === "Hufflepuff" &&
//       user.hogwartsStudent === true &&
//       user.alive === true
//     ) {
//       let htmlSegment = `
//       <div class="Hborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2 class="student">${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:Unknown</h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     } else if (
//       user.house === "Hufflepuff" &&
//       user.hogwartsStudent === true &&
//       user.alive === false
//     ) {
//       let htmlSegment = `
//       <div class="Hborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2 class="student">${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h3>Dead</h3></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;
//       html += htmlSegment;
//     }
//   });

//   let container = document.querySelector(".container");
//   container.innerHTML = html;
// }

// async function potionClass() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (user.name === "Severus Snape") {
//       let htmlSegment = `<div class="Hborder">
//       <div class="card ${user.house}"" id="${user.name}">
//       <img class="pfp" src="${user.image}"</img>
//         <div class="container-inf">
//         <ul>
//         <li><h2>${user.name}</h2></li>
//         <li><h2>${user.house}</h2></li>
//         <li><h2>Age:${"2020" - user.yearOfBirth} </h2></li>
//         <li><h2>Alive</h2></li>
//           </ul>
//           </div><button id="delete-btn" onclick="deleteButton()">Delete</button></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     }
//   });

//   let container = document.querySelector(".container-Potion");
//   container.innerHTML = html;
// }

// /**async function renderTeachers() {
//   let users = await getStudents();
//   let html = '';
//   users.forEach(user => {
//     if((user.hogwartsStudent === false) && (user.patronus)){
//       let htmlSegment = `<div class="Gborder">
//       <div class="card tooltip" id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//       <span class="tooltiptext">${user.patronus}</span>
//         <div class="container">
//         <ul>
//         <li><input class="teacher-Info" placeholder="${user.name}"></li>
//         <li><input class="teacher-Info" placeholder="${user.house}"></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
    
//     } else if (user.hogwartsStudent === false){
//       let htmlSegment = `<div class="Gborder">
//       <div class="card " id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//         <div class="container">
//         <ul>
//         <li><input class="teacher-Info" placeholder="${user.name}"></li>
//         <li><input class="teacher-Info" placeholder="${user.house}"></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
    
//     }
//   });
//   let container = document.querySelector('.container-Teachers');
//   container.innerHTML = html;
// }
// */

// /** Function for generating teacher cards */
// async function renderTeachers() {
//   let users = await getStudents();
//   let html = "";
//   users.forEach((user) => {
//     if (user.hogwartsStudent === false && user.patronus && user.house) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card tooltip ${user.house}" id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//       <span class="tooltiptext">${user.patronus}</span>
//         <div class="container-inf">
//         <ul>
//         <li><h2 contenteditable="true">${user.name}</h2></li>
//         <li><h2 contenteditable="true">${user.house}</h2></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (user.hogwartsStudent === false && user.house) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card ${user.house}" id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//         <div class="container-inf">
//         <ul>
//         <li><h2 contenteditable="true">${user.name}</h2></li>
//         <li><h2 contenteditable="true">${user.house}</h2></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (
//       user.hogwartsStudent === false &&
//       user.house === "" &&
//       user.patronus
//     ) {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card Default-house tooltip" id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//       <span class="tooltiptext">${user.patronus}</span>
//         <div class="container-inf">
//         <ul>
//         <li><h2 contenteditable="true">${user.name}</h2></li>
//         <li><h2 contenteditable="true">${user.house}</h2></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     } else if (user.hogwartsStudent === false && user.house === "") {
//       let htmlSegment = `<div class="Gborder">
//       <div class="card Default-house" id="${user.name}">
//       <img class="pfp" src="${user.image}"></img>
//         <div class="container-inf">
//         <ul>
//         <li><h2 contenteditable="true">${user.name}</h2></li>
//         <li><h2 contenteditable="true">${user.house}</h2></li>
//         </div>
//       </div>
//       </div>`;

//       html += htmlSegment;
//     }
//   });
//   let container = document.querySelector(".container-Teachers");
//   container.innerHTML = html;
// }

// /** Search function, using card classes based on student name generation */
// function search_student() {
//   let input = document.getElementById("searchbar").value;
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName("card");

//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "list-item";
//     }
//   }
// }

// /** delete button start !!Currently not working!! currently just deletes 1 element from the array, as functions do not use the array to produce cards, i am unsure how to delete a card of the selected studen with this function */
// function deleteButton(i) {
//   let del = "Are you sure you want to delete the selected item?";
//   if (confirm(del) == true) {
//     gryffindorArray.splice(i, 1);
//     renderUsersG();
//   } else {
//     alert;
//   }
//   console.log(gryffindorArray);
// }
