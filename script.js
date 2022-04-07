async function getStudents() {
  let url = 'http://hp-api.herokuapp.com/api/characters';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}




async function filterHouses() {
  let users = await getStudents();
  const result = users.filter(user => user.house === "Gryffindor" )
  console.log(result)
}

filterHouses();
potionClass();
renderTeachers()





async function renderUsersG() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.house === "Gryffindor") && (user.hogwartsStudent === true)){
      let htmlSegment = `<div class="Gborder">
      <div class="card">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
        <li><h2>${user.alive}</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    } 
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

async function renderUsersS() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.house === "Slytherin") && (user.hogwartsStudent === true)){
      let htmlSegment = `<div class="Sborder">
      <div class="card">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
        <li><h2>${user.alive}</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } 
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}
async function renderUsersR() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.house === "Ravenclaw") && (user.hogwartsStudent === true)){
      let htmlSegment = `<div class="Rborder">
      <div class="card">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${user.yearOfBirth} - "2020"</h2></li>
        <li><h2>${user.alive}</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } 
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}
async function renderUsersH() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.house === "Hufflepuff") && (user.hogwartsStudent === true)){
      let htmlSegment = `<div class="Hborder">
      <div class="card">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${user.yearOfBirth} - "2020"</h2></li>
        <li><h2>${user.alive}</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } 
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

async function potionClass() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.name === "Severus Snape")){
      let htmlSegment = `<div class="Hborder">
      <div class="card">
      <img class="pfp" src="${user.image}" onclick="startClass()"></img>
      <ul>
        <li><h2>${user.name}</h2></li>
          </ul>
        <div class="container">
        
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } 
  });

  let container = document.querySelector('.container-Potion');
  container.innerHTML = html;
}

async function renderTeachers() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.hogwartsStudent === false)){
      let htmlSegment = `<div class="Gborder">
      <div class="card">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${user.yearOfBirth - "2020"}</h2></li>
        <li><h2>${user.alive}</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    } 
  });
  let container = document.querySelector('.container-Teachers');
  container.innerHTML = html;
}


