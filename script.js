let namesArray = []

async function getNames(url) {
  const name = await fetch(url)
  const jsondata = await name.json()
  jsondata.forEach(name => {
    namesArray.push(name)
})
}

function listNames(){
  const name = document.getElementById("name")
  for(let i = 0; i < namesArray.length; i++){
    name.innerHTML += `<li id="${i}"> <h3>${namesArray[i].name}</h3></li>`
  }

}

getNames("http://hp-api.herokuapp.com/api/characters").then(() => {
  listNames()
});


console.log(namesArray)