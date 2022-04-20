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
  if (users.filter(user => user.house === "Gryffindor")){
    console.log("Gryffindor")
  }else if(user => user.house = "Slytherin"){
    console.log("Slytherin")
  } else if (user => user.house === "Ravenclaw"){
    
    console.log("Ravenclaw")
  }else if (user => user.house === "Hufflepuff"){
    
      console.log("Hufflepuff")
    
}
}

potionClass();
renderTeachers() 





async function renderUsersG() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.house === "Gryffindor") && (user.hogwartsStudent === true) && (user.alive === true) && (user.yearOfBirth) ){
      let htmlSegment = `<div class="Gborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${ "2020" - user.yearOfBirth}</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    } else if ((user.house === "Gryffindor") && (user.hogwartsStudent === true) && (user.alive === true)){
      let htmlSegment = `<div class="Gborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;
      html += htmlSegment;
    }else if ((user.house === "Gryffindor") && (user.hogwartsStudent === true) && (user.alive === false)){
      let htmlSegment = `<div class="Gborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h3>Dead</h3></li>
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
    if((user.house === "Slytherin") && (user.hogwartsStudent === true) && (user.alive === true) && (user.yearOfBirth) ){
      let htmlSegment = `<div class="Sborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${"2020" - user.yearOfBirth}</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } else if ((user.house === "Slytherin") && (user.hogwartsStudent === true) && (user.alive === true)){
      let htmlSegment = `<div class="Sborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;
      html += htmlSegment;
    }else if ((user.house === "Slytherin") && (user.hogwartsStudent === true) && (user.alive === false)){
      let htmlSegment = `<div class="Sborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h3>Dead</h3></li>
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
    if((user.house === "Ravenclaw") && (user.hogwartsStudent === true) && (user.alive === true) && (user.yearOfBirth) ){
      let htmlSegment = `<div class="Rborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${"2020" - user.yearOfBirth}</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } else if ((user.house === "Ravenclaw") && (user.hogwartsStudent === true) && (user.alive === true)){
      let htmlSegment = `<div class="Rborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;
      html += htmlSegment;
    }else if ((user.house === "Ravenclaw") && (user.hogwartsStudent === true) && (user.alive === false)){
      let htmlSegment = `<div class="Rborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h3>Dead</h3></li>
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
    if((user.house === "Hufflepuff") && (user.hogwartsStudent === true) && (user.alive === true) && (user.yearOfBirth) ){
      let htmlSegment = `
      <div class="Hborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2 class="student">Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${"2020" - user.yearOfBirth} </h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } else if ((user.house === "Hufflepuff") && (user.hogwartsStudent === true) && (user.alive === true)){
      let htmlSegment = `
      <div class="Hborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2 class="student">Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;
      html += htmlSegment;
    }else if ((user.house === "Hufflepuff") && (user.hogwartsStudent === true) && (user.alive === false)){
      let htmlSegment = `
      <div class="Hborder">
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2 class="student">Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h3>Dead</h3></li>
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
      <div class="card" id="${user.name}">
      <img class="pfp" src="${user.image}"</img>
        <div class="container">
        <ul>
        <li><h2>Name:${user.name}</h2></li>
        <li><h2>House:${user.house}</h2></li>
        <li><h2>Age:${"2020" - user.yearOfBirth} </h2></li>
        <li><h2>Alive</h2></li>
          </ul>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    } 
  });

  let container = document.querySelector('.container-Potion');
  container.innerHTML = html;
}

/**async function renderTeachers() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.hogwartsStudent === false) && (user.patronus)){
      let htmlSegment = `<div class="Gborder">
      <div class="teacher-card tooltip" id="${user.name}">
      <img class="pfp" src="${user.image}"></img>
      <span class="tooltiptext">${user.patronus}</span>
        <div class="container">
        <ul>
        <li><input class="teacher-Info" placeholder="${user.name}"></li>
        <li><input class="teacher-Info" placeholder="${user.house}"></li>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    } else if (user.hogwartsStudent === false){
      let htmlSegment = `<div class="Gborder">
      <div class="teacher-card " id="${user.name}">
      <img class="pfp" src="${user.image}"></img>
        <div class="container">
        <ul>
        <li><input class="teacher-Info" placeholder="${user.name}"></li>
        <li><input class="teacher-Info" placeholder="${user.house}"></li>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    }
  });
  let container = document.querySelector('.container-Teachers');
  container.innerHTML = html;
}
*/

async function renderTeachers() {
  let users = await getStudents();
  let html = '';
  users.forEach(user => {
    if((user.hogwartsStudent === false) && (user.patronus)){
      let htmlSegment = `<div class="Gborder">
      <div class="teacher-card tooltip" id="${user.name}">
      <img class="pfp" src="${user.image}"></img>
      <span class="tooltiptext">${user.patronus}</span>
        <div class="container">
        <ul>
        <li><h2 contenteditable="true">${user.name}</h2></li>
        <li><h2 contenteditable="true">${user.house}</h2></li>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    } else if (user.hogwartsStudent === false){
      let htmlSegment = `<div class="Gborder">
      <div class="teacher-card " id="${user.name}">
      <img class="pfp" src="${user.image}"></img>
        <div class="container">
        <ul>
        <li><h2 contenteditable="true">${user.name}</h2></li>
        <li><h2 contenteditable="true">${user.house}</h2></li>
        </div>
      </div>
      </div>`;

      html += htmlSegment;
    
    }
  });
  let container = document.querySelector('.container-Teachers');
  container.innerHTML = html;
}




















function search_student() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}