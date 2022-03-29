let studentArray = []

async function getStudents(url) {
  const student = await fetch(url)
  const jsondata = await student.json()
  jsondata.forEach(student => {
    studentArray.push(student)
})
}

function listStudents(){
  const student = document.getElementById("name")
  for(let i = 0; i < studentArray.length; i++){
    if(studentArray[i].alive == false){
    student.innerHTML += 
    `<div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <h1>${studentArray[i].name}</h1>
        <h1>${studentArray[i].house}</h1>
        <h1>${studentArray[i].yearOfBirth}</h1>
        <h3>Dead</h3>
      </div>
    </div>`
  }
  else {
    student.innerHTML += 
    `<li id="${i}"> 
    <div class="card">
    <img class="pfp" src="${studentArray[i].image}"</img>
      <div class="container">
        <h1>${studentArray[i].name}</h1>
        <h1>${studentArray[i].house}</h1>
        <h1>${studentArray[i].yearOfBirth}</h1>
        <h2>Alive</h2>
      </div>
    </div>`
  }

}
  

}

getStudents("http://hp-api.herokuapp.com/api/characters/students").then(() => {
  listStudents()
});


