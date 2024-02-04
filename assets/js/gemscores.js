//highscores
const gems = document.querySelector("#gems");
const highGemscore = document.querySelector("#highgemscore");
const back = document.querySelector("#back");
const clear = document.querySelector("#clear");

//local storage
const allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
console.log(allScores);
if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    const createLi = document.createElement("li");
    createLi.textContent = allScores[i].name + " " + allScores[i].score;
    gems.appendChild(createLi);
  }
}

//back button
back.addEventListener("click", function () {
  window.location.replace("index.html");
});

//clear button
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
