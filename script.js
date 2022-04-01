let characterArray = [];

async function getcharacters(url) {
  const character = await fetch(url);
  const jsondata = await character.json();
  jsondata.forEach((character) => {
    characterArray.push(character);
  });
}

function listCharacters() {
  const character = document.getElementById("name");
  for (let i = 0; i < characterArray.length; i++) {
    if ((characterArray[i].alive == false) && (characterArray[i].yearOfBirth == "") && (characterArray[i].house == "") ) {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
      <ul>
      <li><h2>Name:${characterArray[i].name}</h2></li>
      <li><h2>House:Missing</h2></li>
      <li><h2>Age:Unknown</h2></li>
      <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    } else if ((characterArray[i].alive == false) && (characterArray[i].yearOfBirth == "")) {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${characterArray[i].name}</h2></li>
        <li><h2>House:${characterArray[i].house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    }else if ((characterArray[i].alive == false)) {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${characterArray[i].name}</h2></li>
        <li><h2>House:${characterArray[i].house}</h2></li>
        <li><h2>Age:${characterArray[i].yearOfBirth}</h2></li>
        <li><h3>Dead</h3></li>
        </ul>
      </div>
    </div>`;
    } else if ((characterArray[i].yearOfBirth == "") && (characterArray[i].house == "")) {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${characterArray[i].name}</h2></li>
        <li><h2>House:Missing</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    }else if (characterArray[i].yearOfBirth == "") {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${characterArray[i].name}</h2></li>
        <li><h2>House:${characterArray[i].house}</h2></li>
        <li><h2>Age:Unknown</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    } else {
      character.innerHTML += `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <ul>
        <li><h2>Name:${characterArray[i].name}</h2></li>
        <li><h2>House:${characterArray[i].house}</h2></li>
        <li><h2>Age:${characterArray[i].yearOfBirth}</h2></li>
        <li><h4>Alive</h4></li>
        </ul>
      </div>
    </div>`;
    }
  }
}

getcharacters("http://hp-api.herokuapp.com/api/characters").then(() => {
  listCharacters();
});
