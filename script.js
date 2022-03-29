let characterArray = []

async function getcharacters(url) {
  const character = await fetch(url)
  const jsondata = await character.json()
  jsondata.forEach(character => {
    characterArray.push(character)
})
}

function listcharacters(){
  const character = document.getElementById("name")
  for(let i = 0; i < characterArray.length; i++){
    if(characterArray[i].alive == false){
    character.innerHTML += 
    `<div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <h1>${characterArray[i].name}</h1>
        <h1>${characterArray[i].house}</h1>
        <h1>${characterArray[i].yearOfBirth}</h1>
        <h3>Dead</h3>
      </div>
    </div>`
  }
  else {
    character.innerHTML += 
    `<li id="${i}"> 
    <div class="card">
    <img class="pfp" src="${characterArray[i].image}"</img>
      <div class="container">
        <h1>${characterArray[i].name}</h1>
        <h1>${characterArray[i].house}</h1>
        <h1>${characterArray[i].yearOfBirth}</h1>
        <h2>Alive</h2>
      </div>
    </div>`
  }

}
  

}

getcharacters("http://hp-api.herokuapp.com/api/characters").then(() => {
  listcharacters()
});


console.log(characterArray)