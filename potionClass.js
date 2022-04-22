//Severus Snape (id=teacher):

let characterArray = [];

async function getcharacters(url) {
  const character = await fetch(url);
  const jsondata = await character.json();
  console.log(jsondata);

  jsondata.forEach((character) => {
    characterArray.push(character);
  });
}

function listCharacters() {
  var teacherBox = document.getElementById("teacher");
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i].name == "Severus Snape") {
      console.log("Severus");
      teacherBox.innerHTML = `
                  <img src="${characterArray[i].image}" alt="" />

      
      <h2>${characterArray[i].name}</h2>
      <h4>${characterArray[i].yearOfBirth}</h4>`;
    }
  }
}

listCharacters();

getcharacters("http://hp-api.herokuapp.com/api/characters").then(() => {
  listCharacters();
});

//Snakkebobble (input id=text):

var buttonElement = document.getElementById("text");

function myFunction() {
  paragraph.style.visibility = "hidden";
}

function myThirdFunction() {
  paragraph.style.visibility = "visible";
}

buttonElement.addEventListener("mouseleave", myFunction);
buttonElement.addEventListener("mouseover", myThirdFunction);

//Start undervisning button (div class=click):

var classroomBtn = document.getElementById("classroom-btn");
classroomBtn.onclick = startUndervisning;

function startUndervisning() {
  alert("Welkommen til klassen!");
}
