//highscores
const highGemscore = document.querySelector('#high');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');

//clear button
clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

//local storage
var allScores = localStorage.getItem('allScores');
allScores = JSON.parse(allScores);
console.log(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    //create li
    var createLi = document.createElement('li');
    createLi.textContent = allScores[i].initials + ' ' + allScores[i].score;
    highGemscore.appendChild(createLi); 
  }
}

//back button
back.addEventListener('click', function () {
  window.location.replace('./index.html');
});