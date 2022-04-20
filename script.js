let studentArray = [];

async function getStudents(url) {
  const student = await fetch(url);
  const jsondata = await student.json();
  jsondata.forEach((student) => {
    studentArray.push(student);
  });
}

function listStudents() {
  const student = document.getElementById("name");
  for (let i = 0; i < studentArray.length; i++) {
    if (
      studentArray[i].alive == false &&
      studentArray[i].yearOfBirth == "" &&
      studentArray[i].house == ""
    ) {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
      <ul>
      <li><h2>Name:${studentArray[i].name}</h2></li>
      <li><h2>House:Missing</h2></li>
      <li><h2>Age:Unknown</h2></li>
      <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    } else if (
      studentArray[i].alive == false &&
      studentArray[i].yearOfBirth == ""
    ) {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${studentArray[i].name}</h2></li>
        <li><h2>House:${studentArray[i].house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    } else if (studentArray[i].alive == false) {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${studentArray[i].name}</h2></li>
        <li><h2>House:${studentArray[i].house}</h2></li>
        <li><h2>Age:${studentArray[i].yearOfBirth}</h2></li>
        <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    } else if (
      studentArray[i].yearOfBirth == "" &&
      studentArray[i].house == ""
    ) {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${studentArray[i].name}</h2></li>
        <li><h2>House:Missing</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    } else if (studentArray[i].yearOfBirth == "") {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${studentArray[i].name}</h2></li>
        <li><h2>House:${studentArray[i].house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    } else {
      student.innerHTML += `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${studentArray[i].name}</h2></li>
        <li><h2>House:${studentArray[i].house}</h2></li>
        <li><h2>Age:${studentArray[i].yearOfBirth}</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    }
  }
}

getStudents("http://hp-api.herokuapp.com/api/characters/students").then(() => {
  listStudents();
});


var staff = document.getElementById("charecter");

charecterArray = [];

function addCharecter() {
  let nameInput = document.getElementById("name");
  let houseInput = document.getElementById("house");
  let patronusInput = document.getElementById("patronus");

  charecterArray.push({
    name: nameInput,
    house: houseInput,
    patronus: patronusInput,
  });

  charecters();
}

function charecters() {
  charecter.innerHTML = "";
  for (let i = 0; i < charecterArray.length; i++)
    charecter.innerHTML += `<li>
        <p>${charecterArray[i].name}</p>
      </li>`;
  for (let i = 0; i < charecterArray.length; i++)
    charecter.innerHTML += `<li>
        <p>${charecterArray[i].house}</p>
      </li>`;
  for (let i = 0; i < charecterArray.length; i++)
    charecter.innerHTML += `<li>
        <p>${charecterArray[i].patronus}</p><button class = "delete-button" id="delete" onclick="deleteCharecter(${i})">Delete</button>
      </li>`;
}

function deleteCharecter(i) {
  if (prompt("Vil du slette karakter? ja/nei") == "ja") {
    charecterArray.splice(i, 1);
    charecters();
  } else if ("nei") {
  }
}