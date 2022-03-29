const api_url = "http://hp-api.herokuapp.com/api/characters";

async function getApi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  if (response) {
    
  }
  
}

getApi(api_url);

function listNames(){
  const names = document.getElementsByClassName("name")
  for(let i = 0; i < getApi.lenght; i++){
    names.innerHTML += `"<li id="${i}">  </li>"`
  }
}

listNames()