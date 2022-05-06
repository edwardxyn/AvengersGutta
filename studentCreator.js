charecterArray = [];
imageArray = ["/Images/studentdefaultpic.jpg"];

function addCharecter() {
  let nameInput = document.getElementById("name").value;
  let houseInput = document.getElementById("house").value;
  let patronusInput = document.getElementById("patronus").value;
  let defaultPic = (document.getElementById("pic").src = imageArray[0]);

  if (document.getElementById("name").value.length == 0) {
    alert("Fill out name");
    return false;
  }

  if (document.getElementById("house").value.length == 0) {
    alert("Fill out house");
    return false;
  }

  if (document.getElementById("patronus").value.length == 0) {
    alert("Fill out patronus");
    return false;
  }

  imageArray.push({
    defaultImg: defaultPic,
  });

  charecterArray.push({
    name: nameInput,
    house: houseInput,
    patronus: patronusInput,
  });

  charecters();
}

function charecters() {
  charecter.innerHTML = "";
  for (let i = 1; i < charecterArray.length; i++)
    charecter.innerHTML += `<li>
        <li><img class="pfp" src="${imageArray[i].defaultImg}"></li>
        <h2 id="userName">${charecterArray[i].name}</h2><button class="edit-button" id="edit" onclick="editCharecter()">Edit</button>
        <h2 id="userHouse">${charecterArray[i].house}</h2><button class="edit-button" id="edit" onclick="editCharecter()">Edit</button>
        <h2 id="userPatronus">${charecterArray[i].patronus}</h2><button class="edit-button" id="edit" onclick="editCharecter()">Edit</button>
        <button class="delete-button" id="delete" onclick="deleteCharecter(${i})">Delete</button>
      </li>`;
}

function editCharecter(i) {
  if (prompt("Do you wish to edit charecter? Type yes/no") == "yes") {
    charecterArray.splice(i, 1, prompt("Type edit"));
    charecters();
  } else if ("no") {
  }
  console.log(charecterArray);
}

function deleteCharecter(i) {
  if (prompt("Do you wish to delete character? type: yes/no") == "yes") {
    charecterArray.splice(i, 1), imageArray.splice(i, 1);
    charecters();
  } else if ("no") {
  }
}
