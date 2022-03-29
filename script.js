const api_url = "http://hp-api.herokuapp.com/api/characters";

async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  if (response) {
    
  }
  
}

getapi(api_url);


