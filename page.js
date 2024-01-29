sessionStorage.index = Math.ceil(Math.random() * 83);

function data() {
fetch("https://swapi.dev/api/people/" + sessionStorage.index)
  .then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById("name").innerHTML = data["name"].charAt(0).toUpperCase() + data["name"].slice(1);
    document.getElementById("height").innerHTML = data["height"].charAt(0).toUpperCase() + data["height"].slice(1);
    document.getElementById("mass").innerHTML = data["mass"].charAt(0).toUpperCase() + data["mass"].slice(1);
    document.getElementById("hairColor").innerHTML = data["hair_color"].charAt(0).toUpperCase() + data["hair_color"].slice(1);
    document.getElementById("skinColor").innerHTML = data["skin_color"].charAt(0).toUpperCase() + data["skin_color"].slice(1);
    document.getElementById("eyeColor").innerHTML = data["eye_color"].charAt(0).toUpperCase() + data["eye_color"].slice(1);
    document.getElementById("birthYear").innerHTML = data["birth_year"].charAt(0).toUpperCase() + data["birth_year"].slice(1);
    document.getElementById("gender").innerHTML = data["gender"].charAt(0).toUpperCase() + data["gender"].slice(1);
  });
}

function back() {
  sessionStorage.index--;
  if (sessionStorage.index == 0) {
    sessionStorage.index = 83;
  }
  data();
}

function forward() {
  sessionStorage.index++;
  if (sessionStorage.index == 84) {
    sessionStorage.index = 1;
  }
  data();
}
